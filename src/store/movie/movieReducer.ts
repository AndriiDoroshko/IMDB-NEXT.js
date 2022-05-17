import { HYDRATE } from "next-redux-wrapper";
import { ActionTypes } from "../actionTypes";
import { InitialState } from "src/typescript/movieRedux";

const initialState: InitialState = {
    status: "",
    totalPage: 0,
    currentPage: 1,
    movie: {},
    cast: {},
    similarMovie: [],
    rate: {},
    movieList: [],
    movieGenere: {},
    language: [],
};

export const movieReducer = (
    state: Object = initialState,
    action: any
): Object => {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload.movie };
        }
        case ActionTypes.STATUS:
            return {
                ...state,
                status: action.payload,
            };
        case ActionTypes.PUT_MOVIE_LIST:
            return {
                ...state,
                movieList: action.payload.results,
            };
        case ActionTypes.PUT_MOVIE_GENRE:
            return {
                ...state,
                movieGenere: action.payload,
            };
        case ActionTypes.PUT_TOTAL_PAGES:
            return {
                ...state,
                totalPage: action.payload.total_pages,
            };
        case ActionTypes.PUT_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload,
            };
        case ActionTypes.PUT_SINGLE_MOVIE:
            return {
                ...state,
                movie: action.payload,
            };
        case ActionTypes.PUT_SIMILAR_MOVIE:
            return {
                ...state,
                similarMovie: action.payload.results,
            };
        case ActionTypes.PUT_MOVIE_CAST:
            return {
                ...state,
                cast: action.payload,
            };
        case ActionTypes.PUT_MOVIE_LANGUAGE:
            return {
                ...state,
                language: action.payload,
            };
        case ActionTypes.GET_MOVIE_RATE:
            return {
                ...state,
                rate: action.payload,
            };
        default:
            return state;
    }
};
