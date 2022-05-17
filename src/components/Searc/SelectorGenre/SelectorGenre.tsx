import React from "react";
import { useTranslation } from "react-i18next";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { IProps } from "./type";
import useStyles from "./styled";

const SelectorGenre: React.FC<IProps> = ({ genre, putGenre, takeDiscover }) => {
    const classes = useStyles();
    const [id, setId] = React.useState("");
    const { t } = useTranslation();
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setId(event.target.value as string);
        putGenre(event.target.value.toString());
        takeDiscover();
    };
    return (
        <div className={classes.root}>
            <InputLabel className={classes.label} id="demo-simple-select-label">
                {t("genres")}
            </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={id}
                onChange={handleChange}
                variant="outlined"
                className={classes.select}
            >
                <MenuItem value=""></MenuItem>
                {genre?.map((item) => (
                    <MenuItem value={item.id} key={item.id}>
                        {item.name}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
};

export default SelectorGenre;
