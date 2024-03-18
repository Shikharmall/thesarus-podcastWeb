import React, { useState, useRef, useEffect } from "react";
import Video1 from "C:/Users/Lenovo/Downloads/BigBuckBunny.mp4";
import Img from "../images/avatarposter1.png";
//import { VideoSeekSlider } from "react-video-seek-slider";
import { VideoSeekSlider } from "react-video-seek-slider";

//import { TweenMax, Power3 } from "gsap/gsap-core";
//import { TweenMax, Power3 } from "gsap";

import "../css/CustomScrollbar.css";

import gsap from "gsap";

import ReactPlayer from "react-player";

export default function WatchVideo() {
  let container = useRef(null);
  //console.log(container);

  const ref = useRef();

  const [progress, setProgress] = useState(null);
  const [mute, setMute] = useState(false);

  const format = (seconds) => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, "0");
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  const [clicked, setClicked] = useState(false);
  const [paused, setPaused] = useState(false);
  const [volume, setVolume] = useState(50);

  const [currentTime, setCurrentTime] = useState(0);

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

  console.log(paused);

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
      <ReactPlayer
        url={Video1}
        playing={!paused}
        muted={mute}
        width={`100%`}
        height={`100%`}
        volume={volume / 100}
        ref={ref}
        onProgress={(x) => {
          console.log(x);
          setProgress(x);
        }}
        //pip
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

      <div className="absolute top-0 left-0 w-[100%] z-3 flex flex-col bg-black bg-opacity-5 bg-gradient-to-t from-transparent to-black">
        <div className="flex justify-between">
          <div className="flex items-center cursor-pointer m-5 ml-10 w-1/2">
            <svg
              class="h-6 w-6 text-white mr-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <div className="flex flex-col">
              <p
                className=" font-semibold text-[20px] text-white"
                style={{ fontFamily: '"Inter",sans-serif' }}
              >
                Arya
              </p>
              <p
                className="  text-[17px] text-white text-opacity-65"
                style={{ fontFamily: '"Inter",sans-serif' }}
              >
                S3 E1 Part1: Kahani Abhi Khatam Nahi Hui Hai
              </p>
            </div>
          </div>
          <div className="flex justify-end items-center cursor-pointer m-5 mr-10 w-1/2 cursor-pointer transform transition-transform duration-500 hover:scale-105">
            <svg
              class="h-7 w-7 text-white mr-2"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 7.766c0-1.554 1.696-2.515 3.029-1.715l7.056 4.234c1.295.777 1.295 2.653 0 3.43L8.03 17.949c-1.333.8-3.029-.16-3.029-1.715V7.766zM14.056 12L7 7.766v8.468L14.056 12zM18 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z"
                fill="#fff"
              />
            </svg>
            <p
              className="font-bold text-[17px] text-white"
              style={{ fontFamily: '"Inter",sans-serif' }}
            >
              Next Episode
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-[100%] z-3 flex flex-col pt-4 bg-black bg-opacity-5 bg-gradient-to-b from-transparent to-black">
        <div className="flex justify-between items-center">
          <div>
            <p
              className="text-white ml-10"
              style={{ fontFamily: '"Inter",sans-serif' }}
            >
              00:07
            </p>
          </div>
          <input
            id="default-range"
            type="range"
            //value={volume}
            className="w-[100%] h-2 bg-white bg-opacity-40 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 m-3"
          />
          <div>
            <p
              className="text-white mr-10"
              style={{ fontFamily: '"Inter",sans-serif' }}
            >
              00:07
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center cursor-pointer m-5 ml-10 w-1/3">
            {paused ? (
              <svg
                class="h-8 w-8 text-white mr-5"
                viewBox="0 0 24 24"
                fill="white"
                stroke="currentColor"
                stroke-width="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                onClick={() => {
                  setPaused(false);
                }}
              >
                {" "}
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            ) : (
              <svg
                class="h-8 w-8 text-white mr-5"
                viewBox="0 0 24 24"
                fill="white"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                onClick={() => {
                  setPaused(true);
                }}
              >
                {" "}
                <rect x="6" y="4" width="4" height="16" />
                <rect x="14" y="4" width="4" height="16" />
              </svg>
            )}
            <div className="flex items-center">
              {mute ? (
                <svg
                  className="h-10 w-10 text-white m-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => {
                    setMute(false);
                    setVolume("50");
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    clip-rule="evenodd"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                  />
                </svg>
              ) : (
                <svg
                  className="h-10 w-10 text-white m-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => {
                    setMute(true);
                    setVolume("0");
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                  />
                </svg>
              )}
              <input
                id="default-range"
                type="range"
                value={volume}
                className="w-full h-1 bg-white bg-opacity-20 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 m-1 ml-3"
                onChange={(e) => {
                  if (e.target.value === "0") {
                    setMute(true);
                  }
                  if (e.target.value !== "0") {
                    setMute(false);
                  }
                  setVolume(e.target.value);
                }}
              />
            </div>
          </div>
          <div
            className="flex justify-center items-center cursor-pointer m-3 transform transition-transform duration-500 hover:scale-105 text-gray-200 hover:text-white w-1/3"
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
          <div className="flex justify-end items-center cursor-pointer m-5 mr-10 w-1/3">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              className="cursor-pointer transform transition-transform duration-500 hover:scale-105"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 4H7C5.58579 4 4.87868 4 4.43934 4.43934C4 4.87868 4 5.58579 4 7V9"
                stroke="#fff"
                strokeLinecap="round"
              />
              <path
                d="M9 20H7C5.58579 20 4.87868 20 4.43934 19.5607C4 19.1213 4 18.4142 4 17V15"
                stroke="#fff"
                strokeLinecap="round"
              />
              <path
                d="M15 4H17C18.4142 4 19.1213 4 19.5607 4.43934C20 4.87868 20 5.58579 20 7V9"
                stroke="#fff"
                strokeLinecap="round"
              />
              <path
                d="M15 20H17C18.4142 20 19.1213 20 19.5607 19.5607C20 19.1213 20 18.4142 20 17V15"
                stroke="#fff"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
