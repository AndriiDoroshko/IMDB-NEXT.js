import { connect } from "react-redux";
import { Dispatch } from "redux";
import SelectorGenre from "./SelectorGenre";
import { putSearchGenre, takeMovieDiscover } from "src/store/search/actions";
import { InitialState } from "src/typescript/movieRedux";
import { getGenreStateFromReducer } from "src/store/movie/selectors";

const mapStateToProps = (state: InitialState) => ({
    genre: getGenreStateFromReducer(state).genres,
});
const mapDistpatchToProps = (dispatch: Dispatch) => ({
    putGenre: (genre: string) => dispatch(putSearchGenre(genre)),
    takeDiscover: () => dispatch(takeMovieDiscover()),
});
export default connect(mapStateToProps, mapDistpatchToProps)(SelectorGenre);
