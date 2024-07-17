import React, { useState, useEffect } from "react";
import "../../css/CustomScrollbarPodcastList.css";
import PodcastImage from "./PodcastImage";

export default function PodcastSlider({ podcastSeasons }) {
  return (
    <div className="flex">
      {/* overflow-x-scroll" id="custom-scrollbar" */}
      {podcastSeasons &&
        podcastSeasons.map((podcastSeason, index) => (
          <PodcastImage podcastSeason={podcastSeason} index={index} />
        ))}
      {/*<PodcastImage />
      <PodcastImage />
      <PodcastImage />
      <PodcastImage />
      <PodcastImage />*/}
    </div>
  );
}
