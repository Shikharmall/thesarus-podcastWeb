import React, { useEffect, useRef, useState } from "react";
import "../../css/CustomRange.css";

export default function BottomOptions({
  handleMouseOut,
  handleMouseOver,
  optionsBottom,
  paused,
  mute,
  volume,
  changeVolume,
  toggleClick,
  setPauseFunc,
  setPlayFunc,
  setMuteFunc,
  setUnMuteFunc,
  isFullScreen,
  setFullScreen,
  setMinimiseScreen,
  duration,
  progress
}) {

  const formatDuration = (duration) => {
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div
      className="absolute bottom-0 left-0 w-[100%] z-3 flex flex-col pt-4 bg-gradient-to-b from-transparent to-black transition-opacity duration-300"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      //onMouseOut={() => {
      //  setTimeout(() => {
      //    handleMouseOut();
      //  }, 5000);
      //}}
      ref={optionsBottom}
    >
      <div className="flex justify-between items-center">
        <div>
          <p className="text-white ml-10 font-roboto">{formatDuration(progress)}</p>
        </div>
        <input
          type="range"
          id="volumeRange"
          className="w-[100%] cursor-pointer m-3"
          value={progress}
          style={{
            background: `linear-gradient(to right, #095ae5 0%, #095ae5 ${progress}%, rgba(255, 255, 255, 0.25) ${progress}%, rgba(255, 255, 255, 0.25) 100%)`,
          }}
          //onChange={(e) => {
          //  setProgress(e.target.value);
          //}}
        />
        {/*<input
                id="range"
                type="range"
                className="block w-full h-1 py-2 mt-2 text-gray-700 bg-red bg-opacity-40 border border-gray-300 rounded-md"
              />*/}

        <div>
          <p className="text-white mr-10 font-roboto">{formatDuration(duration)}</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center m-5 ml-10 w-1/3">
          <div className="rounded-full hover:bg-gray-500  hover:bg-opacity-25">
            <svg
              fill="#fff"
              className="h-12 w-12 text-white p-3 cursor-pointer"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
              transform="rotate(180)"
            >
              <path d="M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z" />
            </svg>
          </div>

          {paused ? (
            <svg
              className="h-12 w-12 text-white hover:bg-gray-500 rounded-full hover:bg-opacity-25 p-1 cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setPlayFunc();
              }}
            >
              <path d="M8 6v12l10-6z" fill="#fff" />
            </svg>
          ) : (
            <svg
              className="h-12 w-12 text-white hover:bg-gray-500 rounded-full hover:bg-opacity-25 p-1 cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                setPauseFunc();
              }}
            >
              <path
                d="M9 6a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1zm6 0a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1z"
                fill="#fff"
              />
            </svg>
          )}

          <div className="rounded-full hover:bg-gray-500  hover:bg-opacity-25 mr-3">
            <svg
              fill="#fff"
              className="h-12 w-12 text-white p-3 cursor-pointer"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M500.5 231.4l-192-160C287.9 54.3 256 68.6 256 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2zm-256 0l-192-160C31.9 54.3 0 68.6 0 96v320c0 27.4 31.9 41.8 52.5 24.6l192-160c15.3-12.8 15.3-36.4 0-49.2z" />
            </svg>
          </div>

          <div className="flex items-center">
            {mute ? (
              <>
                {/*<svg
                  className="h-12 w-12 text-white m-1 hover:bg-gray-500 rounded-full hover:bg-opacity-25 p-1 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => {
                    setUnMuteFunc();
                    changeVolume("50");
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                    clipRule="evenodd"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                  />
                </svg>*/}
                <svg
                  className="h-12 w-12 text-white m-1 hover:bg-gray-500 rounded-full hover:bg-opacity-25 p-1 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    setUnMuteFunc();
                    changeVolume("50");
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
              </>
            ) : (
              <>
                {/*<svg
                className="h-12 w-12 text-white m-1 hover:bg-gray-500 rounded-full hover:bg-opacity-25 p-1 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                onClick={() => {
                  setMuteFunc();
                  changeVolume("0");
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                />
              </svg>*/}
                <svg
                  className="h-12 w-12 text-white m-1 hover:bg-gray-500 rounded-full hover:bg-opacity-25 p-1 cursor-pointer"
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => {
                    setMuteFunc();
                    changeVolume("0");
                  }}
                >
                  <path d="M12.43 4.1a1 1 0 00-1 .12L6.65 8H3a1 1 0 00-1 1v6a1 1 0 001 1h3.65l4.73 3.78A1 1 0 0012 20a.91.91 0 00.43-.1A1 1 0 0013 19V5a1 1 0 00-.57-.9zM11 16.92l-3.38-2.7A1 1 0 007 14H4v-4h3a1 1 0 00.62-.22L11 7.08zm8.66-10.58a1 1 0 00-1.42 1.42 6 6 0 01-.38 8.84 1 1 0 00.64 1.76 1 1 0 00.64-.23 8 8 0 00.52-11.79zm-2.83 2.83a1 1 0 10-1.42 1.42A2 2 0 0116 12a2 2 0 01-.71 1.53 1 1 0 00-.13 1.41 1 1 0 001.41.12A4 4 0 0018 12a4.06 4.06 0 00-1.17-2.83z" />
                </svg>
              </>
            )}

            {/*<input
              id="default-range"
              type="range"
              value={volume}
              className="w-full h-1 bg-white bg-opacity-20 rounded-lg appearance-none cursor-pointer m-1 ml-3"
              onChange={(e) => {
                if (e.target.value === "0") {
                  setMuteFunc();
                }
                if (e.target.value !== "0") {
                  setUnMuteFunc();
                }
                changeVolume(e.target.value);
              }}
            />*/}

            <input
              type="range"
              id="volumeRange"
              value={volume}
              className="cursor-pointer"
              style={{
                background: `linear-gradient(to right, #095ae5 0%, #095ae5 ${volume}%, rgba(255, 255, 255, 0.25) ${volume}%, rgba(255, 255, 255, 0.25) 100%)`,
              }}
              onChange={(e) => {
                if (e.target.value === "0") {
                  setMuteFunc();
                }
                if (e.target.value !== "0") {
                  setUnMuteFunc();
                }
                changeVolume(e.target.value);
              }}
            />
          </div>
        </div>

        <div className="flex justify-center items-center m-3 transform transition-transform duration-500 hover:scale-105 text-gray-200 hover:text-white w-1/3">
          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => {
              setPauseFunc();
              toggleClick();
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

        <div className="flex justify-end items-center m-5 mr-10 w-1/3">
          {isFullScreen ? (
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 32 32"
              id="i-fullscreen-exit"
              className="cursor-pointer transform transition-transform duration-500 hover:scale-105"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="#ffffff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              onClick={setMinimiseScreen}
            >
              <path d="M4 12 L12 12 12 4 M20 4 L20 12 28 12 M4 20 L12 20 12 28 M28 20 L20 20 20 28" />
            </svg>
          ) : (
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="cursor-pointer transform transition-transform duration-500 hover:scale-105"
              xmlns="http://www.w3.org/2000/svg"
              onClick={setFullScreen}
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
          )}
        </div>
      </div>
    </div>
  );
}
