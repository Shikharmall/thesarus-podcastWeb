import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../images/logo2.png";
import imgLogo1 from "../../images/mainLogo1.png";

export default function PodcastImage() {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      to={`podcastdescription`}
      className="bg-gray-500 w-[172px] h-[229px] m-1 rounded relative min-w-[172px]"
      onMouseOver={() => {
        setIsHover(true);
      }}
      onMouseOut={() => {
        setIsHover(false);
      }}
    >
      <img src={img1} alt="poster-image" />
      {isHover ? (
        <div className="absolute top-0 left-0 w-[336px] h-[385px] bg-[#1f2026] z-10 overflow-hidden rounded">
          <img
            src={imgLogo1}
            alt="poster-image"
            style={{
              WebkitMaskImage:
                "linear-gradient(to top, transparent 0.1%, #16181f)",
            }}
          />
          <div className="w-90 m-3 mt-0 mb-1 bg-[#e1e6f0] py-2 px-1 rounded-md flex justify-center items-center">
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              width="15px"
              height="15px"
              className="mr-2"
              viewBox="0 0 52 52"
              enable-background="new 0 0 52 52"
              xml:space="preserve"
            >
              <path d="M8,43.7V8.3c0-1,1.3-1.7,2.2-0.9l33.2,17.3c0.8,0.6,0.8,1.9,0,2.5L10.2,44.7C9.3,45.4,8,44.8,8,43.7z" />
            </svg>
            <p className="font-semibold">Watch Now</p>
          </div>
          <div className="flex justify-center text-gray-200 font-bold">
            <p>2024 · 1 Season · 7 Languages</p>
          </div>
          <div className="m-2">
            <p className="font-roboto text-gray-500">
              NEW EPISODE EVERY THURSDAY. When pirates hijack a ship off the
              coast of Somalia, a high-stakes game is played with innocent lives
              and a precious piece of cargo aboard.
            </p>
          </div>
        </div>
      ) : null}
    </Link>
  );
}
