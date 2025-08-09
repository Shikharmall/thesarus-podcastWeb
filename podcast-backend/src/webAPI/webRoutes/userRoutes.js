const express = require("express");
const user_route = express();

const {
  registerUser,
  verifyMail,
  changePassword,
  editUser,
  logout,
  loginUser,
  changeProfileImage,
  changeCoverImage,
  forgotPasswordSendEmail,
  getMyDetails,
  sendTempEmail,
} = require("../webControllers/userController");

const validateForm = require("../../validation/validation");

const cookieParser = require("cookie-parser");
user_route.use(cookieParser());

const bodyParser = require("body-parser");
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({ extended: true }));

const multer = require("multer");
const { isLogin } = require("../webMiddlewares/webAuth");

//function randomnumber() {
//  return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
//}
//const path = require("path");
///const storage = multer.diskStorage({
///  destination: function (req, file, cb) {
///    cb(null, path.join(__dirname, "../../public/userData"));
///  },
///  filename: function (req, file, cb) {
///    const name = Date.now() + "-" + randomnumber() + ".png";
///    cb(null, name);
///  },
///});
//const upload = multer({ storage: storage });
//const upload1 = multer({ dest: '../public/users/' });

const uploader = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 500000 },
});

user_route.use(express.static("public"));

user_route.post("/registerUser", validateForm, registerUser);
user_route.post("/sendTempEmail", sendTempEmail);
user_route.post("/verifymail", verifyMail);
user_route.post("/getMyDetails", getMyDetails);
user_route.post("/loginUser", loginUser);
user_route.post("/logout", isLogin, logout);
user_route.post("/forgotPasswordSendEmail", forgotPasswordSendEmail);
user_route.patch("/changePassword", changePassword);
user_route.patch("/editUser", isLogin, editUser);
user_route.patch(
  "/changeProfileImage",
  isLogin,
  uploader.single("image"),
  changeProfileImage
);
user_route.patch(
  "/changeCoverImage",
  isLogin,
  uploader.single("image"),
  changeCoverImage
);

module.exports = user_route;
