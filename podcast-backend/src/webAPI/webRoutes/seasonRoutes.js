const express = require("express");
const season_route = express();

const {
  createSeason,
  getSeason,
  toggleSeasonLive,
  getSeasons,
  editSeason,
  addSeasonFrontImage,
  addSeasonCoverImage,
  addSeasonTitleImage,
  addTailor,
} = require("../webControllers/seasonController");

const cookieParser = require("cookie-parser");
season_route.use(cookieParser());

const bodyParser = require("body-parser");
season_route.use(bodyParser.json());
season_route.use(bodyParser.urlencoded({ extended: true }));

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

season_route.use(express.static("public"));

season_route.post("/createSeason", isLogin, createSeason);
season_route.patch("/toggleSeasonLive", isLogin, toggleSeasonLive);
season_route.get("/getSeason", isLogin, getSeason);
season_route.get("/getSeasons", isLogin, getSeasons);
season_route.patch(
  "/addSeasonFrontImage",
  isLogin,
  uploader.single("image"),
  addSeasonFrontImage
);
season_route.patch(
  "/addSeasonCoverImage",
  isLogin,
  uploader.single("image"),
  addSeasonCoverImage
);
season_route.patch(
  "/addSeasonTitleImage",
  isLogin,
  uploader.single("image"),
  addSeasonTitleImage
);
season_route.patch("/editSeason", isLogin, editSeason);
season_route.patch(
  "/addTailor",
  isLogin,
  uploaderVideo.single("trailorVideo"),
  addTailor
);

module.exports = season_route;
