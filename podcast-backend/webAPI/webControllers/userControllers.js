const User = require("../androidModels/userModels");
//const Channel = require("../models/channelModel");
//const Subscriber = require("../models/subscriberModel");

const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const config = require("../androidConfig/config");
const UploadImage = require("../androidUtils/uploadImage");

//const cookies = require('cookie');

//const subscriberModel = require("../models/subscriberModel");

// function to create hash password

const securePassword = async (password) => {
  try {
    const passwordhash = bcrypt.hash(password, 10);
    return passwordhash;
  } catch (error) {
    console.log(error.message);
    return "N/A";
  }
};

// generate json web token
const generateToken = async (user_id) => {
  try {
    const token = jwt.sign({ user_id }, config.jwtSecret);
    return token;
  } catch (error) {
    console.log(error);
  }
};

// function to send mail

const sendVerifyMail = async (name, email, user_id) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Email Verification",
      html:
        `<p>Hi ` +
        name +
        `, </p> <p> Please click on the given link <a href="http://127.0.0.1:${
          process.env.PORT || 5174
        }/verifymail?id=
        ${user_id} 
        "> Verify </a> to verify your email. </p>  <br> <h4>Thanks , Team The SARUS.</h4>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email has been sent:-", info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

const sendforgotpasswordMail = async (name, email, user_id) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      requireTLS: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Forgot Password",
      html:
        `<p>Hi ` +
        name +
        `, </p> <p> Please click on the given link <a href="http://127.0.0.1:${
          process.env.PORT || 5174
        }/forgotpaswordedit?id='+user_id+'"> Change Password </a> to change your password. </p>  <br> <h4>Thanks , Team The SARUS.</h4>`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email has been sent:-", info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

// register user

const registerUser = async (req, res) => {
  try {
    if (req.body.pass === req.body.repass) {
      const spassword = await securePassword(req.body.pass);

      if (spassword === "N/A") {
        return res
          .status(500)
          .json({ status: "failed", message: "password not secured." });
      } else {
        const user = new User({
          name: req.body.name,
          email: req.body.email,
          password: spassword,
          phone: req.body.phone,
          profileImage: "N/A",
          coverImage: "N/A",
          description: "N/A",
          channelName: "N/A",
          isVerified: 0,
          subscribers: 0,
          token: "N/A",
        });

        const userData = await user.save();

        if (userData) {
          //sendVerifyMail(req.body.name, req.body.email, userData._id);

          return res.status(201).json({ status: "success", data: userData });
        } else {
          return res
            .status(500)
            .json({ status: "failed", message: "registration failed." });
        }
      }
    } else {
      return res
        .status(500)
        .json({ status: "failed", message: "password not matched." });
    }
  } catch (error) {
    //console.log(error.message);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

// check user login

const loginUser = async (req, res) => {
  try {
    const email = req.body.email;
    const pass = req.body.pass;

    const userData = await User.findOne({
      email: email,
    });

    if (userData) {
      if (userData.isVerified) {
        const passMatch = await bcrypt.compare(pass, userData.password);
        if (passMatch) {
          const jwtoken = await generateToken(userData._id);

          //res.cookie("userid", jwtoken, {
          //  expires: new Date(Date.now() + 864000000),
          //  httpOnly: true, //client side abb cookies ko kuch ni krr paega.
          //  //,secure:true
          //});

          //res.redirect("/");

          return res.status(200).json({ status: "success", data: jwtoken });
        } else {
          return res
            .status(500)
            .json({ status: "failed", message: "password not matched." });
        }
      } else {
        return res
          .status(500)
          .json({ status: "failed", message: "email not verfied." });
      }
    } else {
      return res
        .status(500)
        .json({ status: "failed", message: "email not found." });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*
const verifymail = async (req, res) => {
  try {
    const updatedinfo = await User.updateOne(
      { _id: req.query.id },
      { $set: { is_verified: 1 } }
    );

    res.render("login", { message: "Email Verified." });
  } catch (error) {
    console.log(error);
  }
};*/

const subscribe = async (req, res) => {
  try {
    const token = req.cookies.userid;

    const verifyUser = jwt.verify(token, config.jwtSecret);
    const subscriberid = verifyUser.user_id;

    const userData1 = await User.findById({ _id: req.body.channeluser });
    const aaa = Number(userData1.subscribers) + 1;
    const userUpdate = await User.findByIdAndUpdate(
      { _id: req.body.channeluser },
      { $set: { subscribers: aaa } }
    );

    if (userUpdate) {
      const subscriber = new Subscriber({
        channeluserid: req.body.channeluser,
        subscriberid: subscriberid,
      });

      const subscriberData = await subscriber.save();

      /*const userid = req.body.channeluser;
            const userData = await User.findById({ _id: userid });
    
            const channelData = await Channel.find({ user_id: userid }).sort({createdAt:-1});
            const channelCount = await Channel.find({ user_id: userid }).countDocuments();
    
            res.render('user',{ user:userData , flag:"0" , channelData:channelData ,channelCount:channelCount , sub:"0"});*/

      res.redirect("/searchuser?id=" + req.body.channeluser);
    }
  } catch (error) {
    console.log(error);
  }
};

const unsubscribe = async (req, res) => {
  try {
    const token = req.cookies.userid;

    const verifyUser = jwt.verify(token, config.jwtSecret);
    const subscriberid = verifyUser.user_id;

    const userData1 = await User.findById({ _id: req.body.channeluser });
    const aaa = Number(userData1.subscribers) - 1;
    const userUpdate = await User.findByIdAndUpdate(
      { _id: req.body.channeluser },
      { $set: { subscribers: aaa } }
    );

    if (userUpdate) {
      const subscriberData = await Subscriber.deleteOne(
        { channeluserid: req.body.channeluser },
        { subscriberid: subscriberid }
      );

      /*const userid = req.body.channeluser;
            const userData = await User.findById({ _id: userid });
    
            const channelData = await Channel.find({ user_id: userid }).sort({createdAt:-1});
            const channelCount = await Channel.find({ user_id: userid }).countDocuments();
    
            res.render('user',{ user:userData , flag:"0" , channelData:channelData ,channelCount:channelCount , sub:"1"});*/

      res.redirect("/searchuser?id=" + req.body.channeluser);
    }
  } catch (error) {
    console.log(error);
  }
};

/*

// forgot password 

const loadforgotpassword = async (req, res) => {
  try {
    res.render("forgotpassword");
  } catch (error) {
    console.log(error.message);
  }
};

const forgotpasswordsendemail = async (req, res) => {
  try {
    const email = req.body.email;

    const userData = await User.findOne({
      email: email,
    });

    if (userData) {
      sendforgotpasswordMail(userData.name, req.body.email, userData._id);
      res.render("login", { message: "Email sent." });
    } else {
      res.render("forgotpassword", { message: "Email Not Registered." });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const forgotpaswordedit = async (req, res) => {
  try {
    const user = {
      id: req.query.id,
    };

    res.render("changepassword", { user: user });
  } catch (error) {
    console.log(error);
  }
};

const changepassword = async (req, res) => {
  try {
    if (req.body.pass == req.body.repass) {
      const spassword = await securePassword(req.body.pass);

      const updatedinfo = await User.updateOne(
        { _id: req.body.id },
        { $set: { password: spassword } }
      );

      if (updatedinfo) {
        res.render("login", { message: "Password Changed." });
      } else {
        res.render("changepassword", { message: "Password Change Failed." });
      }
    } else {
      const user = {
        id: req.body.id,
      };

      res.render(
        "changepassword",
        { message: "Password Not Matched." },
        { user: user }
      );
    }

    // User.findById(_id:req.)

    res.render("login", { message: "Password Changed." });
  } catch (error) {
    console.log(error);
  }
};



// userpage 

const userpage = async (req, res) => {
  try {
    const token = req.cookies.userid;
    const verifyUser = jwt.verify(token, config.jwtSecret);
    const userid = verifyUser.user_id;

    const userData = await User.findById({ _id: userid });

    const channelData = await Channel.find({ user_id: userid }).sort({
      createdAt: -1,
    });
    const channelCount = await Channel.find({
      user_id: userid,
    }).countDocuments();

    res.render("user", {
      user: userData,
      flag: "1",
      channelData: channelData,
      channelCount: channelCount,
    });
  } catch (error) {
    console.log(error.message);
  }
};


const searchuser = async (req, res) => {
  try {
    const userid = req.query.id;

    const userData = await User.findById({ _id: userid });

    const channelData = await Channel.find({ user_id: userid }).sort({
      createdAt: -1,
    });
    const channelCount = await Channel.find({
      user_id: userid,
    }).countDocuments();

    const token = req.cookies.userid;

    if (typeof token === "undefined") {
      const sub = "1";
      res.render("user", {
        user: userData,
        flag: "0",
        channelData: channelData,
        channelCount: channelCount,
        sub: sub,
      });
    } else {
      const verifyUser = jwt.verify(token, config.jwtSecret);
      const subscriberid = verifyUser.user_id;

      const subscriberData = await subscriberModel.findOne({
        $and: [{ channeluserid: userid }, { subscriberid: subscriberid }],
      });

      if (subscriberData == null) {
        const sub = "1";
        res.render("user", {
          user: userData,
          flag: "0",
          channelData: channelData,
          channelCount: channelCount,
          sub: sub,
        });
      } else {
        const sub = "0";
        res.render("user", {
          user: userData,
          flag: "0",
          channelData: channelData,
          channelCount: channelCount,
          sub: sub,
        });
      }
    }
  } catch (error) {
    console.log(error.message);
  }
};

// logout 

const logout = async (req, res) => {
  try {
    res.clearCookie("userid");
    res.redirect("/");
  } catch (error) {
    console.log(error.message);
  }
};

*/

const editUser = async (req, res) => {
  try {
    const { name, description, channelName, userId } = req.body;
    //const token = req.cookies.userid;
    //const verifyUser = jwt.verify(token, config.jwtSecret);
    //const userid = verifyUser.user_id;

    const updatedData = await User.findByIdAndUpdate(
      { _id: userId },
      {
        $set: {
          name: name,
          description: description,
          channelName: channelName,
        },
      },
      { new: true }
    );

    if (updatedData) {
      return res.status(201).json({ status: "success", data: updatedData });
    } else {
      return res
        .status(500)
        .json({ status: "failed", message: "user not updated." });
    }

    /*const userData = await User.findById({ _id: userid });

    const channelData = await Channel.find({ user_id: userid }).sort({
      createdAt: -1,
    });
    const channelCount = await Channel.find({
      user_id: userid,
    }).countDocuments();

    res.render("user", {
      user: userData,
      flag: "1",
      channelData: channelData,
      channelCount: channelCount,
    });*/
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

const changeProfileImage = async (req, res) => {
  try {
    //const userid = await getuseridfromtoken();
    //const token = req.cookies.userid;
    //const verifyUser = jwt.verify(token, config.jwtSecret);
    //return verifyUser.user_id;
    //const userid = verifyUser.user_id;

    //console.log(req.file.filename);

    const { userId } = req.body;

    //console.log(req.file.path);

    const uploadedImage = await UploadImage.uploadImage(req.file.path);

    if (uploadedImage) {
      const changedProfileImage = await User.updateOne(
        { _id: userId },
        { $set: { profileImage: uploadedImage.secure_url } },
        { new: true }
      );

      if (changedProfileImage) {
        return res
          .status(201)
          .json({ status: "success", data: changedProfileImage });
      } else {
        return res
          .status(500)
          .json({ status: "failed", message: "profile image change failed." });
      }
    } else {
      return res.status(500).json({
        status: "failed",
        message: "profile image not uploaded on cloudinary.",
      });
    }

    //console.log(uploadedImage);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

const changeCoverImage = async (req, res) => {
  try {
    //const userid = await getuseridfromtoken();
    //const token = req.cookies.userid;
    //const verifyUser = jwt.verify(token, config.jwtSecret);
    //return verifyUser.user_id;
    //const userid = verifyUser.user_id;

    //console.log(req.file.filename);

    const { userId } = req.body;

    const uploadedImage = await UploadImage.uploadImage(req.file.path);

    if (uploadedImage) {
      const changedCoverImage = await User.updateOne(
        { _id: userId },
        { $set: { coverImage: req.file.filename } },
        { new: true }
      );

      if (changedCoverImage) {
        return res
          .status(201)
          .json({ status: "success", data: changedCoverImage });
      } else {
        return res
          .status(500)
          .json({ status: "failed", message: "cover image change failed." });
      }
    } else {
      return res.status(500).json({
        status: "failed",
        message: "cover image not uploaded on cloudinary.",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

module.exports = {
  /*loginpage,
  loadRegister,
  loadforgotpassword,
  forgotpasswordsendemail,
  forgotpaswordedit,
  changepassword,
  insertUser,
  edituser,
  subscribe,
  unsubscribe,
  changeprofilepic,
  changecoverpic,
  searchuser,
  checkUser,
  userpage,
  playpage,
  logout,
  verifymail,
  openedlist,
  openedlistlogin,*/
  registerUser,
  loginUser,
  editUser,
  changeProfileImage,
  changeCoverImage,
};
