import { connect } from "react-redux";
import { Dispatch } from "redux";
import PaginationBlock from "./Pagination";
import { InitialState } from "src/typescript/movieRedux";
import { getTotalPage } from "src/store/movie/selectors";
import { selectSearchStatus } from "src/store/search/selectors";
import { changePage, takeMovieList } from "src/store/movie/actions";
import { takeMovieDiscover } from "src/store/search/actions";

const mapStateToProps = (state: InitialState) => ({
    totalPage: getTotalPage(state),
    searchStatus: selectSearchStatus(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    changePage: (page) => dispatch(changePage(page)),
    takeMovieList: () => dispatch(takeMovieList()),
    takeSearchlist: () => dispatch(takeMovieDiscover()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PaginationBlock);
