import React from "react";
import { useTranslation } from "react-i18next";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import useStyles from "./styled";
import { IProps } from "./type";

const Row: React.FC<IProps> = ({ name, children }) => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <Grid container className={classes.root} key={1}>
            <Grid item xs={12} sm={2}>
                <Paper elevation={0} className={classes.name}>
                    {t(name)}
                </Paper>
            </Grid>
            <Grid item xs={12} sm={10}>
                <Paper
                    elevation={0}
                    className={`${classes.name} ${classes.info}`}
                >
                    {children}
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Row;
