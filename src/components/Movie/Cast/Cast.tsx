import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { POSTER } from "src/api";
import useStyles from "./style";

const Cast = ({ castList }) => {
    const classes = useStyles();
    return (
        <Grid
            container
            alignItems="center"
            spacing={3}
            className={classes.root}
        >
            {castList?.map((item) => (
                <Grid item xs={4} key={item.id}>
                    <Paper className={classes.paper}>
                        <Grid
                            container
                            direction="row"
                            justify="space-around"
                            alignItems="center"
                        >
                            <Avatar
                                alt={item.name}
                                src={`${POSTER}${item.profile_path}`}
                                className={classes.large}
                            />
                            <div className={classes.info}>
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    className={classes.title}
                                >
                                    {item.name}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    gutterBottom
                                    className={classes.title}
                                >
                                    {item.known_for_department}
                                </Typography>
                            </div>
                        </Grid>
                    </Paper>
                </Grid>
                // <Grid item xs={4}>

                // </Grid>
            ))}
        </Grid>
    );
};

export default Cast;
