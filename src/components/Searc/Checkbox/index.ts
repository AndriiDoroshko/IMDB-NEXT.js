import { connect } from "react-redux";
import { Dispatch } from "redux";
import CheckboxBlock from "./Check";
import { putSearchAdult, takeMovieDiscover } from "src/store/search/actions";

const mapDistpatchToProps = (dispatch: Dispatch) => ({
    putAdult: (adult: string) => dispatch(putSearchAdult(adult)),
    takeDiscover: () => dispatch(takeMovieDiscover()),
});

export default connect(null, mapDistpatchToProps)(CheckboxBlock);
