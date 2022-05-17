import { connect } from "react-redux";
import { Dispatch } from "redux";
import SelectorLanguage from "./SelectorLanguage";
import { putSearchLanguage, takeMovieDiscover } from "src/store/search/actions";
import { InitialState } from "src/typescript/movieRedux";
import { selectLanguageFromReducer } from "src/store/movie/selectors";

const mapStateToProps = (state: InitialState) => ({
    language: selectLanguageFromReducer(state),
});
const mapDistpatchToProps = (dispatch: Dispatch) => ({
    putLanguage: (lang: string) => dispatch(putSearchLanguage(lang)),
    takeDiscover: () => dispatch(takeMovieDiscover()),
});
export default connect(mapStateToProps, mapDistpatchToProps)(SelectorLanguage);
