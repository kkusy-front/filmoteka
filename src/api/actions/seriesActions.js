import { GET_SERIES_POPULAR, GET_SERIES_POPULAR_ERROR } from "../types";
import axios from "axios";

const api = "https://api.themoviedb.org/3";
const api_key = "";

export const getPopular = () => async (dispatch) => {
  try {
    const res = await axios.get(`${api}/tv/popular?api_key=${api_key}&language=pl-PL`);
    dispatch({
      type: GET_SERIES_POPULAR,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_SERIES_POPULAR_ERROR,
      payload: console.log(e),
    });
  }
};
