const Podcast = require("../../models/podcastModel");
const getTokenFromCookie = require("../../utils/getTokenFromCookie");
const { verifyToken } = require("../../utils/jwtTokenManagement");
const { uploadImage } = require("../../utils/uploadContent");

/*-------------------------create podcast-----------------------*/

const createPodcast = async (req, res) => {
  try {
    const token = getTokenFromCookie(req);
    const decodedUser = await verifyToken(token);
    const userId = decodedUser.userId;

    const {
      podcastName,
      description,
      isSeasonWise,
      podcastLive,
      genres,
      ageCategory,
    } = req.body;

    const podcast = new Podcast({
      podcastName: podcastName,
      description: description,
      isSeasonWise: isSeasonWise,
      podcastLive: podcastLive,
      totalSeasons: 0,
      totalEpisodes: 0,
      ownerId: userId,
      frontImage: "N/A",
      genres: genres,
      ageCategory: ageCategory,
      //frontimage: req.file.filename,
      //coverimage: "defaultpodcastcoverimage.png",
      //titleimage: "defaulttitleimage.png",
      /*image2:req.files.image[1].filename,
      //image3:req.files.image[2].filename,*/
    });

    //const files = req.files;
    //console.log(req.files.file[0].filename);

    const podcastData = await podcast.save();

    return res.status(201).json({ status: "success", data: podcastData });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------add podcast front image-----------------------*/

const addPodcastFrontImage = async (req, res) => {
  try {
    const { podcastId } = req.body;

    const podcastData = await Podcast.findById({ _id: podcastId });

    if (!podcastData) {
      return res
        .status(500)
        .json({ status: "failed", message: "podcast not found" });
    }

    const uploadedImage = await uploadImage(req.file.path);

    if (uploadedImage) {
      const changedFrontImage = await Podcast.updateOne(
        { _id: podcastId },
        { $set: { frontImage: uploadedImage.secure_url } },
        { new: true }
      );

      return res
        .status(201)
        .json({ status: "success", data: changedFrontImage });
    } else {
      return res.status(500).json({
        status: "failed",
        message: "podcast front image not uploaded on cloudinary.",
      });
    }
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------toggle podcast live-----------------------*/

const togglePodcastLive = async (req, res) => {
  try {
    const { podcastId } = req.query;

    const podcastData = await Podcast.findById({ _id: podcastId });

    if (!podcastData) {
      return res
        .status(500)
        .json({ status: "failed", message: "podcast not found" });
    }

    let liveToggled;

    if (podcastData.podcastLive) {
      liveToggled = await Podcast.findByIdAndUpdate(
        { _id: podcastId },
        {
          $set: {
            podcastLive: false,
          },
        },
        { new: true }
      );
    } else {
      liveToggled = await Podcast.findByIdAndUpdate(
        { _id: podcastId },
        {
          $set: {
            podcastLive: true,
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

/*-------------------------get podcast-----------------------*/

const getPodcast = async (req, res) => {
  try {
    const { podcastId, project } = req.body;

    const podcastData = await Podcast.findById({ _id: podcastId }).select(
      project
    );

    return res.status(200).json({ status: "success", data: podcastData });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------get podcasts (searching and pagination included)-----------------------*/

const getPodcasts = async (req, res) => {
  try {
    const { search, limit, skip, project } = req.body;

    const podcastData = await Podcast.find({
      $or: [{ podcastName: { $regex: ".*" + search + ".*", $options: "i" } }],
    })
      .sort({ _id: -1 })
      .limit(limit)
      .skip(skip)
      .select(project);

    return res.status(200).json({ status: "success", data: podcastData });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------edit podcast-----------------------*/

const editPodcast = async (req, res) => {
  try {
    const { podcastId, podcastName, description, genres, ageCategory } =
      req.body;

    const podcastData = await Podcast.findById({ _id: podcastId });

    if (!podcastData) {
      return res
        .status(500)
        .json({ status: "failed", message: "podcast not found" });
    }

    const editPodcastData = await Podcast.updateOne(
      { _id: podcastId },
      { $set: { podcastName, description, genres, ageCategory } },
      { new: true }
    );

    return res.status(201).json({ status: "success", data: editPodcastData });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

module.exports = {
  createPodcast,
  addPodcastFrontImage,
  togglePodcastLive,
  getPodcast,
  getPodcasts,
  editPodcast,
};
