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
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/watch" element={<WatchVideo />} />
      <Route path="/podcastdescription" element={<PodcastDescription />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/new" element={<New />} />
      <Route path="/search" element={<Search />} />
      <Route path="/drage" element={<DraggableSliderTabs />} />
      <Route path="/testing" element={<Testing />} />
      <Route path="/user" element={<User />} />
      {/*<Route exact path="/leaderboard" element={<Leaderboard />} />
      <Route exact path="/userdetails" element={<UserDetails />} />
      <Route
        exact
        path="/publicUserdetails/:user_id"
        element={<PublicUserDetails />}
      />
      <Route exact path="/game" element={<Modalpopup />} />
      <Route exact path="/languagegame" element={<LanguageGame />} />
      <Route exact path="/admin/allquestions" element={<AllQuestions />} />
      <Route
        exact
        path="/admin/editquestion/:question_id"
        element={<EditQuestion />}
      />
  <Route exact path="/admin/addquestions" element={<Admin />} />
      <Route path="*" element={<NotFound />} />*/}
    </Routes>
  );
}

export default NavigationDesktop;
