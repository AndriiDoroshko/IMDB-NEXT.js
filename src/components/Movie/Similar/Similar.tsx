import Link from "next/link";
import React from "react";
import {
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    Typography,
} from "@material-ui/core";
import { POSTER, MOVIE } from "src/api";
import useStyles from "./styled";
import { IProps } from "./type";
const Similar: React.FC<IProps> = ({ movies }) => {
    const classes = useStyles();

    return (
        <Grid container spacing={3} className={classes.main}>
            {movies.length &&
                movies?.map((item) => {
                    return (
                        <Grid key={item.id} item xs={6}>
                            <Link
                                href={`${MOVIE}[id]`}
                                as={`${MOVIE}${item.id}`}
                            >
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={`${POSTER}${item.poster_path}`}
                                            title="Contemplative Reptile"
                                        />
                                        <Typography className={classes.link}>
                                            <a className={classes.linkTomovie}>
                                                {item.title}
                                            </a>
                                        </Typography>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                    );
                })}
        </Grid>
    );
};
export default Similar;
