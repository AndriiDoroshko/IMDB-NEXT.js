import Link from "next/link";
import React from "react";
import { Chip } from "@material-ui/core";
import useStyles from "./styled";
import { IProps } from "./type";
import { MAIN_PAGE } from "src/api";

const Genre: React.FC<IProps> = ({ item, index, status }) => {
    const classes = useStyles();
    if (index > 1 && status) {
        return null;
    } else {
        return (
            <Link
                href={{
                    pathname: MAIN_PAGE,
                    query: {
                        genre: item.name,
                        id: item.id,
                    },
                }}
            >
                <Chip
                    className={classes.genre}
                    label={item.name}
                    component="a"
                    clickable
                    variant="outlined"
                />
            </Link>
        );
    }
};

export default Genre;
