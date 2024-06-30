const Episode = require("../../models/episodeModel");
const getTokenFromCookie = require("../../utils/getTokenFromCookie");
const { verifyToken } = require("../../utils/jwtTokenManagement");
const { uploadVideo, uploadImage } = require("../../utils/uploadContent");

/*-------------------------create episode-----------------------*/

const createEpisode = async (req, res) => {
  try {
    const token = getTokenFromCookie(req);
    const decodedUser = await verifyToken(token);
    const userId = decodedUser.userId;

    const {
      podcastId,
      episodeId,
      episodeName,
      description,
      languages,
      episodeLive,
      liveDate,
      isPaid,
    } = req.body;

    const episodeCount = await Episode.find({
      podcastId: podcastId,
    }).countDocuments();

    const episode = new Episode({
      podcastId: podcastId,
      episodeId: episodeId,
      ownerId: userId,
      episodeName: episodeName,
      description: description,
      frontImage: "N/A",
      coverImage: "N/A",
      episodeNumber: episodeCount + 1,
      languages: languages,
      liveDate: liveDate,
      episodeLink: "N/A",
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
    const decodedUser = await verifyToken(token);
    const userId = decodedUser.userId;

    const {
      podcastId,
      episodeId,
      episodeName,
      description,
      languages,
      episodeLive,
      liveDate,
      isPaid,
    } = req.body;

    const episodeCount = await Episode.find({
      podcastId: podcastId,
    }).countDocuments();

    const episode = new Episode({
      podcastId: podcastId,
      episodeId: episodeId,
      ownerId: userId,
      episodeName: episodeName,
      description: description,
      frontImage: "N/A",
      coverImage: "N/A",
      episodeNumber: episodeCount + 1,
      languages: languages,
      liveDate: liveDate,
      episodeLink: "N/A",
      episodeLive: episodeLive,
      isPaid: isPaid,
      //frontimage: req.file.filename,
      //coverimage: "defaultpodcastcoverimage.png",
      //titleimage: "defaulttitleimage.png",
      /*image2:req.files.image[1].filename,
      //image3:req.files.image[2].filename,*/
    });

    //const episodeDatas = await Episode.insertMany();

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

/*-------------------------add episode front image-----------------------*/

const addEpisodeFrontImage = async (req, res) => {
  try {
    const { episodeId } = req.body;

    const episodeData = await Episode.findById({ _id: episodeId });

    if (!episodeData) {
      return res
        .status(500)
        .json({ status: "failed", message: "episode not found" });
    }

    const uploadedImage = await uploadImage(req.file.path);

    if (uploadedImage) {
      const changedFrontImage = await Episode.updateOne(
        { _id: episodeId },
        { $set: { frontImage: uploadedImage.secure_url } },
        { new: true }
      );

      return res
        .status(201)
        .json({ status: "success", data: changedFrontImage });
    } else {
      return res.status(500).json({
        status: "failed",
        message: "episode front image not uploaded on cloudinary.",
      });
    }
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------add episode cover image-----------------------*/

const addEpisodeCoverImage = async (req, res) => {
  try {
    const { episodeId } = req.body;

    const episodeData = await Episode.findById({ _id: episodeId });

    if (!episodeData) {
      return res
        .status(500)
        .json({ status: "failed", message: "episode not found" });
    }

    const uploadedImage = await uploadImage(req.file.path);

    if (uploadedImage) {
      const changedCoverImage = await Episode.updateOne(
        { _id: episodeId },
        { $set: { coverImage: uploadedImage.secure_url } },
        { new: true }
      );

      return res
        .status(201)
        .json({ status: "success", data: changedCoverImage });
    } else {
      return res.status(500).json({
        status: "failed",
        message: "episode front image not uploaded on cloudinary.",
      });
    }
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------get episodes-----------------------*/

const getEpisode = async (req, res) => {
  try {
    const { episodeId, project } = req.body;

    const episodeData = await Episode.findById({ _id: episodeId }).select(
      project
    );

    return res.status(200).json({ status: "success", data: episodeData });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------get episodes (searching and pagination included)-----------------------*/

const getEpisodes = async (req, res) => {
  try {
    const { search, limit, skip, project } = req.body;
    const episodeData = await Episode.find({
      $or: [{ episodeName: { $regex: ".*" + search + ".*", $options: "i" } }],
    })
      .sort({ _id: -1 })
      .limit(limit)
      .skip(skip)
      .select(project);

    return res.status(200).json({ status: "success", data: episodeData });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------edit episode-----------------------*/

const editEpisode = async (req, res) => {
  try {
    const { episodeId, episodeName, description, languages, liveDate, isPaid } =
      req.body;

    const episodeData = await Episode.findById({ _id: episodeId });

    if (!episodeData) {
      return res
        .status(500)
        .json({ status: "failed", message: "episode not found" });
    }

    const editepisodeData = await Episode.updateOne(
      { _id: episodeId },
      { $set: { episodeName, description, languages, liveDate, isPaid } },
      { new: true }
    );

    return res.status(201).json({ status: "success", data: editepisodeData });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------add episode video-----------------------*/

const addVideo = async (req, res) => {
  try {
    const { episodeId } = req.body;

    const episodeData = await Episode.findById({ _id: episodeId });

    if (!episodeData) {
      return res
        .status(500)
        .json({ status: "failed", message: "episode not found" });
    }

    const uploadedVideo = await uploadVideo(req.file.path);

    if (uploadedVideo) {
      const updateVideo = await Episode.updateOne(
        { _id: episodeId },
        { $set: { trailorLink: uploadedVideo.secure_url } },
        { new: true }
      );

      return res.status(201).json({ status: "success", data: updateVideo });
    } else {
      return res.status(500).json({
        status: "failed",
        message: "episode video not uploaded on cloudinary.",
      });
    }
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

module.exports = {
  createEpisode,
  toggleEpisodeLive,
  addEpisodeFrontImage,
  addEpisodeCoverImage,
  getEpisode,
  getEpisodes,
  editEpisode,
  addVideo,
};
