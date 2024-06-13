import React, { useState } from "react";
import SideNav from "../partials/SideNav";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
//import VideoSlider from "../components/videoSlider/VideoSlider";
//import PodcastList from "../components/podcastList/PodcastList";
import TopContent from "../components/user/TopContent";
import MidContent from "../components/user/MidContent";
import Overlay from "../components/user/Overlay";

export default function User() {
  const [overlayOpen, setOverlayOpen] = useState(false);

  const openOverlay = () => {
    setOverlayOpen(true);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
  };

  const userData = {
    _id: "user-id",
    name: "User Name",
    subscribers: 123,
    coverimage: "coverimage.jpg",
    profileimage: "profileimage.jpg",
  };

  const channelData = [
    {
      _id: "channel-1",
      title: "Channel 1",
      description: "Description for channel 1",
    },
    {
      _id: "channel-2",
      title: "Channel 2",
      description: "Description for channel 2",
    },
  ];
  const user = userData;
  const flag = "1"; // Set your flag value
  const sub = "1"; // Set your sub value
  const channelCount = channelData.length;
  return (
    <>
      <div className="bg-[#0f1014] pt-[3%]">
        <SideNav />
        <div className="md:ml-1/12 mt-20 md:mt-0">
          <TopContent user={user} flag={flag} openOverlay={openOverlay} />
          <MidContent
            user={user}
            flag={flag}
            sub={sub}
            channelCount={channelCount}
            channelData={channelData}
          />
        </div>
        <Overlay show={overlayOpen} onClose={closeOverlay} />
      </div>
    </>
  );
}
