import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Grid, Paper, Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Description from "../Description/";
import Similar from "../Similar/";
import PostRate from "../PostRate/";
import Cast from "../Cast";
import { POSTER } from "src/api";
import useStyles, { STPoster } from "./styled";
import { IProps } from "./type";

const Main: React.FC<IProps> = ({ poster_path, overview }) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const [show, setShow] = useState<boolean>(true);

    const handleChangePage = () => {
        setShow((prew) => !prew);
    };

    return (
        <Grid
            container
            direction="row"
            justify="space-around"
            alignItems="flex-start"
            className={classes.root}
        >
            <Grid item xs={8}>
                <Grid
                    container
                    spacing={2}
                    alignItems="center"
                    className={classes.root}
                >
                    <Grid item xs={5}>
                        <Paper className={classes.poster}>
                            <PostRate />
                            <STPoster src={`${POSTER}${poster_path}`} />
                        </Paper>
                    </Grid>
                    <Grid item xs={7}>
                        <Paper elevation={0} className={classes.description}>
                            {show ? <Description /> : <Cast />}
                            <Button
                                variant="outlined"
                                color="primary"
                                onClick={handleChangePage}
                                className={classes.button}
                            >
                                {show? t(`cast`):t('info')}
                            </Button>
                        </Paper>
                        <Paper className={classes.overview}>
                            <Typography variant="body1" gutterBottom>
                                {overview}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Similar />
            </Grid>
        </Grid>
    );
};

export default Main;
