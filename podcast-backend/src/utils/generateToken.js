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

module.exports = {
  generateToken,
};
