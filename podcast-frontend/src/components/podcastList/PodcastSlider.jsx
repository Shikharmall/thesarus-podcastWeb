import React, { useState ,useEffect} from "react";
import PodcastImage from "./podcastImage";
import "../../css/CustomScrollbarPodcastList.css";

export default function PodcastSlider() {
  
  return (
    <div className="flex">
      {" "}
      {/* overflow-x-scroll" id="custom-scrollbar" */}
      <PodcastImage />
      <PodcastImage />
      <PodcastImage />
      <PodcastImage />
      <PodcastImage />
      <PodcastImage />
    </div>
  );
}
