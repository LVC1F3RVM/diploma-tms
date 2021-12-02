import axios from "axios";

export const getShow = async (id) => {
  try {
    const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getShows = async (page) => {
  try {
    const response = await axios.get(`https://api.tvmaze.com/shows`, {
      params: { page },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
