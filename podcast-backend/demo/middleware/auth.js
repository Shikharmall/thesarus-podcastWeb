const jwt = require("jsonwebtoken");
const config = require("../config/config");

/* checking whether if user is logout */

const islogout = async (req, res, next) => {
  try {
    const token = req.cookies.userid;

    if (typeof token === "undefined") {
      return res.redirect("login");
    } else {
      const verifyUser = jwt.verify(token, config.jwtSecret);

      if (!verifyUser) {
        return res.redirect("login");
      }
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

/* checking whether if user is logout */

/* checking whether if user is login */

const islogin = async (req, res, next) => {
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
  islogout,
  islogin,
};
