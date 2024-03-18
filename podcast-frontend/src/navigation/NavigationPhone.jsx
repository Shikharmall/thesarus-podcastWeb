import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";

function NavigationPhone() {
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

export default NavigationPhone;
