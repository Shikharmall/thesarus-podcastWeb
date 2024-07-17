import React, { useEffect, useState } from "react";
import PodcastSlider from "./PodcastSlider";
import { getPodcastSeasonsAPI } from "../../api/podcastAPI/podcastAPI";

export default function PodcastList({ podcastHeading }) {
  const [podcastSeasons, setPodcastSeasons] = useState([]);

  const getPodcastSeasonsFunc = async () => {
    const response = await getPodcastSeasonsAPI({
      search: "",
      limit: 10,
      skip: 0,
      project: {
        description: 1,
        frontImage: 1,
        coverImage: 1,
        podcast: {
          podcastName: 1,
          description: 1,
        },
      },
    });

    if (response) {
      setPodcastSeasons(response?.data?.data);
    }
  };

  useEffect(() => {
    getPodcastSeasonsFunc();
  }, []);

  //console.log(podcastSeasons);

  return (
    <div className="ml-[10%] my-6">
      <h2 className="text-[#e1e6f0] font-roboto text-lg font-bold">
        {podcastHeading}
      </h2>
      <PodcastSlider podcastSeasons={podcastSeasons} />
    </div>
  );
}
