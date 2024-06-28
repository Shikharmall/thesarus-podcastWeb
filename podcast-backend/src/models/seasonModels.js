const mongoose = require("mongoose");

const seasonSchema = new mongoose.Schema(
  {
    podcastId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Podcast",
      required: true,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    frontImage: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    titleImage: {
      type: String,
      required: true,
    },
    seasonNumber: {
      type: Number,
      required: true,
      min: 1,
    },
    totalEpisode: {
      type: Number,
      required: true,
      min: 0,
    },
    trailorLink: {
      type: String,
      required: true,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    seasonLive: {
      type: Boolean,
      required: true,
    },
    liveDate: {
      type: Date,
      //required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Season", seasonSchema);
