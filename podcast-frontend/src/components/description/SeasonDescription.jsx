import React, { useState } from "react";
import Img from "../../images/avatarposter1.png";
import { Link } from "react-router-dom";
import Episode1 from "../../images/episode1.png";
import Episode2 from "../../images/episode2.png";
import Episode3 from "../../images/episode3.png";
import Episode4 from "../../images/episode4.png";
import Episode5 from "../../images/episode5.png";

import "../../css/HistoryProgressRange.css";

export default function SeasonDescription() {
  const episodes = [Episode1, Episode2, Episode3, Episode4, Episode5];

  const [isActive, setIsActive] = useState(0);
  const [seasons, setSeasons] = useState([1, 1, 1, 1]);
  const [arry, setArry] = useState([1, 1, 1, 1, 1]);
  const [isActive1, setIsActive1] = useState(0);
  return (
    <>
      <div 
        className="sticky top-0  bg-[#0f1014]"
        //style={{ position: "sticky", top: 0 }} z-10
      >
        <div className="ml-[10%] border-b-2 border-[#fff] border-opacity-10 py-8 flex">
          {seasons &&
            seasons.map((_, index) => (
              <h1
                key={index}
                className={`text-[23px] cursor-pointer font-roboto px-4 font-[500] ${
                  isActive === index ? "text-white" : "text-gray-400"
                } `}
                onClick={() => {
                  setIsActive(index);
                }}
              >
                Season {index + 1}
              </h1>
            ))}
        </div>
      </div>

      <div className="w-4/5 ml-[10%]">
        {arry.map((item, index) => (
          <Link
            to={`/watch`}
            className={`m-3 flex items-center justify-center rounded-md cursor-pointer hover:bg-gray-500 hover:bg-opacity-10 ${
              index === isActive1 ? "bg-gray-500 bg-opacity-10" : ""
            }`}
            key={index}
            onClick={() => {
              setIsActive1(index);
            }}
          >
            <div className="m-3 mr-0 w-1/4 relative m-6">
              <img
                src={episodes[index]}
                alt="poster"
                className="w-[220px] min-w-[200px] h-[123.75px] rounded-md"
              />
              <svg
                className="h-8 w-8 absolute left-2 bottom-2"
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
              <input
                type="range"
                id="volumeRange1"
                className="w-[220px] min-w-[200px] absolute left-0 bottom-0 bg-opacity-25" 
                style={{
                  background: `linear-gradient(to right, #095ae5 0%, #095ae5 50%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 100%)`,
                }}
              />
            </div>
            <div className="m-3 ml-0 w-3/4">
              <p className="text-white text-[20px] font-[600] m-1 font-roboto">
                Mother's Day
              </p>
              <p className="text-white text-[16px] font-[600] m-1 roboto">
                S{isActive + 1} E{index + 1} · 27 Apr 2023 · 30m
              </p>
              <p className="text-white text-opacity-60 text-[16px] font-[400] m-1 roboto">
                Three frustrated husbands are in the police station for a
                drunk-and-drive case and start telling their life stories to the
                CI. They tell him how they met at a school day event for their
                kids and became friends. They tell him how they met at a school
                day event for their kids and became friends.
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
