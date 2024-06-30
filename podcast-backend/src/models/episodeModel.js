const mongoose = require("mongoose");

const episodeSchema = new mongoose.Schema(
  {
    podcastId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Podcast",
      required: true,
    },
    seasonId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Season",
      required: true,
    },
    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    episodeName: {
      type: String,
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
    episodeNumber: {
      type: Number,
      required: true,
      min: 1,
    },
    languages: {
      type: [String],
      required: true,
    },
    episodeLink: {
      type: String,
      required: true,
    },
    episodeLive: {
      type: Boolean,
      required: true,
    },
    liveDate: {
      type: Date,
      //required: true,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Episode", episodeSchema);
