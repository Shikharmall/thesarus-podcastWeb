import React, { useState } from "react";
import Img from "../../images/avatarposter1.png";

export default function AllSeasonEpisodesList({
  container,
  setPlayFunc,
  toggleClick,
}) {
  
  const [seasons, setSeasons] = useState([1, 1, 1]);
  const [arry, setArry] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  const [isActive, setIsActive] = useState(0);

  return (
    <div
      className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-opacity-90 bg-black z-15 p-10 overflow-hidden"
      style={{ zIndex: 15 }}
    >
      <div ref={container}>
        <div className="flex justify-end items-center">
          <svg
            width="40px"
            height="40px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer transform transition-transform duration-500 hover:scale-105 hover:bg-gray-500 rounded-full hover:bg-opacity-25 p-1"
            onClick={() => {
              toggleClick();
              setPlayFunc();
            }}
          >
            <path
              d="M17 7L7 17M7 7L17 17"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="flex justify-center items-center">
          <p className="text-[#fff] text-[22px] font-sans font-[600]">
            Episodes
          </p>
        </div>

        <div className="flex m-2 mx-20 md:m-4 lg:m-8 xl:m-10">
          <div className="w-1/5">
            {seasons.map((item, index) => (
              <div
                className="flex p-3 cursor-pointer"
                key={index}
                onClick={() => {
                  setIsActive(index);
                }}
              >
                <p
                  className={`font-roboto font-[600] mr-16  ${
                    isActive === index
                      ? "text-[#fff] text-[20px]"
                      : "text-gray-400 text-opacity-50 text-[20px]"
                  }`}
                >
                  Season {index + 1}
                </p>
                <p
                  className={`text-[#fff] text-[20px] font-roboto font-[400] ${
                    isActive === index ? "" : "hidden"
                  }`}
                >
                  {arry.length} Eps
                </p>
              </div>
            ))}
          </div>

          {/* scrollbar scrollbar-thumb-red-500 scrollbar-track-gray-200 */}

          <div
            className="w-4/5 h-[400px] overflow-y-scroll md:h-[430px] lg:h-[450px] xl:h-[520px]"
            id="custom-scrollbar"
          >
            {arry.map((item, index) => (
              <div
                className={`m-3 flex items-center justify-center rounded-md cursor-pointer ${
                  index === 0 ? "bg-gray-500 bg-opacity-10" : ""
                }`}
                key={index}
              >
                <div className="m-3 mr-0 w-1/4 relative m-6">
                  <img
                    src={Img}
                    alt="poster"
                    className="w-[220px] h-[123.75px] rounded-md"
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
                </div>
                <div className="m-3 ml-0 w-3/4">
                  <p className="text-white text-[20px] font-[600] m-1 font-roboto">
                    Mother's Day
                  </p>
                  <p className="text-white text-[16px] font-[600] m-1 roboto">
                    S1 E{index + 1} · 27 Apr 2023 · 30m
                  </p>
                  <p className="text-white text-opacity-60 text-[16px] font-[400] m-1 roboto">
                    Three frustrated husbands are in the police station for a
                    drunk-and-drive case and start telling their life stories to
                    the CI. They tell him how they met at a school day event for
                    their kids and became friends. They tell him how they met at
                    a school day event for their kids and became friends.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
