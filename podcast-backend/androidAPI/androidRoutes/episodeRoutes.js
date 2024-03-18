var express = require("express");
var episode_route = express();

//const auth = require('../middleware/auth');

const userController = require("../androidControllers/userControllers");

const episodeController = require("../androidControllers/episodeControllers");

const config = require("../androidConfig/config");

const cookieParser = require("cookie-parser");
episode_route.use(cookieParser());

const bodyParser = require("body-parser");
episode_route.use(bodyParser.json());
episode_route.use(bodyParser.urlencoded({ extended: true }));

function randomnumber() {
  return Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
}

const multer = require("multer");

const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/userData"));
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + randomnumber() + ".png";
    cb(null, name);
  },
});

const upload = multer({ storage: storage });

const uploader = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 500000 },
});

//const upload1 = multer({ dest: '../public/users/' });

episode_route.use(express.static("public"));

//route to create episode

episode_route.post(
  "/changeCoverImage",
  //auth.islogout,
  //uploader.single("image"),
  episodeController.createEpisode
);

module.exports = episode_route;
