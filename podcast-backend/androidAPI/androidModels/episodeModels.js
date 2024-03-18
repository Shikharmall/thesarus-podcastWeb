const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema(
  {
    episodeName: {
      type: String,
      required: true,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    seasonId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Season",
      required: true,
    },
    podcastId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Podcast",
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    coverImage: {
      type: String,
      required: true,
    },
    episodeNumber: {
      type: Number,
      required: true,
      min: 1,
    },
    liveDate: {
      type: Date,
      required: true,
    },
    episodeLink: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Channel", channelSchema);
