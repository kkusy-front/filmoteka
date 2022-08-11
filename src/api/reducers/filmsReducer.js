import { GET_TOP_RATED, GET_DISCOVER } from "../types";

const initalState = {
  filmsTopRated: [],
  filmsDiscover: [],
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
    default:
      return state;
  }
}
