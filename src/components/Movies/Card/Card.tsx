import Link from "next/link";
import React from "react";
import MovieView from "../View";
import MovieGenre from "../Genre";
import { Card, CardMedia, Typography, Grid, Paper } from "@material-ui/core";
import useStyles from "./styled";
import { TPMovie, Genre } from "./type";
import { POSTER, MOVIE } from "src/api";

const MovieCard: React.FC<TPMovie> = ({
    genre_name,
    id,
    original_title,
    overview,
    poster_path,
    release_date,
    title,
    vote_average,
    vote_count,
}) => {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <CardMedia
                image={`${POSTER}${poster_path}`}
                title={original_title}
                className={classes.cardMedia}
            >
                <MovieView
                    vote_average={vote_average}
                    overview={overview}
                    title={title}
                    vote_count={vote_count}
                    genre_name={genre_name}
                />
            </CardMedia>
            <Typography
                className={classes.link}
                gutterBottom
                variant="h5"
                component="h2"
            >
                <Link href={`${MOVIE}[id]`} as={`${MOVIE}${id}`}>
                    <a className={classes.linkTomovie}>{title}</a>
                </Link>
            </Typography>
            <Grid
                container
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={1}
                className={classes.footer}
            >
                <Grid item xs={8}>
                    {genre_name.map((item: Genre, index: number) => (
                        <MovieGenre
                            key={item.id}
                            item={item}
                            index={index}
                            status={true}
                        />
                    ))}
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.date}>{release_date}</Paper>
                </Grid>
            </Grid>
        </Card>
    );
};

export default MovieCard;
