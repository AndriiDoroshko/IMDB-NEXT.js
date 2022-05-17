import { connect } from "react-redux";
import Similar from "./Similar";
import { InitialState } from "src/typescript/movieRedux";
import { selectSimilarMovie } from "src/store/movie/selectors";

const mapStateToProps = (state: InitialState) => ({
    movies: selectSimilarMovie(state),
});

export default connect(mapStateToProps)(Similar);
