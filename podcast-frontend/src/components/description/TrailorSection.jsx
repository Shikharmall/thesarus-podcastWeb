import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Video from "../../../../../videos/BigBuckBunny.mp4";
import Image from "../../images/dd.png";
import Image1 from "../../images/title.png";
import SeasonDescription from "./SeasonDescription";
import { Link } from "react-router-dom";

export default function TrailorSection({ podcastId }) {
  const [showTrailor, setShowTrailor] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Set isVisible to true after 2000 milliseconds (2 seconds)
      setShowTrailor(true);
    }, 5000);

    // Clean up the timeout to prevent memory leaks
    return () => clearTimeout(timeoutId);
  }, []); // Run this effect only once after the initial render

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    // Listen for resize events
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //console.log(screenWidth);

  return (
    <div className="relative w-[100vw]">
      <div className="relative h-[100vh] overflow-hidden">
        {showTrailor ? (
          <ReactPlayer
            url={Video}
            playing={true}
            muted={true}
            controls={false}
            width="100%"
            height="100%"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 2%, #16181f)",
            }}
          />
        ) : (
          <img
            src={Image}
            alt="alt-image"
            className="w-[100%]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 2%, #16181f)",
            }}
          />
        )}

        <div className="absolute top-0 pl-[10%] w-full h-[100vh] flex">
          <div className="w-[400px] flex flex-col justify-end">
            <img
              src={Image1}
              alt="alt-image"
              className="w-[230px] h-[150px] my-4"
            />
            <p className="text-white text-[17px] font-[600] my-4 text-roboto">
              2023 <span className="text-gray-400">·</span> 1 season{" "}
              <span className="text-gray-400">·</span> 7 languages{" "}
              <span className="text-gray-400">·</span>{" "}
              <span className="bg-gray-500 bg-opacity-50 rounded-lg py-1 px-3">
                U/A 13+
              </span>
            </p>
            <p className="text-white text-[16px]  my-4 text-roboto text-opacity-80">
              Sex, drugs and a gruesome murder. An edgy one night stand turns
              into a nightmare for Aditya, when he wakes up with blood on his
              hands. The evidence is stacked ...
            </p>

            <Link
              to={`/watch/${podcastId}`}
              className="bg-gray-500 bg-opacity-50 rounded-lg py-4 px-4 my-10 text-white w-full text-xl text-roboto text-bold flex justify-center items-center transform transition-transform duration-500 hover:scale-105"
            >
              <svg
                className="h-7 w-7 mr-2"
                fill="#ffffff"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <path
                  d="M5.008 12.897a.644.644 0 0 1-.91-.227.719.719 0 0 1-.098-.364V3.693C4 3.31 4.296 3 4.662 3a.64.64 0 0 1 .346.103l6.677 4.306a.713.713 0 0 1 0 1.182l-6.677 4.306z"
                  id="a"
                />
              </svg>
              <span>Watch Now</span>
            </Link>
          </div>
        </div>
      </div>
      <SeasonDescription podcastId={podcastId}/>
    </div>
  );
}
