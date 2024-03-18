import React, { useState, useRef, useEffect } from "react";
import Video1 from "C:/Users/Lenovo/Downloads/BigBuckBunny.mp4";
import Img from "../images/avatarposter1.png";
//import { VideoSeekSlider } from "react-video-seek-slider";

//import { TweenMax, Power3 } from "gsap/gsap-core";
//import { TweenMax, Power3 } from "gsap";

import '../css/CustomScrollbar.css';

import gsap from "gsap";

import ReactPlayer from "react-player";

export default function WatchVideo() {
  let container = useRef(null);
  console.log(container);

  const [clicked, setClicked] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    console.log(container);
    //TweenMax.to
    const box = container.current;

    // Create a GSAP tween
    //const tl = gsap.timeline();

    // Define the animation
    //tl.from(box, { duration: 1, y: 100, opacity: 0, ease: "power4.out" });

    const tl = gsap.timeline({ paused: true });

    tl.from(box, { duration: 1, y: 100, opacity: 0, ease: "power4.out" });

    if (clicked) {
      tl.play();
    } else {
      tl.reverse();
    }

    // Return a cleanup function to ensure animation is destroyed when component unmounts
    return () => {
      tl.kill(); // Kill the animation to prevent memory leaks
      //tl.to(box, { duration: 1, x: -100, opacity: 0, ease: 'power4.in' });
    };
  }, [clicked]);

  return (
    <div
      className="w-screen h-screen bg-black relative"
      //onMouseOver={() => {
      //  console.log("Mouse Over!");
      //  setClicked(true);
      //}}
      //onMouseOut={() => {
      //  console.log("Mouse Over!");
      //  setClicked(true);
      //}}
    >
      {/*
      
      <p className="text-red-500">{cnt}</p>
      <video
        style={{ width: "100%", height: "100%" }}
        controls
        //autoPlay
        //muted
      >
        <source src={Video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>*/}
      <ReactPlayer
        url={Video1}
        playing={!paused}
        muted={true}
        width={`100%`}
        height={`100%`}
      />
      {clicked && (
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
                className="cursor-pointer transform transition-transform duration-500 hover:scale-105"
                onClick={() => {
                  setClicked(false);
                  setPaused(false);
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

            <div className="flex m-10 mx-20">
              <div className="w-1/5">
                <div className="flex p-3 cursor-pointer">
                  <p className="text-[#fff] text-[20px] font-sans font-[600] mr-16">
                    Season 1
                  </p>
                  <p className="text-[#fff] text-[20px] font-sans font-[400]">
                    6 Eps
                  </p>
                </div>
                <div className="flex p-3 cursor-pointer">
                  <p className="text-gray-400 text-[20px] font-sans font-[600] mr-16">
                    Season 2
                  </p>
                  <p className="text-gray-400 text-[20px] font-sans font-[400] hidden">
                    7 Eps
                  </p>
                </div>
              </div>
              {/* scrollbar scrollbar-thumb-red-500 scrollbar-track-gray-200 */}
              <div
                className="w-4/5 h-[500px] overflow-y-scroll "
                
                id="custom-scrollbar"
                
              >
                <div className="m-3 flex items-center justify-center bg-gray-500 bg-opacity-10 rounded-md cursor-pointer">
                  <div className="m-3 mr-0 w-1/4">
                    <img
                      src={Img}
                      alt="poster"
                      className="w-[220px] h-[123.75px] rounded-md"
                    />
                  </div>
                  <div className="m-3 ml-0 w-3/4">
                    <p
                      className="text-white text-[20px] font-[600] m-1"
                      style={{ fontFamily: '"Inter",sans-serif' }}
                    >
                      Mother's Day
                    </p>
                    <p
                      className="text-white text-[16px] font-[600] m-1"
                      style={{ fontFamily: '"Inter",sans-serif' }}
                    >
                      S1 E1 . 27 Apr 2023 . 30m
                    </p>
                    <p
                      className="text-white text-opacity-60 text-[16px] font-[400] m-1"
                      style={{ fontFamily: '"Inter",sans-serif' }}
                    >
                      Three frustrated husbands are in the police station for a
                      drunk-and-drive case and start telling their life stories
                      to the CI. They tell him how they met at a school day
                      event for their kids and became friends. They tell him how
                      they met at a school day event for their kids and became
                      friends.
                    </p>
                  </div>
                </div>

                <div className="m-3 flex items-center justify-center rounded-md cursor-pointer">
                  <div className="m-3 mr-0 w-1/4">
                    <img
                      src={Img}
                      alt="poster"
                      className="w-[220px] h-[123.75px] rounded-md"
                    />
                  </div>
                  <div className="m-3 ml-0 w-3/4">
                    <p
                      className="text-white text-[20px] font-[600] m-1"
                      style={{ fontFamily: '"Inter",sans-serif' }}
                    >
                      Mother's Day
                    </p>
                    <p
                      className="text-white text-[16px] font-[600] m-1"
                      style={{ fontFamily: '"Inter",sans-serif' }}
                    >
                      S1 E1 . 27 Apr 2023 . 30m
                    </p>
                    <p
                      className="text-white text-opacity-60 text-[16px] font-[400] m-1"
                      style={{ fontFamily: '"Inter",sans-serif' }}
                    >
                      Three frustrated husbands are in the police station for a
                      drunk-and-drive case and start telling their life stories
                      to the CI. They tell him how they met at a school day
                      event for their kids and became friends. They tell him how
                      they met at a school day event for their kids and became
                      friends.
                    </p>
                  </div>
                </div>

                <div className="m-3 flex items-center justify-center rounded-md cursor-pointer">
                  <div className="m-3 mr-0 w-1/4">
                    <img
                      src={Img}
                      alt="poster"
                      className="w-[220px] h-[123.75px] rounded-md"
                    />
                  </div>
                  <div className="m-3 ml-0 w-3/4">
                    <p
                      className="text-white text-[20px] font-[600] m-1"
                      style={{ fontFamily: '"Inter",sans-serif' }}
                    >
                      Mother's Day
                    </p>
                    <p
                      className="text-white text-[16px] font-[600] m-1"
                      style={{ fontFamily: '"Inter",sans-serif' }}
                    >
                      S1 E1 . 27 Apr 2023 . 30m
                    </p>
                    <p
                      className="text-white text-opacity-60 text-[16px] font-[400] m-1"
                      style={{ fontFamily: '"Inter",sans-serif' }}
                    >
                      Three frustrated husbands are in the police station for a
                      drunk-and-drive case and start telling their life stories
                      to the CI. They tell him how they met at a school day
                      event for their kids and became friends. They tell him how
                      they met at a school day event for their kids and became
                      friends.
                    </p>
                  </div>
                </div>

                <div className="m-3 flex items-center justify-center rounded-md cursor-pointer">
                  <div className="m-3 mr-0 w-1/4">
                    <img
                      src={Img}
                      alt="poster"
                      className="w-[220px] h-[123.75px] rounded-md"
                    />
                  </div>
                  <div className="m-3 ml-0 w-3/4">
                    <p
                      className="text-white text-[20px] font-[600] m-1"
                      style={{ fontFamily: '"Inter",sans-serif' }}
                    >
                      Mother's Day
                    </p>
                    <p
                      className="text-white text-[16px] font-[600] m-1"
                      style={{ fontFamily: '"Inter",sans-serif' }}
                    >
                      S1 E1 . 27 Apr 2023 . 30m
                    </p>
                    <p
                      className="text-white text-opacity-60 text-[16px] font-[400] m-1"
                      style={{ fontFamily: '"Inter",sans-serif' }}
                    >
                      Three frustrated husbands are in the police station for a
                      drunk-and-drive case and start telling their life stories
                      to the CI. They tell him how they met at a school day
                      event for their kids and became friends. They tell him how
                      they met at a school day event for their kids and became
                      friends.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-[100vw] z-3 flex justify-center">
        <div
          className="flex justify-center items-center cursor-pointer m-3 transform transition-transform duration-500 hover:scale-105 text-gray-300 hover:text-white"
          onClick={() => {
            setClicked(true);
            setPaused(true);
          }}
        >
          <p className="m-1 font-sans font-semibold text-[18px]">Episodes</p>
          <svg
            width="20px"
            height="20px"
            className="m-1"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="48" height="48" fill="white" fillOpacity="0.01" />
            <path
              d="M13 30L25 18L37 30"
              stroke="currentColor"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
