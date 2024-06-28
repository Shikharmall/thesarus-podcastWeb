var express = require("express");
var season_route = express();

const {
  createSeason,
  getSeason,
  toggleSeasonLive,
  getSeasons,
  editSeason,
} = require("../webControllers/seasonControllers");

const cookieParser = require("cookie-parser");
season_route.use(cookieParser());

const bodyParser = require("body-parser");
season_route.use(bodyParser.json());
season_route.use(bodyParser.urlencoded({ extended: true }));

//function randomnumber() {
//  return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
//}

const multer = require("multer");
const { isLogin } = require("../webMiddlewares/webAuth");

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

const uploader = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 500000 },
});

//const upload1 = multer({ dest: '../public/users/' });

season_route.use(express.static("public"));

season_route.post("/createSeason", isLogin, createSeason);
season_route.patch("/toggleSeasonLive", isLogin, toggleSeasonLive);
season_route.get("/getSeason", isLogin, getSeason);
season_route.get("/getSeasons", isLogin, getSeasons);
//season_route.patch(
//  "/addSeasonFrontImage",
//  isLogin,
//  uploader.single("image"),
//  addPodcastFrontImage
//);
season_route.patch("/editSeason", isLogin, editSeason);

//season_route.post("/verifymail", verifyMail);
//season_route.post("/loginUser", loginUser);
//season_route.post("/logout", isLogin, logout);
//season_route.post("/forgotPasswordSendEmail", forgotPasswordSendEmail);
//season_route.patch("/changePassword", changePassword);
//season_route.patch("/editUser", isLogin, editUser);
//season_route.patch(
//  "/changeProfileImage",
//  isLogin,
//  uploader.single("image"),
//  changeProfileImage
//);
//season_route.patch(
//  "/changeCoverImage",
//  isLogin,
//  uploader.single("image"),
//  changeCoverImage
//);

/*

// playpage

    season_route.get('/playpage', auth.islogout , userController.playpage);


// search 

    season_route.get('/search',channelController.podcast);



// channel 

    season_route.get('/channel',channelController.channel);

// user page 

    season_route.get('/user', auth.islogout , userController.userpage);

    season_route.get('/searchuser',  userController.searchuser);

// login page 

    season_route.get('/login', auth.islogin , userController.loginpage);


// register to podcast 

    season_route.get('/register', auth.islogin , userController.loadRegister);
    
    season_route.post('/registeruser', auth.islogin , userController.insertUser);

    season_route.get('/verifymail', auth.islogin , userController.verifymail);

    season_route.post('/edituser', auth.islogout , userController.edituser);

    season_route.post('/changeprofilepic', auth.islogout , upload.single('image') , userController.changeprofilepic);

    season_route.post('/changecoverpic', auth.islogout , upload.single('image') , userController.changecoverpic);

    season_route.post('/subscribe', auth.islogout ,  userController.subscribe);

    season_route.post('/unsubscribe', auth.islogout ,  userController.unsubscribe);


// opened list page

    season_route.get('/openedlist' , userController.openedlist);
    
    season_route.get('/openedlistlogin' , auth.islogout , userController.openedlistlogin);


// forgot password

    season_route.get('/forgotpassword',userController.loadforgotpassword);
    
    season_route.post('/forgotpasswordsendemail',userController.forgotpasswordsendemail);
    
    season_route.get('/forgotpaswordedit',userController.forgotpaswordedit);
    
    season_route.post('/changepassword',userController.changepassword);


// check login 

    season_route.post('/checklogin',userController.checkUser);

// channel 

    season_route.get('/createchannel', auth.islogout ,  channelController.createchannel);
    
    season_route.post('/addchannel',auth.islogout , upload.single('file') , channelController.insertChannel);

    //season_route.get('/makelive', auth.islogout ,  channelController.makelive);
    
    //season_route.get('/addepisode', auth.islogout , channelController.addepisode);


// logout 

    season_route.get('/logout', auth.islogout , userController.logout);

*/

module.exports = season_route;
