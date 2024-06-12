const Podcast = require("../androidModels/podcastModels");
const Season = require("../androidModels/seasonModels");
//const User = require("../models/userModel");
//const jwt = require("jsonwebtoken");
//const config = require("../config/config");
//const cookies = require("cookie");

/* create podcast */

const createPodcast = async (req, res) => {
  try {
    const { ownerId, podcastName, description, isSeasonWise } = req.body;

    //const token = req.cookies.userid;
    //const verifyUser = jwt.verify(token, config.jwtSecret);
    //const userid = verifyUser.user_id;

    const podcastData = new Podcast({
      ownerId: ownerId,
      podcastName: podcastName,
      description: description,
      isSeasonWise: isSeasonWise,
      totalSeasons: 0,
      totalEpisodes: 0,
    });

    const podcastSaved = await podcastData.save();

    if (podcastSaved) {
      return res.status(201).json({ status: "success", data: userData });
    } else {
      return res
        .status(500)
        .json({ status: "failed", message: "podcast not saved." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/* create season */

const createSeason = async (req, res) => {
  try {
    const {
      ownerId,
      podcastId,
      description,
      frontImage,
      coverImage,
      titleImage,
      trailorVideo,
      language,
      ageGroup,
      isPaid,
    } = req.body;

    //const token = req.cookies.userid;
    //const verifyUser = jwt.verify(token, config.jwtSecret);
    //const userid = verifyUser.user_id;

    const totalSeasons = await Season.find({
      podcastId: podcastId,
    }).countDocuments();

    const seasonData = new Season({
      ownerId: ownerId,
      podcastId: podcastId,
      description: description,
      frontImage: frontImage,
      coverImage: coverImage,
      titleImage: titleImage,
      trailorVideo: trailorVideo,
      language: language,
      ageGroup: ageGroup,
      seasonNumber: totalSeasons + 1,
      totalEpisode: 0,
      isPaid: isPaid,
    });

    const seasonSaved = await seasonData.save();

    if (seasonSaved) {
      return res.status(201).json({ status: "success", data: seasonSaved });
    } else {
      return res
        .status(500)
        .json({ status: "failed", message: "podcast not saved." });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: "failed", message: error.message });
  }
};

/* make live */

/*const makelive = async(req,res)=>{
    try {

        const channelid = req.query.channelid;
        //console.log(channelid);

        const channelData =  await Channel.findById({_id:channelid});

        if(channelData.live == "0"){

            const channelUpdate = await Channel.findByIdAndUpdate({_id:channelid},{$set:{live:"1"}});
            if(channelUpdate){

                res.render('openedlist' , { flag:1 , channelData:channelData});
            }
        }
        else{
            const channelUpdate = await Channel.findByIdAndUpdate({_id:channelid},{$set:{live:"0"}});
            if(channelUpdate){

                res.render('openedlist' , { flag:1 , channelData:channelData});
            }
        }

        
    } catch (error) {
        console.log(error);
    }
}*/

/* make live */

/* podcast */
/*
const podcast = async (req, res) => {
  try {
    var search = "";
    if (req.query.search) {
      search = req.query.search;
    }

    const channelData = await Channel.find({
      $or: [{ name: { $regex: ".*" + search + ".*", $options: "i" } }],
    }).sort({ _id: -1 });
    const channelCount = await Channel.find({
      $or: [{ name: { $regex: ".*" + search + ".*", $options: "i" } }],
    }).countDocuments();

    res.render("search", {
      channelData: channelData,
      channelCount: channelCount,
    });
  } catch (error) {
    console.log(error);
  }
};*/

/* podcast */

/* channel */
/*
const channel = async (req, res) => {
  try {
    var search = "";
    if (req.query.search) {
      search = req.query.search;
    }

    const userData = await User.find({
      $or: [{ name: { $regex: ".*" + search + ".*", $options: "i" } }],
    }).sort({ _id: -1 });

    const userCount = await User.find({
      $or: [{ name: { $regex: ".*" + search + ".*", $options: "i" } }],
    }).countDocuments();

    res.render("channel", { userData: userData, userCount: userCount });
  } catch (error) {
    console.log(error);
  }
};*/
/* channel */

module.exports = {
  /*createchannel,
  insertChannel,
  podcast,
  channel,*/
  createPodcast,
  createSeason,
};
