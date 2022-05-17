import { HYDRATE } from "next-redux-wrapper";
import { ActionTypes } from "../actionTypes";
import { InitialState } from "src/typescript/searchRedux";

const initialState: InitialState = {
    spiner: false,
    movieName: "",
    date: "",
    genre: "",
    language: "en-US",
    adult: "",
};

export const searchReducer = (
    state: Object = initialState,
    action: any
): Object => {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload.search };
        }
        case ActionTypes.PUT_MOVIE_NAME:
            return { ...state, movieName: action.payload };
        case ActionTypes.SPINER_STATUS:
            return { ...state, spiner: action.payload };
        case ActionTypes.PUT_SEARCH_DATE:
            return { ...state, date: action.payload };
        case ActionTypes.PUT_SEARCH_GENRE:
            return { ...state, genre: action.payload };
        case ActionTypes.PUT_SEARCH_LANGUAGE:
            return { ...state, language: action.payload };
        case ActionTypes.PUT_SEARCH_ADULT:
            return { ...state, adult: action.payload };
        default:
            return state;
    }
};
