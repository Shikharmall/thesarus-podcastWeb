const getTokenFromCookie = (req) => {
  const token = req.cookies?.access_token;
  if (!token) {
    return null;
  }

  return token;
};

module.exports = getTokenFromCookie;
