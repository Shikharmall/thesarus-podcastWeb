const express = require("express");
const podcast_route = express();

const {
  createPodcast,
  togglePodcastLive,
  getPodcast,
  getPodcasts,
  addPodcastFrontImage,
  editPodcast,
} = require("../webControllers/podcastControllers");

const cookieParser = require("cookie-parser");
podcast_route.use(cookieParser());

const bodyParser = require("body-parser");
podcast_route.use(bodyParser.json());
podcast_route.use(bodyParser.urlencoded({ extended: true }));


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


podcast_route.use(express.static("public"));

podcast_route.post("/createPodcast", isLogin, createPodcast);
podcast_route.patch("/togglePodcastLive", isLogin, togglePodcastLive);
podcast_route.get("/getPodcast", getPodcast);
podcast_route.get("/getPodcasts", getPodcasts);
podcast_route.patch(
  "/addPodcastFrontImage",
  isLogin,
  uploader.single("image"),
  addPodcastFrontImage
);
podcast_route.patch("/editPodcast", isLogin, editPodcast);

//podcast_route.post("/verifymail", verifyMail);
//podcast_route.post("/loginUser", loginUser);
//podcast_route.post("/logout", isLogin, logout);
//podcast_route.post("/forgotPasswordSendEmail", forgotPasswordSendEmail);
//podcast_route.patch("/changePassword", changePassword);
//podcast_route.patch("/editUser", isLogin, editUser);
//podcast_route.patch(
//  "/changeProfileImage",
//  isLogin,
//  uploader.single("image"),
//  changeProfileImage
//);
//podcast_route.patch(
//  "/changeCoverImage",
//  isLogin,
//  uploader.single("image"),
//  changeCoverImage
//);

/*

// playpage

    podcast_route.get('/playpage', auth.islogout , userController.playpage);


// search 

    podcast_route.get('/search',channelController.podcast);



// channel 

    podcast_route.get('/channel',channelController.channel);

// user page 

    podcast_route.get('/user', auth.islogout , userController.userpage);

    podcast_route.get('/searchuser',  userController.searchuser);

// login page 

    podcast_route.get('/login', auth.islogin , userController.loginpage);


// register to podcast 

    podcast_route.get('/register', auth.islogin , userController.loadRegister);
    
    podcast_route.post('/registeruser', auth.islogin , userController.insertUser);

    podcast_route.get('/verifymail', auth.islogin , userController.verifymail);

    podcast_route.post('/edituser', auth.islogout , userController.edituser);

    podcast_route.post('/changeprofilepic', auth.islogout , upload.single('image') , userController.changeprofilepic);

    podcast_route.post('/changecoverpic', auth.islogout , upload.single('image') , userController.changecoverpic);

    podcast_route.post('/subscribe', auth.islogout ,  userController.subscribe);

    podcast_route.post('/unsubscribe', auth.islogout ,  userController.unsubscribe);


// opened list page

    podcast_route.get('/openedlist' , userController.openedlist);
    
    podcast_route.get('/openedlistlogin' , auth.islogout , userController.openedlistlogin);


// forgot password

    podcast_route.get('/forgotpassword',userController.loadforgotpassword);
    
    podcast_route.post('/forgotpasswordsendemail',userController.forgotpasswordsendemail);
    
    podcast_route.get('/forgotpaswordedit',userController.forgotpaswordedit);
    
    podcast_route.post('/changepassword',userController.changepassword);


// check login 

    podcast_route.post('/checklogin',userController.checkUser);

// channel 

    podcast_route.get('/createchannel', auth.islogout ,  channelController.createchannel);
    
    podcast_route.post('/addchannel',auth.islogout , upload.single('file') , channelController.insertChannel);

    //podcast_route.get('/makelive', auth.islogout ,  channelController.makelive);
    
    //podcast_route.get('/addepisode', auth.islogout , channelController.addepisode);


// logout 

    podcast_route.get('/logout', auth.islogout , userController.logout);

*/

module.exports = podcast_route;
