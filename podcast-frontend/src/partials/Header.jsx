import React from "react";
import HeadImg from "../images/headimage.jpg";
import Logo from "../images/thesaruslogo.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="ml-[10%] mb-[2%] w-[85%] h-[250px] bg-[#16181f] rounded-md overflow-hidden flex">
      <div
        className="h-[250px] rounded-ss-lg"
        style={{
          WebkitMaskImage:
            "linear-gradient(to left, transparent 0.5%, #16181f)",
        }}
      >
        <img src={HeadImg} alt="head image" className="h-[100%]" />
      </div>
      <div className="m-[2px] self-center">
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="rounded-md w-[50px] m-[2px]" />
          <div>
            <h1 className="text-white m-[2px] font-roboto">
              {" "}
              <span className="bg-[#ffcc75] text-[#804800] px-1 py-[2px] rounded font-semibold">
                Ad
              </span>{" "}
              The SARUS
            </h1>
            <p className="text-gray-500 m-[2px] font-roboto text-md">
              Streaming for you
            </p>
          </div>
        </div>
        <br />
        <div>
          <h4
            className="font-roboto"
            style={{
              color: "rgb(188, 188, 188)",
            }}
          >
            Your one-stop destination for Sports, Comedy, Drama, Thrillers &
            more!
          </h4>
        </div>
        <br /> <br />
        <div>
          <Link to={``}>
            <button className="text-white bg-gray-800 border-none p-4 text-lg rounded-md font-inter w-48 cursor-pointer font-roboto">
              Explore
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
