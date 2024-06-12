const securePassword = async (password) => {
  try {
    const passwordhash = bcrypt.hash(password, 10);
    return passwordhash;
  } catch (error) {
    console.log(error.message);
    return "N/A";
  }
};


module.exports = {
  securePassword
}