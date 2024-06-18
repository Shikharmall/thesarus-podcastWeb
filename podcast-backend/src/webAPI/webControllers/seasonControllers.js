const Season = require("../../models/seasonModels");
const getTokenFromCookie = require("../../utils/getTokenFromCookie");
const { verifyToken } = require("../../utils/jwtTokenManagement");

/*-------------------------create episode-----------------------*/

const createSeason = async (req, res) => {
  try {
    const token = getTokenFromCookie(req);
    const decodedUser = verifyToken(token);
    const userId = decodedUser.id;

    const {
      seasonName,
      podcastId,
      seasonId,
      description,
      episodeLive,
      episodeNumber,
      liveDate,
      traliorLink,
      seasonNumber,
    } = req.body;

    const season = new Season({
      seasonName: seasonName,
      description: description,
      episodeLive: episodeLive,
      episodeNumber: episodeNumber,
      ownerId: userId,
      frontImage: "N/A",
      coverImage: "N/A",
      seasonId: seasonId,
      podcastId: podcastId,
      liveDate: liveDate,
      trailorLink: traliorLink,
      seasonNumber: seasonNumber,
      //frontimage: req.file.filename,
      //coverimage: "defaultpodcastcoverimage.png",
      //titleimage: "defaulttitleimage.png",
      /*image2:req.files.image[1].filename,
      //image3:req.files.image[2].filename,*/
    });

    const seasonData = await season.save();

    return res.status(201).json({ status: "success", data: seasonData });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------create bulk episode-----------------------*/

const createBulkSeason = async (req, res) => {
  try {
    const token = getTokenFromCookie(req);
    const decodedUser = verifyToken(token);
    const userId = decodedUser.id;

    const {
      episodeName,
      seasonId,
      podcastId,
      description,
      episodeLive,
      episodeNumber,
      liveDate,
      episodeLink,
    } = req.body;

    const episode = new Episode({
      episodeName: episodeName,
      description: description,
      episodeLive: episodeLive,
      episodeNumber: episodeNumber,
      ownerId: userId,
      frontImage: "N/A",
      coverImage: "N/A",
      languages: ["Hindi", "English"],
      seasonId: seasonId,
      podcastId: podcastId,
      liveDate: liveDate,
      episodeLink: episodeLink,
      //frontimage: req.file.filename,
      //coverimage: "defaultpodcastcoverimage.png",
      //titleimage: "defaulttitleimage.png",
      /*image2:req.files.image[1].filename,
      //image3:req.files.image[2].filename,*/
    });

    const episodeData = await episode.save();

    return res.status(201).json({ status: "success", data: episodeData });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------toggle episode live-----------------------*/

const toggleSeasonLive = async (req, res) => {
  try {
    const { seasonId } = req.query;

    const seasonData = await Season.findById({ _id: seasonId });

    if (!seasonData) {
      return res
        .status(500)
        .json({ status: "failed", message: "episode not found" });
    }

    let liveToggled;

    if (seasonData.seasonLive) {
      liveToggled = await Season.findByIdAndUpdate(
        { _id: seasonId },
        {
          $set: {
            seasonLive: false,
          },
        },
        { new: true }
      );
    } else {
      liveToggled = await Season.findByIdAndUpdate(
        { _id: seasonId },
        {
          $set: {
            seasonLive: true,
          },
        },
        { new: true }
      );
    }

    return res.status(201).json({ status: "success", data: liveToggled });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------get episodes-----------------------*/

const getSeason = async (req, res) => {
  try {
    const { seasonId } = req.query;

    const seasonData = await Season.findById({ _id: seasonId });

    return res.status(201).json({ status: "success", data: seasonData });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------get episodes (searching and pagination included)-----------------------*/

const getSeasons = async (req, res) => {
  try {
    const { search, limit, skip } = req.query;
    //let search1 = "";
    //if (search) {
    //  search1 = search;
    //}

    const seasonData = await Season.find({
      $or: [{ episodeName: { $regex: ".*" + search + ".*", $options: "i" } }],
    })
      .sort({ _id: -1 })
      .limit(limit)
      .skip(skip);

    return res.status(201).json({ status: "success", data: seasonData });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

module.exports = {
  createSeason,
  toggleSeasonLive,
  getSeason,
  getSeasons,
};
