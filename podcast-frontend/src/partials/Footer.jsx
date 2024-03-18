import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="ml-[10%] flex pt-2 py-4 mr-4 justify-between">
      <div className="m-[10px]">
        <h3
          className="text-[#e1e1e1] text-md"
          style={{ fontFamily: '"Inter",sans-serif' }}
        >
          Company
        </h3>
        <br />

        <Link to={``}>
          <p
            style={{
              color: "rgb(113, 113, 113)",
              fontFamily: "Inter, sans-serif",
              fontWeight: "bold",
            }}
            className="text-sm"
          >
            About US
          </p>
        </Link>

       

        <Link to={``}>
          <p
            style={{
              color: "rgb(113, 113, 113)",
              fontFamily: "Inter, sans-serif",
              fontWeight: "bold",
            }}
            className="text-sm mt-3"
          >
            Careers
          </p>
        </Link>

        <p
          style={{
            color: "rgb(113, 113, 113)",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
          }}
          className="text-sm mt-10"
        >
          © {new Date().getFullYear()} The SARUS. All Rights Reserved.{" "}
        </p>
      </div>

      <div className="m-[10px]">
        <h3
          className="text-[#e1e1e1] text-md"
          style={{ fontFamily: '"Inter",sans-serif' }}
        >
          View Website in
        </h3>

        <br />

        <Link to={``}>
          <p
            style={{
              color: "rgb(113, 113, 113)",
              fontFamily: "Inter, sans-serif",
              fontWeight: "bold",
            }}
            className="text-sm"
          >
            ✔ &nbsp; English
          </p>
        </Link>
      </div>

      <div className="m-[10px]">
        <h3
          className="text-[#e1e1e1] text-md"
          style={{ fontFamily: '"Inter",sans-serif' }}
        >
          Need help?
        </h3>

        <br />

        <Link to={``}>
          <p
            style={{
              color: "rgb(113, 113, 113)",
              fontFamily: "Inter, sans-serif",
              fontWeight: "bold",
            }}
            className="text-sm"
          >
            Visit Help Center
          </p>
        </Link>

        <Link to={``}>
          <p
            style={{
              color: "rgb(113, 113, 113)",
              fontFamily: "Inter, sans-serif",
              fontWeight: "bold",
            }}
            className="text-sm mt-3"
          >
            Share Feedback
          </p>
        </Link>
      </div>

      <div className="m-[10px]">
        <h3
          className="text-[#e1e1e1] text-md"
          style={{ fontFamily: '"Inter",sans-serif' }}
        >
          Connect With Us
        </h3>
        <br />

        <div className="flex justify-evenly">
          <Link to={`https://twitter.com/thesarus2022`}>
            <svg
              fill="#ffffff"
              width="30px"
              viewBox="0 0 24 24"
              data-name="Line Color"
              xmlns="http://www.w3.org/2000/svg"
              className="icon line-color"
            >
              <path
                d="M18.94 7.91a3.49 3.49 0 00-6.94.26C8.46 9.63 5 6 5 6c-1 6 2 8.75 2 8.75C5.64 16 3 16 3 16s1.58 3 8.58 3S19 11 19 11a3.08 3.08 0 002-3.3 7.9 7.9 0 01-2.06.21z"
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </Link>
          <br />
          <Link to={``}>
            <svg
              width="30px"
              viewBox="-2 -2 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
              className="jam jam-linkedin-circle"
              fill="#ffffff"
            >
              <path d="M15 11.13v3.697h-2.143v-3.45c0-.866-.31-1.457-1.086-1.457-.592 0-.945.398-1.1.784-.056.138-.071.33-.071.522v3.601H8.456s.029-5.842 0-6.447H10.6v.913l-.014.021h.014v-.02c.285-.44.793-1.066 1.932-1.066 1.41 0 2.468.922 2.468 2.902zM6.213 5.271C5.48 5.271 5 5.753 5 6.385c0 .62.466 1.115 1.185 1.115h.014c.748 0 1.213-.496 1.213-1.115-.014-.632-.465-1.114-1.199-1.114zm-1.086 9.556h2.144V8.38H5.127v6.447z" />
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </Link>
          <Link to={``}>
            <svg
              width="30px"
              viewBox="-2 -2 24 24"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin"
              className="jam jam-instagram"
              fill="white"
            >
              <path d="M14.017 0h-8.07A5.954 5.954 0 000 5.948v8.07a5.954 5.954 0 005.948 5.947h8.07a5.954 5.954 0 005.947-5.948v-8.07A5.954 5.954 0 0014.017 0zm3.94 14.017a3.94 3.94 0 01-3.94 3.94h-8.07a3.94 3.94 0 01-3.939-3.94v-8.07a3.94 3.94 0 013.94-3.939h8.07a3.94 3.94 0 013.939 3.94v8.07z" />
              <path d="M9.982 4.819A5.17 5.17 0 004.82 9.982a5.17 5.17 0 005.163 5.164 5.17 5.17 0 005.164-5.164A5.17 5.17 0 009.982 4.82zm0 8.319a3.155 3.155 0 110-6.31 3.155 3.155 0 010 6.31z" />
              <circle cx={15.156} cy={4.858} r={1.237} />
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}
