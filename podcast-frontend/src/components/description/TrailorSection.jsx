import React, { useState } from "react";
import ReactPlayer from "react-player";
import Video from "../../../../../videos/BigBuckBunny.mp4";
import SeasonDescription from "./SeasonDescription";

export default function TrailorSection() {
  const [showTrailor, setShowTrailor] = useState(false);
  return (
    <div className="relative w-[100vw]">
      {showTrailor ? (
        <></>
      ) : (
        <>
          <ReactPlayer
            url={Video}
            playing={true}
            muted={true}
            controls={false}
            width="100%"
            height="100%"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent 2%, #16181f)",
            }}
          />
        </>
      )}
      <SeasonDescription />
    </div>
  );
}
