const Season = require("../../models/seasonModels");
const getTokenFromCookie = require("../../utils/getTokenFromCookie");
const { verifyToken } = require("../../utils/jwtTokenManagement");

/*-------------------------create season-----------------------*/

const createSeason = async (req, res) => {
  try {
    const token = getTokenFromCookie(req);
    const decodedUser = verifyToken(token);
    const userId = decodedUser.id;

    const { podcastId, description, isPaid, seasonLive, liveDate } = req.body;

    const seasonCount = await Season.find().countDocuments();

    const season = new Season({
      podcastId: podcastId,
      ownerId: userId,
      description: description,
      frontImage: "N/A",
      coverImage: "N/A",
      titleImage: "N/A",
      seasonNumber: seasonCount + 1,
      totalEpisode: 0,
      trailorLink: "N/A",
      isPaid: isPaid,
      seasonLive: seasonLive,
      liveDate: liveDate,
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

/*-------------------------toggle season live-----------------------*/

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

/*-------------------------get seasons-----------------------*/

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

/*-------------------------get seasons (searching and pagination included)-----------------------*/

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

/*-------------------------edit channel-----------------------*/

const editSeason = async (req, res) => {
  try {
    const { seasonId, description, isPaid, liveDate } = req.body;

    const seasonData = await Season.findById({ _id: seasonId });

    if (!seasonData) {
      return res
        .status(500)
        .json({ status: "failed", message: "season not found" });
    }

    const editSeasonData = await Season.updateOne(
      { _id: seasonId },
      { $set: { description, isPaid, liveDate } },
      { new: true }
    );

    return res.status(201).json({ status: "success", data: editSeasonData });
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
  editSeason
};
