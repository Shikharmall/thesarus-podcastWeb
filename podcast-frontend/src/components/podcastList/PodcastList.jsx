import React from "react";
import PodcastSlider from "./PodcastSlider";

export default function PodcastList({podcastHeading}) {
  return (
    <div className="ml-[10%] my-6">
      <h2 className="text-[#e1e6f0] font-roboto text-lg font-bold">
        {podcastHeading}
      </h2>
      <PodcastSlider />
    </div>
  );
}
