import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SearchInput from "../SearcInput";
import SearchDataPicker from "../ SearcDataPicker";
import SelectorGenre from "../SelectorGenre";
import SelectorLanguage from "../SelectorLanguage";
import CheckboxBlock from "../Checkbox";
import { IProps } from "./type";
import useStyles from "./styled";

const SeachMain: React.FC<IProps> = () => {
    const classes = useStyles();
    return (
        <Grid
            className={classes.root}
            container
            direction="row"
            justify="space-around"
            alignItems="center"
        >
            <Grid item xs={12} sm={3}>
                <Paper className={classes.paper}>
                    <SearchInput />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Paper className={classes.paper}>
                    <SelectorGenre />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={3}>
                <Paper className={classes.paper}>
                    <SelectorLanguage />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={1}>
                <Paper className={classes.paper}>
                    <CheckboxBlock />
                </Paper>
            </Grid>
            <Grid item xs={12} sm={1}>
                <Paper className={classes.paper}>
                    <SearchDataPicker />
                </Paper>
            </Grid>
        </Grid>
    );
};

export default SeachMain;
