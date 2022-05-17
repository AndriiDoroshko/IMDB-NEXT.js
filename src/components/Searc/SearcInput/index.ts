import SearchInput from "./SearchInput";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { takeMovieName, putMovieName } from "src/store/search/actions";
import { takeMovieList } from "src/store/movie/actions";

const mapDispatchToProps = (dispatch: Dispatch) => ({
    putMovieName: (name) => dispatch(putMovieName(name)),
    takeMovieName: () => dispatch(takeMovieName()),
    takeMovie: () => dispatch(takeMovieList()),
});

export default connect(null, mapDispatchToProps)(SearchInput);
