const express = require("express");
const episode_route = express();

const {
  createEpisode,
  toggleEpisodeLive,
  getEpisode,
  getEpisodes,
  editEpisode,
  addEpisodeFrontImage,
  addEpisodeCoverImage,
  addVideo,
} = require("../webControllers/episodeController");

const cookieParser = require("cookie-parser");
episode_route.use(cookieParser());

const bodyParser = require("body-parser");
episode_route.use(bodyParser.json());
episode_route.use(bodyParser.urlencoded({ extended: true }));

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

const uploaderVideo = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 500000 },
});

episode_route.use(express.static("public"));

episode_route.post("/createEpisode", isLogin, createEpisode);
episode_route.patch("/toggleEpisodeLive", isLogin, toggleEpisodeLive);
episode_route.get("/getEpisode", isLogin, getEpisode);
episode_route.get("/getEpisodes", isLogin, getEpisodes);
episode_route.patch(
  "/addEpisodeFrontImage",
  isLogin,
  uploader.single("image"),
  addEpisodeFrontImage
);
episode_route.patch(
  "/addEpisodeCoverImage",
  isLogin,
  uploader.single("image"),
  addEpisodeCoverImage
);
episode_route.patch("/editEpisode", isLogin, editEpisode);
episode_route.patch(
  "/addVideo",
  isLogin,
  uploaderVideo.single("video"),
  addVideo
);

//episode_route.post("/verifymail", verifyMail);
//episode_route.post("/loginUser", loginUser);
//episode_route.post("/logout", isLogin, logout);
//episode_route.post("/forgotPasswordSendEmail", forgotPasswordSendEmail);
//episode_route.patch("/changePassword", changePassword);
//episode_route.patch("/editUser", isLogin, editUser);
//episode_route.patch(
//  "/changeProfileImage",
//  isLogin,
//  uploader.single("image"),
//  changeProfileImage
//);
//episode_route.patch(
//  "/changeCoverImage",
//  isLogin,
//  uploader.single("image"),
//  changeCoverImage
//);

/*

// user page 

    episode_route.get('/searchuser',  userController.searchuser);

// register to podcast 

    episode_route.get('/register', auth.islogin , userController.loadRegister);
    
    episode_route.post('/registeruser', auth.islogin , userController.insertUser);

    episode_route.get('/verifymail', auth.islogin , userController.verifymail);

    episode_route.post('/edituser', auth.islogout , userController.edituser);

    episode_route.post('/changeprofilepic', auth.islogout , upload.single('image') , userController.changeprofilepic);

    episode_route.post('/changecoverpic', auth.islogout , upload.single('image') , userController.changecoverpic);

    episode_route.post('/subscribe', auth.islogout ,  userController.subscribe);

    episode_route.post('/unsubscribe', auth.islogout ,  userController.unsubscribe);

// forgot password

    episode_route.get('/forgotpassword',userController.loadforgotpassword);
    
    episode_route.post('/forgotpasswordsendemail',userController.forgotpasswordsendemail);
    
    episode_route.get('/forgotpaswordedit',userController.forgotpaswordedit);
    
    episode_route.post('/changepassword',userController.changepassword);

*/

module.exports = episode_route;
