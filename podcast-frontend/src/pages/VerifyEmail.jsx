import React from "react";
import { Link } from "react-router-dom";
import Poster from "../images/avatarpostercrop.png";

export default function VerifyEmail() {
  return (
    <div className="bg-[#0f1014] w-[100vw] h-[100vh] flex justify-center items-center">
      <div className="w-[700px] h-[450px] bg-[#16181f] rounded-3xl flex overflow-hidden">
        <div
          className="w-[45%] h-[100%]"
          style={{
            WebkitMaskImage:
              "linear-gradient(to left, transparent 2%, #16181f)",
          }}
        >
          <img src={Poster} alt="poster" className="w-[100%] h-[100%]" />
        </div>

        <div className="w-[55%] m-4">
          <div className="flex justify-end">
            <Link to={`/login`}>
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 15 15"
                version="1.1"
                id="cross"
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
              >
                <path
                  d="M2.64,1.27L7.5,6.13l4.84-4.84C12.5114,1.1076,12.7497,1.0029,13,1c0.5523,0,1,0.4477,1,1&#xA;&#x9;c0.0047,0.2478-0.093,0.4866-0.27,0.66L8.84,7.5l4.89,4.89c0.1648,0.1612,0.2615,0.3796,0.27,0.61c0,0.5523-0.4477,1-1,1&#xA;&#x9;c-0.2577,0.0107-0.508-0.0873-0.69-0.27L7.5,8.87l-4.85,4.85C2.4793,13.8963,2.2453,13.9971,2,14c-0.5523,0-1-0.4477-1-1&#xA;&#x9;c-0.0047-0.2478,0.093-0.4866,0.27-0.66L6.16,7.5L1.27,2.61C1.1052,2.4488,1.0085,2.2304,1,2c0-0.5523,0.4477-1,1-1&#xA;&#x9;C2.2404,1.0029,2.4701,1.0998,2.64,1.27z"
                />
              </svg>
            </Link>
          </div>

          <div className="flex flex-col">
            <h1
              className="font-bold text-lg m-2"
              style={{
                color: "rgb(177, 177, 177)",
                fontFamily: '"Inter",sans-serif',
              }}
            >
              Forgot Password
            </h1>

            <br />

            <div>
              <input
                type="text"
                placeholder="Enter your registered email"
                name="email"
                className="px-4 py-2 text-lg rounded-md m-2 bg-[#16181f] border-none text-white"
                style={{ border: "1px solid rgb(177, 177, 177)" }}
              />
            </div>

            <br />
            <br />
            <br />

            <div>
              <input
                type="submit"
                value="Send Email"
                className="px-4 py-2 text-lg rounded-md m-2 bg-[#16181f] border-none text-white cursor-pointer hover:bg-[#414141]"
                style={{ border: "1px solid rgb(177, 177, 177)" }}
              />
            </div>

            <Link to={`/login`} className="m-2 text-[#b1b1b1] text-sm">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
