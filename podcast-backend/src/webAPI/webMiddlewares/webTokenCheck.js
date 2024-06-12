const jwt = require("jsonwebtoken");
const config = require("../../config/jsonConfig");
const getTokenFromCookie = require("../../utils/getTokenFromCookie");

const isLogin = async (req, res, next) => {
  try {
    //if (typeof token === "undefined") {
    //  return res.redirect("login");
    //} else {
    //  const verifyUser = jwt.verify(token, config.jwtSecret);
    //
    //  if (!verifyUser) {
    //    return res.redirect("login");
    //  }
    //}

    const token = getTokenFromCookie(req);
    if (!token) {
      return res.status(401).json({
        status: "failed",
        messaage: "no token found",
      });
    }

    const verifyUser = jwt.verify(token, config.jwtSecret);

    
    next();
  } catch (error) {
    //console.log(error);
    return res.status(401).json({
      status: "failed",
      messaage: error.messaage,
    });
  }
};

const isLogout = async (req, res, next) => {
  try {
    const token = req.cookies.userid;

    if (typeof token !== "undefined") {
      const verifyUser = jwt.verify(token, config.jwtSecret);

      if (verifyUser) {
        return res.redirect("/");
      }
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

/* checking whether if user is login */

module.exports = {
  isLogout,
  isLogin,
};
