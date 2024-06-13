require("dotenv").config();

const mongoose = require("mongoose");

if (process.env.DATABASE === "MONGODBATLAS") {
  mongoose.connect(process.env.DATABASEURL);
  mongoose.connection.on("error", (err) => {
    console.log("Connection Failed");
  });
  mongoose.connection.on("connected", (connected) => {
    console.log("Connected to MongoDB Atlas.");
  });
} else if (process.env.DATABASE === "MONGODBLOCAL") {
  mongoose.connect("mongodb://127.0.0.1:27017/podcast");
  mongoose.connection.on("error", (err) => {
    console.log("Connection Failed");
  });
  mongoose.connection.on("connected", (connected) => {
    console.log("Connected to MongoDB Atlas.");
  });
} else {
  console.log("No proper ENV.");
}

const port = process.env.PORT || 5174;

var express = require("express");
var app = express();

const cors = require("cors");

let allowedOrigins = ["http://localhost:5173"];

app.use(
  cors({
    credentials: true,
    origin: allowedOrigins,
  })
);

//const androidUserRoute = require("./androidAPI/androidRoutes/userRoutes");
//const androidPodcastRoute = require("./androidAPI/androidRoutes/podcastRoutes");
//const androidEpisodeRoute = require("./androidAPI/androidRoutes/episodeRoutes");
//app.use("/api/v1/andriod/user/", androidUserRoute);
//app.use("/api/v1/android/podcast/", androidPodcastRoute);
//app.use("/api/v1/andriod/podcast", androidEpisodeRoute);

const webUserRoute = require("./src/webAPI/webRoutes/userRoutes");
//const webPodcastRoute = require("./src/webAPI/webRoutes/podcastRoutes");
//const webEpisodeRoute = require("./src/webAPI/webRoutes/episodeRoutes");

app.use("/api/v1/web/user/", webUserRoute);
//app.use("/api/v1/web/podcast/", webPodcastRoute);
//app.use("/api/v1/web/podcast", webEpisodeRoute);

app.listen(port, () => {
  console.log("Running at port: " + port);
});
