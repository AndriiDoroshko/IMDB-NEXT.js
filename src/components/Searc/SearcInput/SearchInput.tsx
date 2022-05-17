import React from "react";
import { useTranslation } from "react-i18next";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import useStyles from "./style";
import { IProps } from "./type";

const SearchInput: React.FC<IProps> = ({
    putMovieName,
    takeMovieName,
    takeMovie,
}) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        putMovieName(event.target.value);
        if (event.target.value) {
            takeMovieName(event.target.value);
        } else {
            takeMovie();
        }
    };
    return (
        <div className={classes.root}>
            <InputLabel className={classes.label} id="outlined-search">
                {t("search")}
            </InputLabel>
            <TextField
                className={classes.input}
                id="outlined-basic"
                variant="outlined"
                type="search"
                onChange={handleChange}
            />
        </div>
    );
};

export default SearchInput;
