import { connect } from "react-redux";
import SeachMain from "./SearcMain";
import { InitialState } from "src/typescript/movieRedux";
import { selectGenreSuper } from "src/store/movie/selectors";

const mapStateToProps = (state: InitialState) => ({
    genre: selectGenreSuper(state),
});

export default connect(mapStateToProps)(SeachMain);
