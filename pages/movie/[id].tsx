import { END } from "redux-saga";
import { GetServerSideProps } from "next";
import { wrapper } from "src/store/";
import {
    takeSingleMovie,
    takeSimilarMovie,
    takeMovieCast,
} from "src/store/movie/actions";
import MoviePage from "src/components/Movie/Page";

const Movie = () => <MoviePage />;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
    async ({ store, params }: any) => {
        await store.dispatch(takeSingleMovie(params.id));
        await store.dispatch(takeSimilarMovie(params.id));
        await store.dispatch(takeMovieCast(params.id));
        store.dispatch(END);
        await store.sagaTask.toPromise();
    }
);

export default Movie;
