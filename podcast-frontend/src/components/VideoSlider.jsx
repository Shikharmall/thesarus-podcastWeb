import React, { useState } from "react";
import Video1 from "C:/Users/Lenovo/Downloads/BigBuckBunny.mp4";
import Video2 from "../../../../videos/avatar1.mp4";
import Video3 from "../../../../videos/avatar2.mp4";
import Video4 from "../../../../videos/avatar3.mp4";

import VideoSliderItem from "./VideoSliderItem";
import Poster1 from "../images/avatarposter1.png";
import Poster2 from "../images/avatarposter2.png";
import Poster3 from "../images/avatarposter3.png";
import Poster4 from "../images/avatarposter4.png";

export default function VideoSlider() {
  const [videoURL, setVideoURL] = useState(Video1);
  const [isMute, setIsMute] = useState(true);

  return (
    <div className="relative">
      <VideoSliderItem videoURL={videoURL} isMute={isMute} />
      {isMute ? (
        <svg
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            cursor: "pointer",
          }}
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            setIsMute(false);
          }}
        >
          <path d="M12.43 4.1a1 1 0 00-1 .12L6.65 8H3a1 1 0 00-1 1v6a1 1 0 001 1h3.65l4.73 3.78A1 1 0 0012 20a.91.91 0 00.43-.1A1 1 0 0013 19V5a1 1 0 00-.57-.9zM11 16.92l-3.38-2.7A1 1 0 007 14H4v-4h3a1 1 0 00.62-.22L11 7.08zm8.66-10.58a1 1 0 00-1.42 1.42 6 6 0 01-.38 8.84 1 1 0 00.64 1.76 1 1 0 00.64-.23 8 8 0 00.52-11.79zm-2.83 2.83a1 1 0 10-1.42 1.42A2 2 0 0116 12a2 2 0 01-.71 1.53 1 1 0 00-.13 1.41 1 1 0 001.41.12A4 4 0 0018 12a4.06 4.06 0 00-1.17-2.83z" />
          <path
            d="M21 18.63L3 5.37"
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>
      ) : (
        <svg
          style={{
            position: "absolute",
            bottom: 20,
            right: 20,
            cursor: "pointer",
          }}
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => {
            setIsMute(true);
          }}
        >
          <path d="M12.43 4.1a1 1 0 00-1 .12L6.65 8H3a1 1 0 00-1 1v6a1 1 0 001 1h3.65l4.73 3.78A1 1 0 0012 20a.91.91 0 00.43-.1A1 1 0 0013 19V5a1 1 0 00-.57-.9zM11 16.92l-3.38-2.7A1 1 0 007 14H4v-4h3a1 1 0 00.62-.22L11 7.08zm8.66-10.58a1 1 0 00-1.42 1.42 6 6 0 01-.38 8.84 1 1 0 00.64 1.76 1 1 0 00.64-.23 8 8 0 00.52-11.79zm-2.83 2.83a1 1 0 10-1.42 1.42A2 2 0 0116 12a2 2 0 01-.71 1.53 1 1 0 00-.13 1.41 1 1 0 001.41.12A4 4 0 0018 12a4.06 4.06 0 00-1.17-2.83z" />
        </svg>
      )}

      {/*<div className="midcontentupper1">
        <button>
          {" "}
          <h2>
            <img
              src="image/playw.png"
              alt="play"
              style={{ width: "16px", opacity: 1 }}
            />{" "}
            Watch Now
          </h2>{" "}
        </button>
      </div>

      <div className="midcontentupper11">
        <button>
          {" "}
          <h2>
            <img
              src="image/playw.png"
              alt="play"
              style={{ width: "16px", opacity: 1 }}
            />{" "}
            Watch Now
          </h2>{" "}
        </button>
        </div>*/}

      {/*<div className="midcontentupper2">
        <div className="midcontentupper2img0">
          <img src="image/back.png" alt="poster" onclick="myslider(-1,0)" />
        </div>
        <div className="midcontentupper2img">
          <img
            src="image/avatarposter.png"
            alt="poster"
            className="dot"
            onclick="myslider(0,1)"
          />
        </div>
        <div className="midcontentupper2img">
          <img
            src="image/avatarposter2.png"
            alt="poster"
            className="dot"
            onclick="myslider(0,2)"
          />
        </div>
        <div className="midcontentupper2img">
          <img
            src="image/avatarposter3.png"
            alt="poster"
            className="dot"
            onclick="myslider(0,3)"
          />
        </div>
        <div className="midcontentupper2img">
          <img
            src="image/avatarposter4.png"
            alt="poster"
            className="dot"
            onclick="myslider(0,4)"
          />
        </div>
        <div className="midcontentupper2img0">
          <img src="image/forward.png" alt="poster" onclick="myslider(1,0)" />
        </div>
      </div>*/}

      {/*<div className="absolute  top-[38%] left-0 flex ">
        <div className="midcontentupper3img0">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 1024 1024"
            fill="#000000"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
              fill="#fff"
            />
          </svg>
        </div>

        <div className="midcontentupper3img1">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 1024 1024"
            fill="#000000"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              transform="rotate(180 512 512)"
              d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>*/}

      <div className="absolute right-20 bottom-20 flex">
        <div className="flex items-center">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 1024 1024"
            fill="#000000"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
              fill="#fff"
            />
          </svg>
        </div>
        <div>
          <img
            src={Poster1}
            alt="poster"
            className="w-[100px] h-[50px] m-1 rounded-md cursor-pointer"
            onClick={() => {
              setVideoURL(Video1);
            }}
          />
        </div>
        <div>
          <img
            src={Poster2}
            alt="poster"
            className="w-[100px] h-[50px] m-1 rounded-md cursor-pointer"
            onClick={() => {
              setVideoURL(Video2);
            }}
          />
        </div>
        <div>
          <img
            src={Poster3}
            alt="poster"
            className="w-[100px] h-[50px] m-1 rounded-md cursor-pointer"
            onClick={() => {
              setVideoURL(Video3);
            }}
          />
        </div>
        <div>
          <img
            src={Poster4}
            alt="poster"
            className="w-[100px] h-[50px] m-1 rounded-md cursor-pointer"
            onClick={() => {
              setVideoURL(Video4);
            }}
          />
        </div>
        <div className="flex items-center">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 1024 1024"
            fill="#000000"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              transform="rotate(180 512 512)"
              d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>

      {/*<div className="midcontentheading">
        <img src="image/avatarlogo.png" alt="logo" />
        <br /> <br />
        <h4 id="greyyy">
          2023 <b>&#x2022;</b> 2 Season <b>&#x2022;</b> 1 Languages{" "}
          <b>&#x2022;</b> U/A 16+
        </h4>
        <br />
        <h4>
          Set more than a decade after the first film, dive into the story of
          the Sully family; the lengths they go to keep each other safe and the
          tragedies they endure.
        </h4>
      </div>

      <div className="midcontentheading1">
        <img src="image/avatarlogo.png" alt="logo" />
  </div>*/}
    </div>
  );
}
