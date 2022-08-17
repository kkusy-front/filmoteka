import { GET_TOP_RATED, GET_DISCOVER, GET_SEARCH_LIST, GET_BY_ID } from "../types";

const initalState = {
  filmsTopRated: [],
  filmsDiscover: [],
  searchList: [],
  filmByID: [],
  loading: true,
};

export default function filmsReducer(state = initalState, action) {
  switch (action.type) {
    case GET_TOP_RATED:
      return {
        ...state,
        filmsTopRated: action.payload,
        loading: false,
      };
    case GET_DISCOVER:
      return {
        ...state,
        filmsDiscover: action.payload,
        loading: false,
      };
    case GET_SEARCH_LIST:
      return {
        ...state,
        searchList: action.payload,
        loading: false,
      };
      case GET_BY_ID:
      return {
        ...state,
        filmByID: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
