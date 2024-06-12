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
  },

  { timestamps: true }
);

module.exports = mongoose.model("Podcast", podcastSchema);
