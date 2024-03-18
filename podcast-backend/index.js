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

const androidUserRoute = require("./androidAPI/androidRoutes/userRoutes");
const androidPodcastRoute = require("./androidAPI/androidRoutes/podcastRoutes");
const androidEpisodeRoute = require("./androidAPI/androidRoutes/episodeRoutes");

app.use("/", androidUserRoute);
app.use("/", androidPodcastRoute);
app.use("/", androidEpisodeRoute);

app.listen(port, () => {
  console.log("Running at port: " + port);
});
