import { combineReducers } from 'redux'
import filmsReducer from './filmsReducer'
import seriesReducer from "./seriesReducer"

export default combineReducers({
    films: filmsReducer,
    series: seriesReducer
})