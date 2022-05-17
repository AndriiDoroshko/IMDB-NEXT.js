import React from "react";
import { Grid, Paper } from "@material-ui/core";
import useStyles from "./styled";
import MovieRow from "../Row";
import MovieGenre from "src/components/Movies/Genre";
import { Movie } from "src/typescript/movieRedux";
import { arrayToString } from "src/helper/";

export interface IMovie {
    movie: Movie;
}

const Description: React.FC<IMovie> = ({
    movie: {
        budget,
        homepage,
        production_companies,
        production_countries,
        spoken_languages,
        genres,
        revenue,
        status,
        runtime,
    },
}) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Paper className={classes.page}>
                <MovieRow name="budget">${budget?.toLocaleString()}</MovieRow>
                <MovieRow name="homepage">
                    <a className={classes.href} href={homepage}>{homepage}</a>
                </MovieRow>
                <MovieRow name="companies">
                    {arrayToString(production_companies)}
                </MovieRow>
                <MovieRow name="countries">
                    {arrayToString(production_countries)}
                </MovieRow>
                <MovieRow name="languages">
                    {arrayToString(spoken_languages)}
                </MovieRow>
                <MovieRow name="revenue">${revenue?.toLocaleString()}</MovieRow>
                <MovieRow name="status">{status}</MovieRow>
                <MovieRow name="runtime">{runtime}</MovieRow>
                <MovieRow name="genres">
                    {genres?.map((item, index) => (
                        <MovieGenre key={item.id} item={item} index={index} />
                    ))}
                </MovieRow>
            </Paper>
        </Grid>
    );
};

export default Description;
