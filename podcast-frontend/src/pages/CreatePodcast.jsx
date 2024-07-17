import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CreatePodcast() {
  const [tabChange, setTabChange] = useState(false);
  return (
    <div className="bg-[#0f1014]">
      <div className="flex justify-end">
        <Link to={`/user`}>
          <svg
            className="h-10 w-10 mt-2 mr-2 text-white bg-black hover:bg-gray-500 rounded-full hover:bg-opacity-25 p-1 cursor-pointer"
            viewBox="-6 -6 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
            preserveAspectRatio="xMinYMin"
          >
            <path d="M7.314 5.9l3.535-3.536A1 1 0 1 0 9.435.95L5.899 4.485 2.364.95A1 1 0 1 0 .95 2.364l3.535 3.535L.95 9.435a1 1 0 1 0 1.414 1.414l3.535-3.535 3.536 3.535a1 1 0 1 0 1.414-1.414L7.314 5.899z" />
          </svg>
        </Link>
      </div>
      <div className="flex border-gray-500 border-opacity-[0.3] border-b-2">
        <div
          className={`mx-10 px-10 py-5 font-md text-white font-semibold mt-5 cursor-pointer hover:bg-gray-500 hover:bg-opacity-25 ${
            !tabChange && "border-blue-500 border-b-4"
          }`}
          onClick={() => {
            setTabChange(false);
          }}
        >
          Add Podcast Details
        </div>
        <div
          className={`mx-10 px-10 py-5 font-md text-white font-semibold mt-5 cursor-pointer hover:bg-gray-500 hover:bg-opacity-25 ${
            tabChange && "border-blue-500 border-b-4"
          }`}
          onClick={() => {
            setTabChange(true);
          }}
        >
          Add Season Details
        </div>

        <div
          className={`mx-10 px-10 py-5 font-md text-white font-semibold mt-5 cursor-pointer hover:bg-gray-500 hover:bg-opacity-25 ${
            tabChange && "border-blue-500 border-b-4"
          }`}
          onClick={() => {
            setTabChange(true);
          }}
        >
          Add Episodes
        </div>
      </div>
      <div>
        <p>hello</p>
      </div>
    </div>
  );
}
