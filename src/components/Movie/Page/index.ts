import { connect } from "react-redux";
import Page from "./Page";
import { InitialState } from "src/typescript/movieRedux";
import { selectSingleMovieFromReducer } from "src/store/movie/selectors";

const mapStateToProps = (state: InitialState) => ({
    movie: selectSingleMovieFromReducer(state),
});

export default connect(mapStateToProps)(Page);
