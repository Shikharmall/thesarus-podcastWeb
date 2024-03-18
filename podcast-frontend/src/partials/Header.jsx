import React from "react";
import HeadImg from "../images/headimage.jpg";
import Logo from "../images/thesaruslogo.jpg";

export default function Header() {
  return (
    <>
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
            <img
              src={Logo}
              alt="logo"
              className="rounded-md w-[50px] m-[2px]"
            />
            <h1
              className="text-white m-[2px]"
              style={{ fontFamily: '"Inter",sans-serif' }}
            >
              The SARUS
            </h1>
          </div>
          <br />
          <div>
            <h4
              style={{
                color: "rgb(188, 188, 188)",
                fontFamily: '"Inter",sans-serif',
              }}
            >
              Your one-stop destination for Sports,Comedy, Drama, Thrillers
              &amp; more!
            </h4>
          </div>
          <br /> <br />
          <div>
            <a href="search">
              <button className="text-white bg-gray-800 border-none p-4 text-lg rounded-md font-inter w-48 cursor-pointer">
                Explore
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
