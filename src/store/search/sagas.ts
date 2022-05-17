import { call, delay, put, select } from "redux-saga/effects";
import { putMovieList, putTotalPage, putSpinerStatus } from "./actions";
import {
    selectNameFromReducer,
    selectDateFromReducer,
    selectGenreFromReducer,
    selectLanguageFromReducer,
    selectAdultFromReducer,
} from "./selectors";
import { getCorrentPage } from "src/store/movie/selectors";
import * as url from "src/url.json";
import { getDataFromApi } from "src/fetch/";

export function* searchMovieListRequest(): Object {
    const name = yield select(selectNameFromReducer);
    const language = yield select(selectLanguageFromReducer);
    const date = yield select(selectDateFromReducer);
    const currentPage = yield select(getCorrentPage);
    const req = {
        language: language,
        year: date,
        query: name,
        page: currentPage,
    };
    try {
        const movies = yield call(getDataFromApi, url.search, {
            ...req,
        });
        yield put(putMovieList(movies));
        yield put(putTotalPage(movies));
    } catch (err) {
        throw err;
    }
}

export function* searchMovieListByGenreRequest(data): Object {
    try {
        const movies = yield call(getDataFromApi, url.discover, {
            with_genres: data.payload,
        });
        yield put(putMovieList(movies));
    } catch (err) {
        throw err;
    }
}
export function* filterMovieRequest(): Object {
    yield put(putSpinerStatus(true));
    const date = yield select(selectDateFromReducer);
    const genre = yield select(selectGenreFromReducer);
    const language = yield select(selectLanguageFromReducer);
    const adult = yield select(selectAdultFromReducer);
    const page = yield select(getCorrentPage);
    const movies = yield call(getDataFromApi, url.discover, {
        with_genres: genre,
        primary_release_year: date,
        language: language,
        include_adult: adult,
        page: page,
    });
    yield put(putMovieList(movies));
    yield delay(1000);
    yield put(putTotalPage(movies));
    yield put(putSpinerStatus(false));
}
