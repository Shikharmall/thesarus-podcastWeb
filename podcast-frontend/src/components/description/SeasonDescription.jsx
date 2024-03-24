import React, { useState } from "react";
import Img from "../../images/avatarposter1.png";
import { Link } from "react-router-dom";

export default function SeasonDescription() {
  const [isActive, setIsActive] = useState(1);
  const [seasons, setSeasons] = useState([1, 1, 1]);
  const [arry, setArry] = useState([1, 1, 1, 1, 1]);
  const [isActive1, setIsActive1] = useState(0);
  return (
    <>
      <div
        style={{ position: "sticky", top: 0 }}
        className="ml-[10%] border-b border-[#fff] border-opacity-10 py-8 flex"
      >
        <h1
          className={` text-2xl cursor-pointer font-roboto px-4 ${
            isActive === 1 ? "text-white" : "text-gray-500"
          } `}
          onClick={() => {
            setIsActive(1);
          }}
        >
          Season 1
        </h1>
        <h1
          className={` text-2xl cursor-pointer font-roboto px-4 ${
            isActive === 2 ? "text-white" : "text-gray-500"
          }`}
          onClick={() => {
            setIsActive(2);
          }}
        >
          Season 2
        </h1>
        <h1
          className={` text-2xl cursor-pointer font-roboto px-4 ${
            isActive === 3 ? "text-white" : "text-gray-500"
          }`}
          onClick={() => {
            setIsActive(3);
          }}
        >
          Season 3
        </h1>
        <h1
          className={` text-2xl cursor-pointer font-roboto px-4 ${
            isActive === 4 ? "text-white" : "text-gray-500"
          }`}
          onClick={() => {
            setIsActive(4);
          }}
        >
          Season 4
        </h1>
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
