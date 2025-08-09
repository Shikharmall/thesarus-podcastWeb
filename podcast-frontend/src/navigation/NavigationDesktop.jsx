import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import WatchVideo from "../pages/WatchVideo";
import PodcastDescription from "../pages/PodcastDescription";
import Downloads from "../pages/Downloads";
import New from "../pages/New";
import Search from "../pages/Search";
import DraggableSliderTabs from "../pages/DraggableSliderTabs";
import Testing from "../pages/Testing";
import User from "../pages/User";
import CreatePodcast from "../pages/CreatePodcast";
import VerifyMail from "../pages/VerifyMail";

function NavigationDesktop() {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/verifymail/:userId" element={<VerifyMail />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/watch/:podcastId" element={<WatchVideo />} />
      <Route
        path="/podcastdescription/:podcastId"
        element={<PodcastDescription />}
      />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/new" element={<New />} />
      <Route path="/search" element={<Search />} />
      <Route path="/drage" element={<DraggableSliderTabs />} />
      <Route path="/testing" element={<Testing />} />
      <Route path="/user" element={<User />} />
      <Route path="/createPodcast" element={<CreatePodcast />} />
      {/*<Route path="*" element={<NotFound />} />*/}
    </Routes>
  );
}

export default NavigationDesktop;
