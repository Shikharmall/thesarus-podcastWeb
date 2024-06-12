const jwt = require("jsonwebtoken");
const config = require("../config/jsonConfig");

const generateToken = async (userId) => {
  try {
    const token = jwt.sign({ userId }, config.jwtSecret);
    return token;
  } catch (error) {
    console.log(error);
  }
};
const verifyToken = async (token) => {
  return jwt.verify(token, config.jwtSecret, (err, decoded) => {
    if (err) {
      return false;
    } else {
      return decoded;
    }
  });
};

module.exports = {
  generateToken,
  verifyToken,
};
