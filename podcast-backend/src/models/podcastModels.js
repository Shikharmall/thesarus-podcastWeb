const mongoose = require("mongoose");

const podcastSchema = new mongoose.Schema(
  {
    podcastName: {
      type: String,
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
    isSeasonWise: {
      type: Boolean,
      required: true,
      default: true,
    },
    podcastLive: {
      type: Boolean,
      required: true,
      default: false,
    },
    totalSeasons: {
      type: Number,
      required: true,
      min: 0,
    },
    totalEpisodes: {
      type: Number,
      required: true,
      min: 0,
    },
    frontImage: {
      type: String,
      required: true,
    },
    genres: {
      type: [String],
      required: true,
    },
    ageCategory: {
      type: String,
      required: true,
    },
  },

  { timestamps: true }
);

module.exports = mongoose.model("Podcast", podcastSchema);
