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
episode_route.post("/getEpisode", isLogin, getEpisode);
episode_route.post("/getEpisodes", isLogin, getEpisodes);
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

module.exports = episode_route;
