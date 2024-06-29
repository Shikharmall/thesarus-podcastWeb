const Episode = require("../../models/episodeModels");
const getTokenFromCookie = require("../../utils/getTokenFromCookie");
const { verifyToken } = require("../../utils/jwtTokenManagement");

/*-------------------------create episode-----------------------*/

const createEpisode = async (req, res) => {
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
      isPaid,
    } = req.body;

    const episodeCount = Episode.find().countDocuments();

    const episode = new Episode({
      podcastId: podcastId,
      seasonId: seasonId,
      ownerId: userId,
      episodeName: episodeName,
      description: description,
      episodeNumber: episodeCount + 1,
      ownerId: userId,
      frontImage: "N/A",
      coverImage: "N/A",
      languages: ["Hindi", "English"],
      liveDate: liveDate,
      trailorLink: trailorLink,
      episodeLive: episodeLive,
      isPaid: isPaid,
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

/*-------------------------create bulk episode-----------------------*/

const createBulkEpisode = async (req, res) => {
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

const toggleEpisodeLive = async (req, res) => {
  try {
    const { episodeId } = req.query;

    const episodeData = await Episode.findById({ _id: episodeId });

    if (!episodeData) {
      return res
        .status(500)
        .json({ status: "failed", message: "episode not found" });
    }

    let liveToggled;

    if (episodeData.episodeLive) {
      liveToggled = await Episode.findByIdAndUpdate(
        { _id: episodeId },
        {
          $set: {
            episodeLive: false,
          },
        },
        { new: true }
      );
    } else {
      liveToggled = await Episode.findByIdAndUpdate(
        { _id: episodeId },
        {
          $set: {
            episodeLive: true,
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

const getEpisode = async (req, res) => {
  try {
    const { episodeId } = req.query;

    const episodeData = await Episode.findById({ _id: episodeId });

    return res.status(201).json({ status: "success", data: episodeData });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------get episodes (searching and pagination included)-----------------------*/

const getEpisodes = async (req, res) => {
  try {
    const { search, limit, skip } = req.query;
    //let search1 = "";
    //if (search) {
    //  search1 = search;
    //}

    const episodeData = await Episode.find({
      $or: [{ episodeName: { $regex: ".*" + search + ".*", $options: "i" } }],
    })
      .sort({ _id: -1 })
      .limit(limit)
      .skip(skip);

    return res.status(201).json({ status: "success", data: episodeData });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

module.exports = {
  createEpisode,
  toggleEpisodeLive,
  getEpisode,
  getEpisodes,
};
