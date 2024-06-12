const bcrypt = require("bcrypt");
const securePassword = async (password) => {
  try {
    const passwordhash = await bcrypt.hash(password, 10);
    return passwordhash;
  } catch (error) {
    //console.log(error.message);
    return null;
  }
};

const checkPassword = async (password, dbPassword) => {
  try {
    const matchPassword = await bcrypt.compare(password, dbPassword);
    return matchPassword;
  } catch (error) {
    //console.log(error.message);
    return false;
  }
};

module.exports = {
  securePassword,
  checkPassword,
};
