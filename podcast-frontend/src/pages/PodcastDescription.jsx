import React, { useEffect, useState } from "react";
import SideNav from "../partials/SideNav";
import Footer from "../partials/Footer";
import TrailorSection from "../components/description/TrailorSection";
import { useParams } from "react-router-dom";

export default function PodcastDescription() {
  const { podcastId } = useParams();
  const [podcastDetails, setPodcastDetails] = useState({});
  const [podcastSeasons, setPodcastSeasons] = useState([]);

  const getPodcastDetails = async () => {
    //const response = await get
  };

  useEffect(() => {
    if (podcastId) {
      getPodcastDetails();
    }
  }, [podcastId]);

  //console.log(podcastId);

  return (
    <>
      <div className="bg-[#0f1014] overflow-hidden">
        {/* overflow-hidden */}
        <SideNav />
        <TrailorSection />
        <Footer />
      </div>
    </>
  );
}
