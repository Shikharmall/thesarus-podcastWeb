const generateToken = async (user_id) => {
  try {
    const token = jwt.sign({ user_id }, config.jwtSecret);
    return token;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  generateToken
}
