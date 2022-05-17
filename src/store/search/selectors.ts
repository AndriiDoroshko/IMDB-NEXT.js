import { createSelector } from "reselect";
import { InitialState } from "src/typescript/searchRedux";

export const getSearchStateFromReducer = (state): InitialState => state.search;

export const selectNameFromReducer = createSelector(
    getSearchStateFromReducer,
    (search): string => search?.movieName
);

export const selectSpinerFromReducer = createSelector(
    getSearchStateFromReducer,
    (status): boolean => status?.spiner
);

export const selectDateFromReducer = createSelector(
    getSearchStateFromReducer,
    (store): string => store?.date
);

export const selectGenreFromReducer = createSelector(
    getSearchStateFromReducer,
    (store): string => store?.genre
);

export const selectLanguageFromReducer = createSelector(
    getSearchStateFromReducer,
    (store): string => store?.language
);

export const selectAdultFromReducer = createSelector(
    getSearchStateFromReducer,
    (store): string => store?.adult
);

export const selectSearchStatus = createSelector(
    [
        selectDateFromReducer,
        selectGenreFromReducer,
        selectLanguageFromReducer,
        selectAdultFromReducer,
    ],
    (date, genre, language, adult) => {
        if (date || genre || adult) {
            return true;
        }
    }
);
