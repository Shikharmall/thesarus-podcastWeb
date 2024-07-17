import axios from "axios";
import { API_URL_BASE } from "../../utils/apiURL";

export const getPodcastSeasonsAPI = async (data) => {
  try {
    let result = await axios.post(
      `${API_URL_BASE}/web/season/getSeasons`,
      data
    );
    return result;
  } catch (error) {
    return error;
  }
};
