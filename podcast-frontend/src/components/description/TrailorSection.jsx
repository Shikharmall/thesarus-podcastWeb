import React from 'react'
import ReactPlayer from 'react-player'
import Video from "../../../../../videos/BigBuckBunny.mp4";

export default function TrailorSection() {
  return (
    <ReactPlayer
        url={Video}
        playing={true}
        muted={true}
        controls={false}
        width="100%"
        height="100%"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 2%, #16181f)",
        }}
      />
  )
}
