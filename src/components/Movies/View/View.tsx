import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Paper, Card, Typography } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import MovieGenre from "../Genre";
import useStyles, { STDescription } from "./styled";
import { TPMovieView, Genre } from "./type";

const View: React.FC<TPMovieView> = ({
    vote_average,
    overview,
    title,
    vote_count,
    genre_name,
}) => {
    const { t } = useTranslation();
    const [isShown, setIsShown] = useState<boolean>(false);
    const voteRate = vote_average;
    const voteAverage = vote_count;
    const classes = useStyles();

    const handleToggleIsShow = () => {
        setIsShown((prevState) => !prevState);
    };

    return (
        <>
            <Paper className={classes.rate} elevation={3}>
                {t("rate")}: {voteRate}/{voteAverage}
            </Paper>
            <VisibilityIcon
                className={classes.visible}
                onMouseEnter={handleToggleIsShow}
            />
            {isShown && (
                <Card
                    className={classes.card}
                    onMouseLeave={handleToggleIsShow}
                >
                    <Typography
                        className={classes.title}
                        variant="h4"
                        component="h3"
                    >
                        {title}
                    </Typography>
                    <Typography
                        className={classes.rateView}
                        variant="h5"
                        component="h4"
                    >
                        {t("rate")}: {voteRate} / {voteAverage}
                    </Typography>
                    <Typography
                        className={classes.description}
                        variant="h5"
                        component="h4"
                    >
                        {t("description")}
                    </Typography>
                    <STDescription>{overview}</STDescription>
                    <Typography
                        className={classes.genre}
                        variant="h5"
                        component="h4"
                    >
                        {t("genre")}
                    </Typography>
                    {genre_name.map((item: Genre, index: number) => (
                        <MovieGenre key={item.id} item={item} index={index} />
                    ))}
                </Card>
            )}
        </>
    );
};

export default View;
