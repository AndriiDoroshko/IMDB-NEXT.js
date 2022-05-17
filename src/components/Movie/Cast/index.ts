import { connect } from "react-redux";
import { InitialState } from "src/typescript/movieRedux";
import { connectCrewAndCast } from "src/store/movie/selectors";
import Cast from "./Cast";

const mapStateToProps = (state: InitialState) => ({
    castList: connectCrewAndCast(state),
});

export default connect(mapStateToProps)(Cast);
