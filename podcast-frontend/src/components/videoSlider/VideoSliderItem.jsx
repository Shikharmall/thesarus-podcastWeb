import React from "react";
import ReactPlayer from "react-player";

export default function VideoSliderItem({videoURL,isMute}) {
  return (
    <div className="">
      <ReactPlayer
        url={videoURL}
        playing={true}
        muted={isMute}
        controls={false}
        width="100%"
        height="auto"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 2%, #16181f)",
        }}
      />
    </div>
  );
}
