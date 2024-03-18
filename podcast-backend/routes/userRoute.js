var express = require('express');
var user_route = express();

const auth = require('../middleware/auth');


const userController = require('../controllers/userController');
const channelController = require('../controllers/channelControllers');
const channelAPIController = require('../controllers/channelAPIControllers');
const config = require('../config/config');


const cookieParser = require('cookie-parser');
user_route.use(cookieParser());

user_route.set('view engine','ejs');
user_route.set('views','./views');


const bodyParser = require('body-parser');
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}));



function randomnumber(){
    return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
}

const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination:function(req,file,cb){
      cb(null,path.join(__dirname,'../public/users'));
    },
    filename:function(req,file,cb){
      const name = Date.now()+'-'+randomnumber()+'.png';
      cb(null,name);
    }
});

const upload = multer({storage:storage});

//const upload1 = multer({ dest: '../public/users/' });



user_route.use(express.static('public'));



/* home page */

    user_route.get('/',(req,res)=>{
        res.render('home');
    });

/* home page */




/* playpage */

    user_route.get('/playpage', auth.islogout , userController.playpage);

/* playpage */




/* search */

    user_route.get('/search',channelController.podcast);

/* search */


/* channel */

    user_route.get('/channel',channelController.channel);

/* channel */





/* user page */

    user_route.get('/user', auth.islogout , userController.userpage);

    user_route.get('/searchuser',  userController.searchuser);

/* user page */





/* login page */

    user_route.get('/login', auth.islogin , userController.loginpage);

/* login page */





/* register to podcast */

    user_route.get('/register', auth.islogin , userController.loadRegister);
    
    user_route.post('/registeruser', auth.islogin , userController.insertUser);

    user_route.get('/verifymail', auth.islogin , userController.verifymail);

    user_route.post('/edituser', auth.islogout , userController.edituser);

    user_route.post('/changeprofilepic', auth.islogout , upload.single('image') , userController.changeprofilepic);

    user_route.post('/changecoverpic', auth.islogout , upload.single('image') , userController.changecoverpic);

    user_route.post('/subscribe', auth.islogout ,  userController.subscribe);

    user_route.post('/unsubscribe', auth.islogout ,  userController.unsubscribe);

/* register to podcast */






/* opened list page */

    user_route.get('/openedlist' , userController.openedlist);
    
    user_route.get('/openedlistlogin' , auth.islogout , userController.openedlistlogin);

/* opened list page */






/* forgot password */

    user_route.get('/forgotpassword',userController.loadforgotpassword);
    
    user_route.post('/forgotpasswordsendemail',userController.forgotpasswordsendemail);
    
    user_route.get('/forgotpaswordedit',userController.forgotpaswordedit);
    
    user_route.post('/changepassword',userController.changepassword);

/* forgot password */





/* check login */

    user_route.post('/checklogin',userController.checkUser);

/* check login */



/* channel */

    user_route.get('/createchannel', auth.islogout ,  channelController.createchannel);
    
    user_route.post('/addchannel',auth.islogout , upload.single('file') , channelController.insertChannel);

    //user_route.get('/makelive', auth.islogout ,  channelController.makelive);
    
    //user_route.get('/addepisode', auth.islogout , channelController.addepisode);

/* channel */



/* logout */

    user_route.get('/logout', auth.islogout , userController.logout);

/* logout */



module.exports = user_route;



