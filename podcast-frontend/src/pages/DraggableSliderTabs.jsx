import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../images/logo2.png";
import imgLogo1 from "../images/mainLogo1.png";

const DraggableSliderTabs = () => {
  const [isDragging, setIsDragging] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

  const tabNames = [
    "Coding",
    "JavaScript",
    "Podcasts",
    "Databases",
    "Web Development",
    "Coding",
    "JavaScript",
    "Podcasts",
    "Databases",
    "Web Development",
    "Coding",
    "JavaScript",
    "Podcasts",
    "Databases",
    "Web Development",
    "Coding",
    "JavaScript",
    "Podcasts",
    "Databases",
    "Web Development",
    "Coding",
    "JavaScript",
    "Podcasts",
    "Databases",
    "Web Development",
    "Coding",
    "JavaScript",
    "Podcasts",
    "Databases",
    "Web Development",
    "Coding",
    "JavaScript",
    "Podcasts",
    "Databases",
    "Web Development",
    "Coding",
    "JavaScript",
    "Podcasts",
    "Databases",
    "Web Development",
    "Coding",
    "JavaScript",
    "Podcasts",
    "Databases",
    "Web Development",
    "Coding",
    "JavaScript",
    "Podcasts",
    "Databases",
    "Web Development",
    "Coding",
    "JavaScript",
    "Podcasts",
    "Databases",
    "Web Development",
    "Coding",
    "JavaScript",
    "Podcasts",
    "Databases",
    "Web Development",
  ];

  useEffect(() => {
    const tabsBox = document.querySelector(".tabs-box");
    const allTabs = tabsBox.querySelectorAll(".tab");
    const arrowIcons = document.querySelectorAll(".icon svg");

    const handleIcons = (scrollVal) => {
      let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
      arrowIcons[0].parentElement.style.display =
        scrollVal <= 0 ? "none" : "flex";
      arrowIcons[1].parentElement.style.display =
        maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
    };

    arrowIcons.forEach((icon) => {
      icon.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        let scrollWidth = (tabsBox.scrollLeft +=
          icon.id === "left" ? -340 : 340);
        handleIcons(scrollWidth);
      });
    });

    allTabs.forEach((tab, index) => {
      tab.addEventListener("click", () => {
        setActiveTab(index);
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
      });
    });

    const dragging = (e) => {
      if (!isDragging) return;
      tabsBox.classList.add("dragging");
      tabsBox.scrollLeft -= e.movementX;
      handleIcons(tabsBox.scrollLeft);
    };

    const dragStop = () => {
      setIsDragging(false);
      tabsBox.classList.remove("dragging");
    };

    tabsBox.addEventListener("mousedown", () => setIsDragging(true));
    tabsBox.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);

    return () => {
      // Clean up event listeners on component unmount
      arrowIcons.forEach((icon) => {
        icon.removeEventListener("click", () => {});
      });
      allTabs.forEach((tab) => {
        tab.removeEventListener("click", () => {});
      });
      tabsBox.removeEventListener("mousedown", () => {});
      tabsBox.removeEventListener("mousemove", dragging);
      document.removeEventListener("mouseup", dragStop);
    };
  }, [isDragging]);

  return (
    <div className="wrapper p-8 relative overflow-x-hidden bg-[#0f1014] rounded-lg">
      <div
        className="icon absolute top-0 flex items-center h-full bg-[#363840] bg-opacity-25"
        style={{
          left: 0,
          display: "none",
          //WebkitMaskImage: "linear-gradient(to right, transparent 2%, #0f1014)",
        }}
      >
        {/* Left Icon */}

        <svg
          id="left"
          width="25px"
          height="25px"
          className="fa-solid fa-angle-left w-14 h-14 cursor-pointer text-2xl text-gray-700 bg-gray-200 rounded-full flex items-center justify-center"
          viewBox="0 0 1024 1024"
          fill="#000000"
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
            fill="#fff"
          />
        </svg>
      </div>

      <ul className="tabs-box flex overflow-x-hidden">
        {/* Render all tabs dynamically */}
        {tabNames.map((_, index) => (
          <>
            {/*<li
            key={index}
            className={`tab cursor-pointer text-lg whitespace-nowrap py-3 px-5 rounded-full border border-gray-300 ${
              activeTab === index && "active"
            }`}
          >
            {tabName}
          </li>*/}
            <Link
              key={index}
              //to={`podcastdescription`}
              className="bg-gray-500 w-[172px] h-[229px] m-1 rounded relative min-w-[172px]"
              //onMouseOver={() => {
              //  setIsHover(true);
              //}}
              //onMouseOut={() => {
              //  setIsHover(false);
              //}}
            >
              <div className="w-[172px] h-[229px] absolute top-0 left-0"></div>
              <img src={img1} alt="poster-image" className="rounded" />
              {/*{false ? (
                <div className="absolute top-0 left-0 w-[336px] h-[385px] bg-[#1f2026] z-10 overflow-hidden rounded">
                  <img
                    src={imgLogo1}
                    alt="poster-image"
                    style={{
                      WebkitMaskImage:
                        "linear-gradient(to top, transparent 0.1%, #16181f)",
                    }}
                  />
                  <div className="w-90 m-3 mt-0 mb-1 bg-[#e1e6f0] py-2 px-1 rounded-md flex justify-center items-center">
                    <svg
                      fill="#000000"
                      xmlns="http://www.w3.org/2000/svg"
                      width="15px"
                      height="15px"
                      className="mr-2"
                      viewBox="0 0 52 52"
                      enable-background="new 0 0 52 52"
                      xml:space="preserve"
                    >
                      <path d="M8,43.7V8.3c0-1,1.3-1.7,2.2-0.9l33.2,17.3c0.8,0.6,0.8,1.9,0,2.5L10.2,44.7C9.3,45.4,8,44.8,8,43.7z" />
                    </svg>
                    <p className="font-semibold">Watch Now</p>
                  </div>
                  <div className="flex justify-center text-gray-200 font-bold">
                    <p>2024 · 1 Season · 7 Languages</p>
                  </div>
                  <div className="m-2">
                    <p className="font-roboto text-gray-500">
                      NEW EPISODE EVERY THURSDAY. When pirates hijack a ship off
                      the coast of Somalia, a high-stakes game is played with
                      innocent lives and a precious piece of cargo aboard.
                    </p>
                  </div>
                </div>
              ) : null}*/}
            </Link>
          </>
        ))}
      </ul>

      <div
        className="icon absolute top-0 h-full flex items-center bg-red-500"
        style={{
          right: 0,
          justifyContent: "flex-end",
          //WebkitMaskImage: "linear-gradient(to right, transparent 2%, #0f1014)",
        }}
      >
        {/* Right Icon */}
        <svg
          id="right"
          width="25px"
          height="25px"
          className="fa-solid fa-angle-right w-14 h-14 cursor-pointer text-2xl text-gray-700 bg-gray-200 rounded-full flex items-center justify-center"
          viewBox="0 0 1024 1024"
          fill="#000000"
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="rotate(180 512 512)"
            d="M669.6 849.6c8.8 8 22.4 7.2 30.4-1.6s7.2-22.4-1.6-30.4l-309.6-280c-8-7.2-8-17.6 0-24.8l309.6-270.4c8.8-8 9.6-21.6 2.4-30.4-8-8.8-21.6-9.6-30.4-2.4L360.8 480.8c-27.2 24-28 64-0.8 88.8l309.6 280z"
            fill="#fff"
          />
        </svg>
      </div>
    </div>
  );
};

export default DraggableSliderTabs;
