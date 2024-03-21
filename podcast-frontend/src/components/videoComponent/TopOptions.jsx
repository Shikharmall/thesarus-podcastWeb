import React, { useEffect, useRef, useState } from "react";
import Img from "../../images/avatarposter1.png";

import gsap from "gsap";
import { Link } from "react-router-dom";

export default function TopOptions({
  handleMouseOut,
  handleMouseOver,
  optionsUpper,
}) {
  const [showPopUp, setShowPopUp] = useState(false);
  let popUp = useRef(null);

  useEffect(() => {
    const box = popUp.current;

    const tl = gsap.timeline({ paused: true });

    tl.from(box, { duration: 0.6, y: 100, opacity: 0, ease: "power4.out" });

    if (popUp) {
      tl.play();
    } else {
      tl.reverse();
    }

    return () => {
      tl.kill();
    };
  }, [showPopUp]);

  return (
    <div
      className="absolute top-0 left-0 w-[100%] z-3 flex flex-col bg-gradient-to-t from-transparent to-black py-4 transition-opacity duration-300"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      //onMouseOut={() => {
      //  setTimeout(() => {
      //    handleMouseOut();
      //  }, 5000);
      //}}
      ref={optionsUpper}
    >
      <div className="flex justify-between">
        <div className="flex items-center cursor-pointer m-5 ml-10 w-1/2">
          <svg
            className="h-6 w-6 text-white mr-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <div className="flex flex-col">
            <p className="font-semibold text-[20px] text-white font-roboto">
              Arya
            </p>
            <p className="text-[17px] text-white text-opacity-65 font-roboto">
              S3 E1 Part1: Kahani Abhi Khatam Nahi Hui Hai
            </p>
          </div>
        </div>

        <div className="flex justify-end items-center m-5 mr-10 w-1/2 relative">
          <Link
            className="cursor-pointer transform transition-transform duration-300 hover:scale-105 flex items-center"
            onMouseOver={() => {
              setShowPopUp(true);
            }}
            onMouseOut={() => {
              setShowPopUp(false);
            }}
          >
            <svg
              className="h-7 w-7 text-white mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5 7.766c0-1.554 1.696-2.515 3.029-1.715l7.056 4.234c1.295.777 1.295 2.653 0 3.43L8.03 17.949c-1.333.8-3.029-.16-3.029-1.715V7.766zM14.056 12L7 7.766v8.468L14.056 12zM18 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z"
                fill="#fff"
              />
            </svg>
            <p className="font-semibold text-[17px] text-[#ffffff] font-roboto">
              Next Episode
            </p>
          </Link>
          {showPopUp ? (
            <Link
              className="absolute top-10 right-0 text-white w-[500px]"
              ref={popUp}
              onMouseOver={() => {
                setShowPopUp(true);
              }}
              onMouseOut={() => {
                setShowPopUp(false);
              }}
            >
              <div className="m-3 flex items-center justify-center bg-black bg-opacity-90 rounded-md cursor-pointer">
                <div className="m-3 w-1/2 relative m-6">
                  <img
                    src={Img}
                    alt="poster"
                    className="w-[320px] h-[123.75px] rounded-md"
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
                <div className="m-3 ml-0 w-1/2">
                  <p
                    className="text-white text-[20px] font-[600] m-1 font-roboto"
                    //style={{ fontFamily: '"Inter",sans-serif' }}
                  >
                    Mother's Day
                  </p>
                  <p className="text-white text-[16px] font-[600] m-1 font-roboto">
                    S1 E1 · 27 Apr 2023 · 30m
                  </p>
                  <p className="text-white text-opacity-60 text-[14px] font-[400] m-1 font-roboto">
                    Three frustrated husbands are in the police station for a
                    drunk-and-drive case and start telling their life ......
                  </p>
                </div>
              </div>
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  );
}
