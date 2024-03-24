import React from "react";
import SideNav from "../partials/SideNav";
import Header from "../partials/Header";
import Footer from "../partials/Footer";
import VideoSlider from "../components/videoSlider/VideoSlider";
import PodcastList from "../components/podcastList/podcastList";

export default function Home() {
  return (
    <>
      <div className="bg-[#0f1014] pt-[3%]">
        <SideNav />
        <Header />
        <VideoSlider />
        <PodcastList podcastHeading={`Latest Podcast`}/>
        <PodcastList podcastHeading={`Famous Podcast`}/>
        <PodcastList podcastHeading={`Old Podcast`}/>
        <Footer />
      </div>
    </>
  );
}
