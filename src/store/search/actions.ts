import { ActionTypes } from "../actionTypes";
import { action } from "typesafe-actions";
import { putMovieList, putTotalPage } from "../movie/actions";

export const takeMovieName = () => action(ActionTypes.GET_MOVIE_NAME);
export const takeMovieDiscover = () => action(ActionTypes.GET_MOVIE_DISCOVER);

export const takeMovieListByGenre = (payload: number) =>
    action(ActionTypes.GET_MOVIE_GENRE, payload);

export const putSpinerStatus = (payload: boolean) =>
    action(ActionTypes.SPINER_STATUS, payload);

export const putMovieName = (payload: string) =>
    action(ActionTypes.PUT_MOVIE_NAME, payload);

export const putSearchDate = (payload: string) =>
    action(ActionTypes.PUT_SEARCH_DATE, payload);

export const putSearchGenre = (payload: string) =>
    action(ActionTypes.PUT_SEARCH_GENRE, payload);

export const putSearchLanguage = (payload: string) =>
    action(ActionTypes.PUT_SEARCH_LANGUAGE, payload);

export const putSearchAdult = (payload: string) =>
    action(ActionTypes.PUT_SEARCH_ADULT, payload);

export { putMovieList, putTotalPage };
