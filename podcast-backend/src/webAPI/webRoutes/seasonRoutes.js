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

const uploader = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 5000000 }, //upto 5mb image
});

const uploaderVideo = multer({
  storage: multer.diskStorage({}),
  limits: { fileSize: 500000 },
});

season_route.use(express.static("public"));

season_route.post("/createSeason", isLogin, createSeason);
season_route.patch("/toggleSeasonLive", isLogin, toggleSeasonLive);
season_route.post("/getSeason", getSeason);
season_route.post("/getSeasons", getSeasons);
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
