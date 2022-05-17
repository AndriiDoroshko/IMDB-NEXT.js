export interface TPPagination {
    totalPage: number;
    changePage: (number: number) => void;
    searchStatus: boolean | undefined;
    takeMovieList: () => void;
    takeSearchlist: () => void;
}
