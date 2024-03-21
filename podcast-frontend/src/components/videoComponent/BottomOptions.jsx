import React from "react";

export default function BottomOptions({
  handleMouseOut,
  handleMouseOver,
  optionsBottom,
  paused,
  mute,
  volume,
  changeVolume,
  toggleFullScreen,
  toggleClick,
  setPauseFunc,
  setPlayFunc,
  setMuteFunc,
  setUnMuteFunc,
}) {
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
          <p className="text-white ml-10 font-roboto">00:07</p>
        </div>
        <input
          id="default-range"
          type="range"
          //value={volume}
          className="w-[100%] h-1 bg-white bg-opacity-40 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 m-3"
        />
        {/*<input
                id="range"
                type="range"
                className="block w-full h-1 py-2 mt-2 text-gray-700 bg-red bg-opacity-40 border border-gray-300 rounded-md"
              />*/}

        <div>
          <p className="text-white mr-10 font-roboto">00:07</p>
        </div>
      </div>

      <div className="flex justify-between">
        <div className="flex items-center m-5 ml-10 w-1/3">
          {/*<svg
            className="h-12 w-12 text-white hover:bg-gray-500 rounded-full hover:bg-opacity-25 p-1 cursor-pointer"
            fill="#fff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.67,9.69,14,5.84a2.67,2.67,0,0,0-4,2.31h0L6,5.84A2.67,2.67,0,0,0,2,8.15v7.7a2.63,2.63,0,0,0,1.33,2.3,2.61,2.61,0,0,0,1.34.37A2.69,2.69,0,0,0,6,18.16l4-2.31h0a2.65,2.65,0,0,0,1.33,2.31,2.66,2.66,0,0,0,2.67,0l6.67-3.85a2.67,2.67,0,0,0,0-4.62ZM10,13.54,5,16.42a.67.67,0,0,1-1-.57V8.15a.67.67,0,0,1,1-.57l5,2.88Zm9.67-1L13,16.43a.69.69,0,0,1-.67,0,.66.66,0,0,1-.33-.58V8.15a.66.66,0,0,1,.33-.58.78.78,0,0,1,.34-.09.63.63,0,0,1,.33.09l6.67,3.85a.67.67,0,0,1,0,1.16Z"
              transform="rotate(180 12 12)"
            />
          </svg>*/}

          <svg
            fill="#fff"
            className="h-12 w-12 text-white hover:bg-gray-500 rounded-full hover:bg-opacity-25 p-2 cursor-pointer"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(180)"
          >
            <path d="M28.801 15.040l-12.001-10c-0.215-0.18-0.495-0.29-0.8-0.29-0.69 0-1.25 0.559-1.25 1.25 0 0 0 0 0 0v0 7.332l-9.95-8.292c-0.215-0.18-0.495-0.29-0.8-0.29-0.69 0-1.25 0.559-1.25 1.25 0 0 0 0 0 0v0 20c0 0.498 0.291 0.928 0.712 1.13l0.008 0.003c0.155 0.074 0.337 0.117 0.529 0.117 0.305 0 0.585-0.109 0.803-0.291l-0.002 0.002 9.95-8.293v7.332c0 0.498 0.291 0.928 0.712 1.13l0.008 0.003c0.155 0.074 0.337 0.117 0.529 0.117 0.305 0 0.585-0.109 0.803-0.291l-0.002 0.002 12.001-10.001c0.275-0.231 0.449-0.575 0.449-0.96s-0.174-0.729-0.447-0.958l-0.002-0.002zM5.25 23.332v-14.663l8.798 7.331zM17.25 23.332v-14.663l8.797 7.331z"></path>
          </svg>

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

          {/*<svg
            className="h-12 w-12 text-white mr-5 hover:bg-gray-500 rounded-full hover:bg-opacity-25 p-1 cursor-pointer"
            fill="#fff"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20.67,9.69,14,5.84a2.67,2.67,0,0,0-4,2.31h0L6,5.84A2.67,2.67,0,0,0,2,8.15v7.7a2.63,2.63,0,0,0,1.33,2.3,2.61,2.61,0,0,0,1.34.37A2.69,2.69,0,0,0,6,18.16l4-2.31h0a2.65,2.65,0,0,0,1.33,2.31,2.66,2.66,0,0,0,2.67,0l6.67-3.85a2.67,2.67,0,0,0,0-4.62ZM10,13.54,5,16.42a.67.67,0,0,1-1-.57V8.15a.67.67,0,0,1,1-.57l5,2.88Zm9.67-1L13,16.43a.69.69,0,0,1-.67,0,.66.66,0,0,1-.33-.58V8.15a.66.66,0,0,1,.33-.58.78.78,0,0,1,.34-.09.63.63,0,0,1,.33.09l6.67,3.85a.67.67,0,0,1,0,1.16Z" />
          </svg>*/}

          <svg
            fill="#fff"
            className="h-12 w-12 text-white mr-5 hover:bg-gray-500 rounded-full hover:bg-opacity-25 p-2 cursor-pointer"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M28.801 15.040l-12.001-10c-0.215-0.18-0.495-0.29-0.8-0.29-0.69 0-1.25 0.559-1.25 1.25 0 0 0 0 0 0v0 7.332l-9.95-8.292c-0.215-0.18-0.495-0.29-0.8-0.29-0.69 0-1.25 0.559-1.25 1.25 0 0 0 0 0 0v0 20c0 0.498 0.291 0.928 0.712 1.13l0.008 0.003c0.155 0.074 0.337 0.117 0.529 0.117 0.305 0 0.585-0.109 0.803-0.291l-0.002 0.002 9.95-8.293v7.332c0 0.498 0.291 0.928 0.712 1.13l0.008 0.003c0.155 0.074 0.337 0.117 0.529 0.117 0.305 0 0.585-0.109 0.803-0.291l-0.002 0.002 12.001-10.001c0.275-0.231 0.449-0.575 0.449-0.96s-0.174-0.729-0.447-0.958l-0.002-0.002zM5.25 23.332v-14.663l8.798 7.331zM17.25 23.332v-14.663l8.797 7.331z"></path>
          </svg>

          <div className="flex items-center">
            {mute ? (
              <svg
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
              </svg>
            ) : (
              <svg
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
              </svg>
            )}
            <input
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
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            className="cursor-pointer transform transition-transform duration-500 hover:scale-105"
            xmlns="http://www.w3.org/2000/svg"
            onClick={toggleFullScreen}
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
  );
}
