import { ActionTypes } from "../actionTypes";
import { action } from "typesafe-actions";
import {
    MovieList,
    RateRequest,
    Genre,
    SpokenLanguages,
} from "src/typescript/movieRedux";

export const takeMovieList = () => action(ActionTypes.GET_MOVIES_REQUEST);
export const takeMovieGenere = () => action(ActionTypes.GET_GENRE_REQUEST);
export const takeMovieLanguage = () => action(ActionTypes.GET_LANGUAGE_REQUEST);
export const takeMovieDelete = (payload: number) =>
    action(ActionTypes.DELETE_MOVIE_RATE, payload);

export const takeMovieCast = (payload: number) =>
    action(ActionTypes.GET_MOVIE_CAST, payload);

export const takeMovieRate = (payload: number) =>
    action(ActionTypes.PUT_MOVIE_RATE, payload);

export const takeSimilarMovie = (payload: number) =>
    action(ActionTypes.GET_SIMILAR_MOVIE, payload);

export const takeSingleMovie = (payload: number) =>
    action(ActionTypes.GET_SINGLE_MOVIE, payload);

export const putMovieCast = (payload): any =>
    action(ActionTypes.PUT_MOVIE_CAST, payload);

export const putMovieList = (payload: Array<MovieList>) =>
    action(ActionTypes.PUT_MOVIE_LIST, payload);

export const putMovieGenere = (payload: Array<Genre>) =>
    action(ActionTypes.PUT_MOVIE_GENRE, payload);

export const putMovieLanguage = (payload: Array<SpokenLanguages>) =>
    action(ActionTypes.PUT_MOVIE_LANGUAGE, payload);

export const putSimilarMovie = (payload: Array<MovieList>) =>
    action(ActionTypes.PUT_SIMILAR_MOVIE, payload);

export const putSingleMovie = (payload) =>
    action(ActionTypes.PUT_SINGLE_MOVIE, payload);

export const putMovieRate = (payload: RateRequest) =>
    action(ActionTypes.GET_MOVIE_RATE, payload);

export const changeStatus = (payload: string) =>
    action(ActionTypes.STATUS, payload);

export const putTotalPage = (payload: number) =>
    action(ActionTypes.PUT_TOTAL_PAGES, payload);

export const putCurrentPage = (payload: number) =>
    action(ActionTypes.PUT_CURRENT_PAGE, payload);

export const changePage = (payload: number) =>
    action(ActionTypes.PUT_CURRENT_PAGE, payload);
