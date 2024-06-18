const Podcast = require("../../models/podcastModels");
const getTokenFromCookie = require("../../utils/getTokenFromCookie");
const { verifyToken } = require("../../utils/jwtTokenManagement");

/*-------------------------create podcast-----------------------*/

const createPodcast = async (req, res) => {
  try {
    const token = getTokenFromCookie(req);
    const decodedUser = verifyToken(token);
    const userId = decodedUser.id;

    const { podcastName, description, isSeasonWise, podcastLive, ageCategory } =
      req.body;

    const podcast = new Podcast({
      podcastName: podcastName,
      description: description,
      isSeasonWise: isSeasonWise,
      podcastLive: podcastLive,
      totalSeasons: 1,
      totalEpisodes: 0,
      ownerId: userId,
      frontImage: "N/A",
      genres: ["Action", "Thrillers"],
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
    const { podcastId } = req.query;

    const podcastData = await Podcast.findById({ _id: podcastId });

    return res.status(201).json({ status: "success", data: podcastData });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/*-------------------------get podcasts (searching and pagination included)-----------------------*/

const getPodcasts = async (req, res) => {
  try {
    const { search, limit, skip } = req.query;
    //let search1 = "";
    //if (search) {
    //  search1 = search;
    //}

    const podcastData = await Podcast.find({
      $or: [{ podcastName: { $regex: ".*" + search + ".*", $options: "i" } }],
    })
      .sort({ _id: -1 })
      .limit(limit)
      .skip(skip);

    return res.status(201).json({ status: "success", data: podcastData });
  } catch (error) {
    //console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

module.exports = {
  createPodcast,
  togglePodcastLive,
  getPodcast,
  getPodcasts,
};
