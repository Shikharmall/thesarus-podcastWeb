const nodemailer = require("nodemailer");

const sendVerifyMail = async (name, email, userId) => {
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
        `, </p> <p> Please click on the given link <a href="${process.env.FRONTEND_URL}/verifymail?id=
          ${userId} 
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

const sendforgotpasswordMail = async (name, email, userId) => {
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
        `, </p> <p> Please click on the given link <a href="${process.env.FRONTEND_URL}/forgotpaswordedit?id='+${userId}+'"> Change Password </a> to change your password. </p>  <br> <h4>Thanks , Team The SARUS.</h4>`,
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

module.exports = {
  sendVerifyMail,
  sendforgotpasswordMail,
};
