import { GET_SERIES_POPULAR } from "../types";

const initalState = {
  seriesPopular: [],
  loading: true,
};

export default function filmsReducer(state = initalState, action) {
  switch (action.type) {
    case GET_SERIES_POPULAR:
      return {
        ...state,
        seriesPopular: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}
