import React, { useState, useRef, useEffect } from "react";
import Img from "../images/avatarposter1.png";
//import Video1 from "C:/Usezrs/Lenovo/Downloads/BigBuckBunny.mp4";
import Video1 from "../../../../videos/BigBuckBunny.mp4";
import Video2 from "../../../../videos/avatar2.mp4";
//import { VideoSeekSlider } from "react-video-seek-slider";

//import { TweenMax, Power3 } from "gsap/gsap-core";
//import { TweenMax, Power3 } from "gsap";

import "../css/CustomScrollbar.css";

//import gsap from "gsap";

import gsap from "gsap";

import ReactPlayer from "react-player";
import TopOptions from "../components/videoComponent/TopOptions";
import BottomOptions from "../components/videoComponent/BottomOptions";
import AllSeasonEpisodesList from "../components/videoComponent/AllSeasonEpisodesList";

export default function WatchVideo() {
  let container = useRef(null);
  let optionsUpper = useRef(null);
  let optionsBottom = useRef(null);

  const ref = useRef(null);

  //const [progress, setProgress] = useState(null);
  const [mute, setMute] = useState(false);

  /*const format = (seconds) => {
    let mins = parseInt(seconds / 60)
      .toString()
      .padStart(2, "0");
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };*/

  const [clicked, setClicked] = useState(false);
  const [paused, setPaused] = useState(false);
  const [volume, setVolume] = useState(50);
  const [controls, setControls] = useState(false);

  const handleMouseOver = () => {
    setControls(true);
  };

  const handleMouseOut = () => {
    //setTimeout(() => {
    //  setControls(false);
    //}, 5000);
    setControls(false);
  };

  //const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
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

  useEffect(() => {
    const boxUpper = optionsUpper.current;
    console.log(boxUpper);
    const tlUpper = gsap.timeline({ paused: true });
    tlUpper.from(boxUpper, {
      duration: 0.4,
      y: -100,
      opacity: 0,
      ease: "power4.out",
    });

    const boxBottom = optionsBottom.current;
    console.log(boxBottom);

    const tlBottom = gsap.timeline({ paused: true });
    tlBottom.from(boxBottom, {
      duration: 0.4,
      y: 100,
      opacity: 0,
      ease: "power4.out",
    });

    if (controls) {
      tlUpper.play();
      tlBottom.play();
    } else {
      tlUpper.reverse();
      tlBottom.reverse();
    }

    // Return a cleanup function to ensure animation is destroyed when component unmounts
    return () => {
      tlUpper.kill(); // Kill the animation to prevent memory leaks
      tlBottom.kill(); // Kill the animation to prevent memory leaks
      //tl.to(box, { duration: 1, x: -100, opacity: 0, ease: 'power4.in' });
    };
  }, [controls]);

  const videoRef = useRef(null);

  const toggleFullScreen = () => {
    const videoElement = ref.current;
    console.log(videoElement);

    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        /* Firefox */
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) {
        /* Chrome, Safari & Opera */
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) {
        /* IE/Edge */
        videoElement.msRequestFullscreen();
      }
    }
  };

  const handleContextMenu = (event) => {
    event.preventDefault(); // Prevent the default right-click context menu
  };

  const setPauseFunc = () => {
    setPaused(true);
  };

  const setPlayFunc = () => {
    setPaused(false);
  };

  const setMuteFunc = () => {
    setMute(true);
  };

  const setUnMuteFunc = () => {
    setMute(false);
  };

  const toggleClick = () => {
    setClicked(!clicked);
  };

  const changeVolume = (val) => {
    setVolume(val);
  };

  return (
    <div className="w-screen h-screen bg-black relative overflow-hidden">
      <ReactPlayer
        onContextMenu={handleContextMenu}
        url={Video1}
        playing={!paused}
        muted={mute}
        //controls={true}
        width={`100%`}
        height={`100%`}
        volume={volume / 100}
        ref={ref}
        //onProgress={(x) => {
        //  //console.log(x);
        //  setProgress(x);
        //}}
        //onMouseEnter={() => {
        //  setControls(true);
        //}}
        //onMouseLeave={() => {
        //  setTimeout(() => {
        //    setControls(false);
        //  }, 10000);
        //}}
        //onMouseOver={handleMouseOver}
        //onMouseOut={handleMouseOut}
        //pip
      />

      <div
        className="absolute top-0 left-0 w-[100vw] h-[100vh] flex"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        //onClick={() => {
        //  setPaused(!paused);
        //}}
        //onMouseOut={() => {
        //  setTimeout(() => {
        //    handleMouseOut();
        //  }, 5000);
        //}}
      >
        <div
          className="h-[100vh] w-1/3" //bg-red-500
        ></div>
        <div
          className="h-[100vh] w-1/3" //bg-green-500
          onClick={() => {
            setPaused(!paused);
          }}
        ></div>
        <div
          className="h-[100vh] w-1/3" //bg-blue-500
        ></div>
      </div>

      {clicked && (
        <AllSeasonEpisodesList
          container={container}
          setPlayFunc={setPlayFunc}
          toggleClick={toggleClick}
        />
      )}

      {controls ? (
        <>
          <TopOptions
            optionsUpper={optionsUpper}
            handleMouseOut={handleMouseOut}
            handleMouseOver={handleMouseOver}
          />

          <BottomOptions
            optionsBottom={optionsBottom}
            handleMouseOut={handleMouseOut}
            handleMouseOver={handleMouseOver}
            volume={volume}
            changeVolume={changeVolume}
            toggleClick={toggleClick}
            paused={paused}
            setPauseFunc={setPauseFunc}
            setPlayFunc={setPlayFunc}
            mute={mute}
            setMuteFunc={setMuteFunc}
            setUnMuteFunc={setUnMuteFunc}
            toggleFullScreen={toggleFullScreen}
          />
        </>
      ) : null}
    </div>
  );
}
