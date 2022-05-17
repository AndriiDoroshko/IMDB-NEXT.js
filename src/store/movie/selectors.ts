import { createSelector } from "reselect";
import {
    InitialState,
    GenreList,
    Genre,
    MovieList,
    Movie,
    CastObg,
    Cast,
    Crew,
    SpokenLanguages,
    RateRequest,
} from "src/typescript/movieRedux";

export const getMovieStateFromReducer = (state): InitialState => state?.movie;

export const getGenreStateFromReducer = createSelector(
    getMovieStateFromReducer,
    (movie): GenreList => movie?.movieGenere
);
export const selectLanguageFromReducer = createSelector(
    getMovieStateFromReducer,
    (data): Array<SpokenLanguages> => data?.language
);

export const selectRateFromReducer = createSelector(
    getMovieStateFromReducer,
    (data): RateRequest | any => data?.rate || {}
);

export const selectSingleMovieFromReducer = createSelector(
    getMovieStateFromReducer,
    (data): Movie | any => data?.movie || {}
);

export const selectCastFromReducer = createSelector(
    getMovieStateFromReducer,
    (data): CastObg | any => data?.cast
);

export const selectMovieSuper = createSelector(
    getMovieStateFromReducer,
    (movie): Array<MovieList> => movie?.movieList
);

export const selectGenreSuper = createSelector(
    getGenreStateFromReducer,
    (movie): Array<Genre> => movie?.genres
);

export const selectSimilarMovie = createSelector(
    getMovieStateFromReducer,
    (movie): Array<MovieList> => movie?.similarMovie.slice(0, 6)
);

export const getSingleMovieIdFromReducer = createSelector(
    selectSingleMovieFromReducer,
    (data): number => data?.id
);

export const getmovieCast = createSelector(
    selectCastFromReducer,
    (data): Array<Cast> => data?.cast
);

export const getmovieCrew = createSelector(
    selectCastFromReducer,
    (data): Array<Crew> => data?.crew
);

export const connectCrewAndCast = createSelector(
    [getmovieCast, getmovieCrew],
    (cast, crew) => [...cast, ...crew]
);

export const getMovieWithGenre = createSelector(
    [selectMovieSuper, selectGenreSuper],
    (movie, genre): Array<MovieList> => {
        movie.map((item) => {
            let genreNamesArr = [];
            for (let i = 0; i < item?.genre_ids.length; i++) {
                for (let j = 0; j < genre?.length; j++) {
                    if (item.genre_ids[i] == genre[j].id) {
                        genreNamesArr.push(genre[j]);
                    }
                }
            }
            item.genre_name = genreNamesArr;
        });
        return movie;
    }
);

export const getTotalPage = createSelector(
    getMovieStateFromReducer,
    (movie): Number => movie.totalPage
);

export const getCorrentPage = createSelector(
    getMovieStateFromReducer,
    (movie): Number => movie.currentPage
);
