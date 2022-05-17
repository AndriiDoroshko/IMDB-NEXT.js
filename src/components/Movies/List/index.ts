import { connect } from "react-redux";
import List from "./List";
import { InitialState } from "src/typescript/movieRedux";
import { selectGenreSuper, getMovieWithGenre } from "src/store/movie/selectors";
import { selectSpinerFromReducer } from "src/store/search/selectors";

const mapStateToProps = (state: InitialState) => ({
    movies: getMovieWithGenre(state),
    genre: selectGenreSuper(state),
    spiner: selectSpinerFromReducer(state),
});

export default connect(mapStateToProps)(List);
