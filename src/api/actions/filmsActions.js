import {
  GET_TOP_RATED,
  GET_TOP_RATED_ERROR,
  GET_DISCOVER,
  GET_DISCOVER_ERROR,
  GET_SEARCH_LIST,
  GET_SEARCH_LIST_ERROR,
  GET_BY_ID,
  GET_BY_ID_ERROR,
  GET_ALL_FILM,
  GET_ALL_FILM_ERROR
} from "../types";
import axios from "axios";
import _debounce from 'lodash/debounce';


const api = "";
const api_key = "";

export const getTopRated = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${api}/movie/top_rated?api_key=${api_key}&language=pl-PL`
    );
    dispatch({
      type: GET_TOP_RATED,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_TOP_RATED_ERROR,
      payload: console.log(e),
    });
  }
};

export const getDiscover = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `${api}/discover/movie?api_key=${api_key}&language=pl-PL`
    );
    dispatch({
      type: GET_DISCOVER,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_DISCOVER_ERROR,
      payload: console.log(e),
    });
  }
};

export const getSearch = (search) => _debounce(async (dispatch) => {
  try {
    const res = await axios.get(
      `${api}/search/movie?query=${search}&api_key=${api_key}&language=pl-PL`
    );
    dispatch({
      type: GET_SEARCH_LIST,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_SEARCH_LIST_ERROR,
      payload: console.log(e),
    });
  }
}, 1000);

export const getByID = (id) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${api}/movie/${id}?api_key=${api_key}&language=pl-PL`
    );
    dispatch({
      type: GET_BY_ID,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_BY_ID_ERROR,
      payload: console.log(e),
    });
  }
};


export const getAllFilms = (page) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${api}/movie/now_playing?api_key=${api_key}&page=${page}&language=pl-PL`
    );
    dispatch({
      type: GET_ALL_FILM,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: GET_ALL_FILM_ERROR,
      payload: console.log(e),
    });
  }
};
