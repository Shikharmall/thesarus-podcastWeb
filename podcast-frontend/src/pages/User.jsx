import React, { useEffect, useState } from "react";
import SideNav from "../partials/SideNav";
import TopContent from "../components/user/TopContent";
import MidContent from "../components/user/MidContent";
import Overlay from "../components/user/Overlay";
import ImageFull from "../components/user/ImageFull";
import EditContent from "../components/user/EditContent";
import { getUserDetailsAPI } from "../api/userAPI/userAPI";

export default function User() {
  const [overlayOpen, setOverlayOpen] = useState(false);
  const [coverImageFull, setCoverImageFull] = useState(false);
  const [profileImageFull, setProfileImageFull] = useState(false);
  const [profileEdit, setProfileEdit] = useState(false);

  const closeOverlay = () => {
    setOverlayOpen(false);
  };

  const toggleCoverImage = () => {
    setCoverImageFull(!coverImageFull);
  };

  const toggleProfileImage = () => {
    setProfileImageFull(!profileImageFull);
  };

  const toggleProfileEdit = () => {
    setProfileEdit(!profileEdit);
  };

  const userData = {
    _id: "user-id",
    name: "Shikhar Mall",

    subscribers: 123,
    coverimage:
      "https://pbs.twimg.com/profile_banners/323872736/1663853310/1080x360",
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

  const [data, setData] = useState({
    name: "",
    description: "",
  });

  //const getUserDataFunc = async () => {
  //  const response = await getUserDetailsAPI({
  //    name: 1,
  //    description: 1,
  //  });
//
  //  if (response) {
  //    console.log(response);
  //  }
  //};
//
  //useEffect(() => {
  //  getUserDataFunc();
  //}, []);

  return (
    <>
      <div className="bg-[#0f1014] pt-[3%]">
        <SideNav />
        <div
          className={`md:ml-1/12 mt-20 md:mt-0`}
        >
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
            toggleProfileEdit={toggleProfileEdit}
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

        <EditContent
          show={profileEdit}
          onClose={toggleProfileEdit}
          image={user.profileimage}
          type={`profileImage`}
        />
      </div>
    </>
  );
}
