import React from "react";
import ReactPlayer from "react-player";

export default function VideoSliderItem({ videoURL, isMute }) {
  return (
    <ReactPlayer
      url={videoURL}
      playing={true}
      muted={isMute}
      controls={false}
      width="100%"
      height="100%"
      //className="object-cover"
      style={{
        WebkitMaskImage: "linear-gradient(to right, transparent 2%, #16181f)",
      }}
    />
  );
}
