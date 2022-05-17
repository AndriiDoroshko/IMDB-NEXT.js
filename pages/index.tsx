import { END } from "redux-saga";
import { wrapper } from "src/store/";
import MovieList from "../src/components/Movies/List";
import {
    takeMovieList,
    takeMovieGenere,
    takeMovieLanguage,
} from "src/store/movie/actions";
import { takeMovieListByGenre } from "src/store/search/actions";
import {
    selectGenreSuper,
    selectLanguageFromReducer,
} from "src/store/movie/selectors";
import { GetServerSideProps } from "next";

const Index = () => {
    return <MovieList />;
};

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    async ({ store, query }) => {
        await store.dispatch(takeMovieList());
        if (!selectGenreSuper(store)) {
            await store.dispatch(takeMovieGenere());
        }
        if (!selectLanguageFromReducer(store)) {
            await store.dispatch(takeMovieLanguage());
        }
        if (query?.genre) {
            await store.dispatch(takeMovieListByGenre(+query?.id));
        }
        store.dispatch(END);
        await (store as any).sagaTask.toPromise();
    }
);

export default Index;
