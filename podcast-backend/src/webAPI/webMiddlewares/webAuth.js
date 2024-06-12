const jwt = require("jsonwebtoken");
const config = require("../../config/jsonConfig");
const getTokenFromCookie = require("../../utils/getTokenFromCookie");
const { verifyToken } = require("../../utils/jwtTokenManagement");

/*------------------------islogin and isVerified----------------------*/

const isLogin = async (req, res, next) => {
  try {
    const token = getTokenFromCookie(req);

    const decodedUser = verifyToken(token);

    if (!decodedUser) {
      return res.status(401).json({
        status: "failed",
        message: "Invalid/Expired Token, Please Login Again",
      });
    }

    const userData = await User.findById({ _id: decodedUser.id });

    if (!userData) {
      return res.status(401).json({
        status: "failed",
        message: "User does not exist, Please Login Again",
      });
    }

    if (!userData.isVerified) {
      return res.status(403).json({
        status: "failed",
        message: "Access denied. User is not verified.",
      });
    }

    next();
  } catch (error) {
    //console.log(error);
    return res.status(401).json({
      status: "failed",
      message: error.messaage,
    });
  }
};

/*------------------------islogout----------------------*/

const isLogout = async (req, res, next) => {
  try {
    const token = getTokenFromCookie(req);

    const decodedUser = verifyToken(token);

    //if (decodedUser) {
    //  return res.status(401).json({ error: "user is logged in" });
    //}

    const userData = await User.findById({ _id: decodedUser.id });

    if (userData) {
      return res.status(403).json({ error: "user is logged in" });
    }
    next();
  } catch (error) {
    //console.log(error);
    return res.status(401).json({
      status: "failed",
      message: error.messaage,
    });
  }
};

module.exports = {
  isLogout,
  isLogin,
};
