const Season = require("../../models/seasonModels");
const getTokenFromCookie = require("../../utils/getTokenFromCookie");
const { verifyToken } = require("../../utils/jwtTokenManagement");
const { uploadImage, uploadVideo } = require("../../utils/uploadContent");

/*-------------------------create season-----------------------*/

const createSeason = async (req, res) => {
  try {
    const token = getTokenFromCookie(req);
    const decodedUser = await verifyToken(token);
    const userId = decodedUser.userId;

    const { podcastId, description, seasonLive } = req.body;

    const seasonCount = await Season.find({
      podcastId: podcastId,
    }).countDocuments();

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
      seasonLive: seasonLive,
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

/*-------------------------add season front image-----------------------*/

const addSeasonFrontImage = async (req, res) => {
  try {
    const { seasonId } = req.body;

    const seasonData = await Season.findById({ _id: seasonId });

    if (!seasonData) {
      return res
        .status(500)
        .json({ status: "failed", message: "season not found" });
    }

    const uploadedImage = await uploadImage(req.file.path);

    if (uploadedImage) {
      const changedFrontImage = await Season.updateOne(
        { _id: seasonId },
        { $set: { frontImage: uploadedImage.secure_url } },
        { new: true }
      );

      return res
        .status(201)
        .json({ status: "success", data: changedFrontImage });
    } else {
      return res.status(500).json({
        status: "failed",
        message: "season front image not uploaded on cloudinary.",
      });
    }
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------add season cover image-----------------------*/

const addSeasonCoverImage = async (req, res) => {
  try {
    const { seasonId } = req.body;

    const seasonData = await Season.findById({ _id: seasonId });

    if (!seasonData) {
      return res
        .status(500)
        .json({ status: "failed", message: "season not found" });
    }

    const uploadedImage = await uploadImage(req.file.path);

    if (uploadedImage) {
      const changedCoverImage = await Season.updateOne(
        { _id: seasonId },
        { $set: { coverImage: uploadedImage.secure_url } },
        { new: true }
      );

      return res
        .status(201)
        .json({ status: "success", data: changedCoverImage });
    } else {
      return res.status(500).json({
        status: "failed",
        message: "season front image not uploaded on cloudinary.",
      });
    }
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------add season title image-----------------------*/

const addSeasonTitleImage = async (req, res) => {
  try {
    const { seasonId } = req.body;

    const seasonData = await Season.findById({ _id: seasonId });

    if (!seasonData) {
      return res
        .status(500)
        .json({ status: "failed", message: "season not found" });
    }

    const uploadedImage = await uploadImage(req.file.path);

    if (uploadedImage) {
      const changedTitleImage = await Season.updateOne(
        { _id: seasonId },
        { $set: { titleImage: uploadedImage.secure_url } },
        { new: true }
      );

      return res
        .status(201)
        .json({ status: "success", data: changedTitleImage });
    } else {
      return res.status(500).json({
        status: "failed",
        message: "season front image not uploaded on cloudinary.",
      });
    }
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
    const { seasonId, project } = req.body;

    const seasonData = await Season.findById({ _id: seasonId }).select(project);

    return res.status(200).json({ status: "success", data: seasonData });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------get seasons (searching and pagination included)-----------------------*/

const getSeasons = async (req, res) => {
  try {
    const { search, limit, skip, project } = req.body;
    //let search1 = "";
    //if (search) {
    //  search1 = search;
    //}

    const seasonData = await Season.find({
      //$or: [{ episodeName: { $regex: ".*" + search + ".*", $options: "i" } }],
    })
      .sort({ _id: -1 })
      .limit(limit)
      .skip(skip)
      .select(project);

    return res.status(200).json({ status: "success", data: seasonData });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------edit channel-----------------------*/

const editSeason = async (req, res) => {
  try {
    const { seasonId, description } = req.body;

    const seasonData = await Season.findById({ _id: seasonId });

    if (!seasonData) {
      return res
        .status(500)
        .json({ status: "failed", message: "season not found" });
    }

    const editSeasonData = await Season.updateOne(
      { _id: seasonId },
      { $set: { description } },
      { new: true }
    );

    return res.status(201).json({ status: "success", data: editSeasonData });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------add season trailor video-----------------------*/

const addTailor = async (req, res) => {
  try {
    const { seasonId } = req.body;

    const seasonData = await Season.findById({ _id: seasonId });

    if (!seasonData) {
      return res
        .status(500)
        .json({ status: "failed", message: "season not found" });
    }

    const uploadedTrailorVideo = await uploadVideo(req.file.path);

    if (uploadedTrailorVideo) {
      const updateTrailorVideo = await Season.updateOne(
        { _id: seasonId },
        { $set: { trailorLink: uploadedTrailorVideo.secure_url } },
        { new: true }
      );

      return res
        .status(201)
        .json({ status: "success", data: updateTrailorVideo });
    } else {
      return res.status(500).json({
        status: "failed",
        message: "season trailor video not uploaded on cloudinary.",
      });
    }
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

module.exports = {
  createSeason,
  addSeasonFrontImage,
  addSeasonCoverImage,
  addSeasonTitleImage,
  toggleSeasonLive,
  getSeason,
  getSeasons,
  editSeason,
  addTailor,
};
