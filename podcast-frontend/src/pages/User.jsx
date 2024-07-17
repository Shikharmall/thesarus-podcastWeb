import React, { useState } from "react";
import SideNav from "../partials/SideNav";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
//import VideoSlider from "../components/videoSlider/VideoSlider";
//import PodcastList from "../components/podcastList/PodcastList";
import TopContent from "../components/user/TopContent";
import MidContent from "../components/user/MidContent";
import Overlay from "../components/user/Overlay";
import ImageFull from "../components/user/ImageFull";

export default function User() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [coverImageFull, setCoverImageFull] = useState(false);
  const [profileImageFull, setProfileImageFull] = useState(false);

  const openOverlay = () => {
    setOverlayOpen(true);
  };

  const closeOverlay = () => {
    setOverlayOpen(false);
  };

  const toggleCoverImage = () => {
    setCoverImageFull(!coverImageFull);
  };

  const toggleProfileImage = () => {
    setProfileImageFull(!profileImageFull);
  };

  const userData = {
    _id: "user-id",
    name: "User Name",
    subscribers: 123,
    coverimage:
      "https://pbs.twimg.com/profile_banners/1596428723150258177/1711056055/1500x500",
    profileimage:
      "https://pbs.twimg.com/profile_images/1596428809934635008/dmkOOF8z_400x400.png",
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
          <TopContent
            user={user}
            flag={flag}
            toggleProfileImage={toggleProfileImage}
            toggleCoverImage={toggleCoverImage}
          />
          <MidContent
            user={user}
            flag={flag}
            sub={sub}
            channelCount={channelCount}
            channelData={channelData}
          />
        </div>
        <Overlay show={overlayOpen} onClose={closeOverlay} />
        <ImageFull
          show={coverImageFull}
          onClose={toggleCoverImage}
          image={user.coverimage}
          type={`coverImage`}
        />
        <ImageFull
          show={profileImageFull}
          onClose={toggleProfileImage}
          image={user.profileimage}
          type={`profileImage`}
        />
      </div>
    </>
  );
}
