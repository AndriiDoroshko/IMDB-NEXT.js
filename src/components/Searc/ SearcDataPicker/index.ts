import { connect } from "react-redux";
import { Dispatch } from "redux";
import SearchDataPicker from "./ SearcDataPicker";
import { putSearchDate, takeMovieDiscover } from "src/store/search/actions";

const mapDistpatchToProps = (dispatch: Dispatch) => ({
    putDate: (date: string) => dispatch(putSearchDate(date)),
    takeDiscover: () => dispatch(takeMovieDiscover()),
});

export default connect(null, mapDistpatchToProps)(SearchDataPicker);
