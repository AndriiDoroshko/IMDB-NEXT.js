import { call, put, select, delay } from "redux-saga/effects";
import {
    putMovieList,
    putMovieGenere,
    putTotalPage,
    putSingleMovie,
    putSimilarMovie,
    putMovieRate,
    putMovieCast,
    putMovieLanguage,
} from "./actions";
import { putSpinerStatus } from "src/store/search/actions";
import { getCorrentPage } from "./selectors";
import { getDataFromApi, postDataToApi, deleteDataToApi } from "src/fetch/";
import { MOVIE } from "src/api";
import * as url from "src/url.json";

export function* getCurrentPage(): Object {
    const items = yield select(getCorrentPage);
    yield put(putSpinerStatus(true));
    try {
        const movies = yield call(getDataFromApi, url.moviePopular, {
            language: "en-US",
            page: items,
        });
        yield put(putMovieList(movies));
        yield put(putTotalPage(movies));
        yield delay(1000);
        yield put(putSpinerStatus(false));
    } catch (err) {
        throw err;
    }
}

export function* setSingleMovie(data): Object {
    try {
        const movies = yield call(getDataFromApi, `${MOVIE}${data.payload}`);
        yield put(putSingleMovie(movies));
    } catch (err) {
        throw err;
    }
}

export function* getGenreRequest(): Object {
    try {
        const genere = yield call(getDataFromApi, url.genreList, {
            language: "en-US",
        });
        yield put(putMovieGenere(genere));
    } catch (err) {
        throw err;
    }
}

export function* getSimilarMovie(data): Object {
    try {
        const similar = yield call(
            getDataFromApi,
            `${url.movie}${data.payload}${url.similar}`,
            {
                language: "en-US",
            }
        );
        yield put(putSimilarMovie(similar));
    } catch (err) {
        throw err;
    }
}

export function* setRateMovie(data): Object {
    yield put(putSpinerStatus(true));
    try {
        const rate = yield call(
            postDataToApi,
            `${url.movie}${data.payload}${url.rating}`,
            { value: data.payload }
        );
        yield put(putMovieRate(rate));
    } catch (err) {
        throw err;
    }
    yield delay(1000);
    yield put(putSpinerStatus(false));
}
export function* deleteMovieRate(data): Object {
    yield put(putSpinerStatus(true));
    try {
        const rate = yield call(
            deleteDataToApi,
            `${url.movie}${data.payload}${url.rating}`
        );
        yield put(putMovieRate(rate));
    } catch (err) {
        throw err;
    }
    yield delay(1000);
    yield put(putSpinerStatus(false));
}
export function* getMovieCast(data): Object {
    try {
        const cast = yield call(
            getDataFromApi,
            `${url.movie}${data.payload}${url.casts}`,
            {
                language: "en-US",
            }
        );
        yield put(putMovieCast(cast));
    } catch (err) {
        throw err;
    }
}

export function* getLanguageRequest(): Object {
    try {
        const lang = yield call(getDataFromApi, `${url.language}`);
        yield put(putMovieLanguage(lang));
    } catch {}
}
