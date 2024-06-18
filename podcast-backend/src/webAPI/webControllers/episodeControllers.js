//const Channel = require("../models/channelModel");
//const User = require("../models/userModel");
//const jwt = require("jsonwebtoken");
//const config = require("../config/config");
//const cookies = require("cookie");

const Podcast = require("../../models/podcastModels");

/*-------------------------create podcast----------------------- */

const createPodcast = async (req, res) => {
  try {
    //const token = req.cookies.userid;
    //const verifyUser = jwt.verify(token, config.jwtSecret);
    //const userid = verifyUser.user_id;

    const channel = new Podcast({
      user_id: userid,
      type: req.body.channeltype,
      name: req.body.channelname,
      description: req.body.description,
      frontimage: req.file.filename,
      coverimage: "defaultpodcastcoverimage.png",
      titleimage: "defaulttitleimage.png",
      live: "1",
      /*image2:req.files.image[1].filename,
            image3:req.files.image[2].filename,*/
      language: req.body.language,
      age: req.body.age,
      season: 1,
    });

    //const files = req.files;
    //console.log(req.files.file[0].filename);

    const channelData = await channel.save();

    if (channelData) {
      const userData = await User.findById({ _id: userid });

      const channelData = await Channel.find({ user_id: userid }).sort({
        createdAt: -1,
      });
      const channelCount = await Channel.find({
        user_id: userid,
      }).countDocuments();

      res.render("user", {
        user: userData,
        flag: "1",
        channelData: channelData,
        channelCount: channelCount,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

/* insert channel */

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
  createPodcast,
  //insertChannel,
  //podcast,
  //channel,
};
