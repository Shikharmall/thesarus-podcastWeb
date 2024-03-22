import React from 'react'
import SideNav from '../partials/SideNav'
import Footer from '../partials/Footer'
import VideoSlider from '../components/VideoSlider'
import TrailorSection from '../components/description/TrailorSection'

export default function PodcastDescription() {
  return (
    <>
    <div className="bg-[#0f1014]">
        <SideNav />
        <TrailorSection />
        <Footer />
      </div>
    </>
  )
}
