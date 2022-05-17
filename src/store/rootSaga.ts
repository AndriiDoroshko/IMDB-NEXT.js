import { all, takeLatest, takeEvery } from "redux-saga/effects";
import { ActionTypes } from "./actionTypes";
import {
    getGenreRequest,
    setSingleMovie,
    getCurrentPage,
    getSimilarMovie,
    setRateMovie,
    getMovieCast,
    getLanguageRequest,
    deleteMovieRate,
} from "./movie/sagas";
import {
    searchMovieListRequest,
    searchMovieListByGenreRequest,
    filterMovieRequest,
} from "./search/sagas";

function* rootSaga() {
    yield all([
        takeEvery(ActionTypes.GET_MOVIES_REQUEST, getCurrentPage),
        takeEvery(ActionTypes.GET_GENRE_REQUEST, getGenreRequest),
        takeEvery(ActionTypes.GET_SINGLE_MOVIE, setSingleMovie),
        takeLatest(ActionTypes.GET_MOVIE_NAME, searchMovieListRequest),
        takeEvery(ActionTypes.GET_SIMILAR_MOVIE, getSimilarMovie),
        takeEvery(ActionTypes.PUT_MOVIE_RATE, setRateMovie),
        takeEvery(ActionTypes.GET_MOVIE_GENRE, searchMovieListByGenreRequest),
        takeEvery(ActionTypes.GET_LANGUAGE_REQUEST, getLanguageRequest),
        takeEvery(ActionTypes.GET_MOVIE_CAST, getMovieCast),
        takeEvery(ActionTypes.DELETE_MOVIE_RATE, deleteMovieRate),
        takeLatest(ActionTypes.GET_MOVIE_DISCOVER, filterMovieRequest),
    ]);
}
export default rootSaga;
