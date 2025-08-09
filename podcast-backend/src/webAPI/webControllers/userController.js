const User = require("../../models/userModel");
const { securePassword, checkPassword } = require("../../utils/securePassword");
const {
  sendVerifyMail,
  sendforgotpasswordMail,
} = require("../../utils/sendEmail");
const {
  generateToken,
  verifyToken,
} = require("../../utils/jwtTokenManagement");
const { uploadImage } = require("../../utils/uploadContent");
const getTokenFromCookie = require("../../utils/getTokenFromCookie");

/*-------------------------register user-----------------------*/

const registerUser = async (req, res) => {
  try {
    const { name, email, password, repassword, phone } = req.body;

    if (password !== repassword) {
      return res
        .status(500)
        .json({ status: "failed", message: "password not matched." });
    }

    const spassword = await securePassword(password);

    if (spassword) {
      const user = new User({
        name: name,
        email: email,
        password: spassword,
        phone: phone,
        profileImage: "N/A",
        coverImage: "N/A",
        description: "N/A",
        channelName: "N/A",
        isVerified: false,
        subscribers: 0,
        token: "N/A",
      });
      const userData = await user.save();
      const sent = sendVerifyMail(req.body.name, req.body.email, userData._id);
      if (!sent) {
        return res.status(500).json({
          status: "failed",
          message: "user registered but email not sent",
        });
      }
      return res.status(201).json({ status: "success", data: userData });
    } else {
      return res
        .status(500)
        .json({ status: "failed", message: "password not hashed." });
    }
  } catch (error) {
    //console.log(error.message);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------verify email-----------------------*/

const verifyMail = async (req, res) => {
  try {
    const { id } = req.query;

    const userData = await User.findById({ _id: id });

    if (!userData) {
      return res
        .status(500)
        .json({ status: "failed", message: "user not found" });
    }

    const updatedinfo = await User.updateOne(
      { _id: id },
      { $set: { isVerified: true } },
      { new: true }
    );
    return res.status(201).json({ status: "success", data: updatedinfo });
  } catch (error) {
    //onsole.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------login user-----------------------*/

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userData = await User.findOne({
      email,
    });

    if (!userData) {
      return res
        .status(500)
        .json({ status: "failed", message: "email not exist" });
    }

    if (!userData.isVerified) {
      return res
        .status(500)
        .json({ status: "failed", message: "user not verified" });
    }

    const matchPassword = await checkPassword(password, userData.password);

    if (!matchPassword) {
      return res
        .status(404)
        .json({ status: "failed", message: "Password not matched" });
    }

    //const tokenAge = 259200; // 3 days = 259200 seconds
    //const token = generateToken(userData._id, tokenAge);

    const token = await generateToken(userData._id);

    return res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        //maxAge: tokenAge * 1000, // 3 days
      })
      .json({
        status: "success",
        data: { userId: userData._id, token: token },
      });
  } catch (error) {
    //console.log(error.message);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------logout user-----------------------*/

const logout = async (req, res) => {
  return res.clearCookie("access_token").status(200).json({
    status: "success",
    message: "Successfully logged out.",
  });
};

/*-------------------------send forgot password mail-----------------------*/

const forgotPasswordSendEmail = async (req, res) => {
  try {
    const { email } = req.body;

    const userData = await User.findOne({
      email,
    });

    if (!userData) {
      return res.status(500).json({
        status: "failed",
        message: "email not found.",
      });
    }

    const emailSent = sendforgotpasswordMail(
      userData.name,
      email,
      userData._id
    );

    if (!emailSent) {
      return res.status(500).json({
        status: "failed",
        message: "email not sent.",
      });
    }

    return res.status(200).json({
      status: "success",
      message: "email sent.",
    });
  } catch (error) {
    //console.log(error.message);
    return res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

/*-------------------------change password-----------------------*/

const changePassword = async (req, res) => {
  try {
    const { id, password, repassword } = req.body;
    if (password !== repassword) {
      return res.status(500).json({
        status: "failed",
        message: "password not matched",
      });
    }

    const spassword = await securePassword(password);

    await User.updateOne({ _id: id }, { $set: { password: spassword } });

    return res.status(201).json({
      status: "succcess",
      message: "password changed",
    });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

/*-------------------------edit user-----------------------*/

const editUser = async (req, res) => {
  try {
    const { name, description, channelName, id } = req.body;

    const updatedData = await User.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          name,
          description,
          channelName,
        },
      },
      { new: true }
    );

    return res.status(201).json({ status: "success", data: updatedData });
  } catch (error) {
    //console.log(error.message);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

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

/*-------------------------get logged in user details-----------------------*/

const getMyDetails = async (req, res) => {
  try {
    const { project } = req.body;

    const token = getTokenFromCookie(req);
    //console.log(token);
    const verifyUser = await verifyToken(token);
    const userid = verifyUser.userId;

    const userData = await User.findById({ _id: userid }).select(project);

    return res.status(200).json({ status: "success", data: userData });
  } catch (error) {
    //console.log(error.message);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------get users details-----------------------*/

const getUsers = async (req, res) => {
  try {
    const usersData = await User.find();

    //const channelData = await Channel.find({ user_id: id }).sort({
    //  createdAt: -1,
    //});
    //const channelCount = await Channel.find({
    //  user_id: id,
    //}).countDocuments();

    //const token = req.cookies.userid;

    /*if (typeof token === "undefined") {
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
    }*/

    return res.status(200).json({
      status: "success",
      data: usersData,
    });
  } catch (error) {
    //console.log(error.message);
    return res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

/*-------------------------change user profile pic-----------------------*/

const changeProfileImage = async (req, res) => {
  try {
    const { id } = req.body;
    const uploadedImage = await uploadImage(req.file.path);

    if (uploadedImage) {
      const changedProfileImage = await User.updateOne(
        { _id: id },
        { $set: { profileImage: uploadedImage.secure_url } },
        { new: true }
      );

      return res
        .status(201)
        .json({ status: "success", data: changedProfileImage });
    } else {
      return res.status(500).json({
        status: "failed",
        message: "profile image not uploaded on cloudinary.",
      });
    }
  } catch (error) {
    //console.log(error.message);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------change user cover pic-----------------------*/

const changeCoverImage = async (req, res) => {
  try {
    const { id } = req.body;
    const uploadedImage = await uploadImage(req.file.path);

    if (uploadedImage) {
      const changedCoverImage = await User.updateOne(
        { _id: id },
        { $set: { coverImage: uploadedImage.secure_url } },
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
    //console.log(error.message);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

module.exports = {
  registerUser,
  verifyMail,
  loginUser,
  logout,
  forgotPasswordSendEmail,
  changePassword,
  editUser,
  changeProfileImage,
  changeCoverImage,
  getMyDetails,
};
