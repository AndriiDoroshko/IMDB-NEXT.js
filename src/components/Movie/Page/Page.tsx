import React from "react";
import { Grid } from "@material-ui/core";
import MovieHeader from "../Header";
import MovieMain from "../Main";
import { IMovie } from "./type";
import useStyles from "./styled";
import Head from "next/head";

const Page: React.FC<IMovie> = ({ movie }) => {
    const classes = useStyles();
    return (
        <>
            <Head>
                <title>{movie.title}</title>
            </Head>
            <Grid
                container
                direction="column"
                justify="space-between"
                alignItems="center"
                className={classes.root}
            >
                <MovieHeader />
                <MovieMain {...movie} />
            </Grid>
        </>
    );
};
export default Page;
