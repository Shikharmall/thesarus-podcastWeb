import axios from "axios";
import { API_URL_BASE } from "../../utils/apiURL";

/*--------------------api for user login-----------------------*/

export const userLoginAPI = async (data) => {
  try {
    const result = await axios.post(
      `${API_URL_BASE}/web/user/loginUser`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          mode: "no-cors",
        },
        withCredentials: true,
      }
    );

    return result;
  } catch (error) {
    return error;
  }
};

/*--------------------api for user logout-----------------------*/

export const userLogoutAPI = async () => {
  try {
    const result = await axios.post(`${API_URL_BASE}/web/user/logout`, {
      headers: {
        "Content-Type": "application/json",
        //mode: "no-cors",
      },
      withCredentials: true,
    });

    return result;
  } catch (error) {
    console.log(error);
    return error;
  }
};

/*--------------------api for user register-----------------------*/

export const userRegisterAPI = async (data) => {
  try {
    const result = await axios.post(`${API_URL_BASE}/web/user/registerUser`, data, {
      headers: {
        "Content-Type": "application/json",
        mode: "no-cors",
      },
      withCredentials: true,
    });
    return result;
  } catch (error) {
    return error;
  }
};


/*
// API for getting user details

export const getUserDetailsAPI = async (user_id) => {
  try {
    let result = await axios(
      `${API_URL_BASE}/getUserDetails?user_id=${user_id}`,
      {
        method: "GET",
        withCredentials: true,
      }
    );
    return result;
  } catch (error) {
    return error;
  }
};

// API for getting all users details

export const getAllUsersDetailsAPI = async () => {
  try {
    let result = await axios(`${API_URL_BASE}/getAllUserDetails`, {
      method: "GET",
      withCredentials: true,
    });
    return result;
  } catch (error) {
    return error;
  }
};

// API for getting all users details by language

export const getAllUserDetailsByLanguageAPI = async (language) => {
  try {
    let result = await axios(
      `${API_URL_BASE}/getAllUserDetailsByLanguage?language=${language}`,
      {
        method: "GET",
        withCredentials: true,
      }
    );
    return result;
  } catch (error) {
    return error;
  }
};*/
