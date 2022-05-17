import CircularProgress from "@material-ui/core/CircularProgress";
import { Paper } from "@material-ui/core";
import useStyles from "./styled";

const Spiner = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.spinner}>
            <CircularProgress size={50} />
        </Paper>
    );
};

export default Spiner;
