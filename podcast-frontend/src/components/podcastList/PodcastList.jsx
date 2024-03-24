import React from "react";
import PodcastImage from "./podcastImage";
import PodcastSlider from "./PodcastSlider";

export default function PodcastList() {
  return (
    <div className="ml-[10%]">
      <h2 className="text-[#e1e6f0] font-roboto text-lg font-bold">
        Latest Podcast
      </h2>
      <PodcastSlider />
    </div>
  );
}
