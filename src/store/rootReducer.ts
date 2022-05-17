import { combineReducers } from "redux";
import { movieReducer } from "./movie/movieReducer";
import { searchReducer } from "./search/searchReducer";

export const rootReducer = combineReducers({
    movie: movieReducer,
    search: searchReducer
});
