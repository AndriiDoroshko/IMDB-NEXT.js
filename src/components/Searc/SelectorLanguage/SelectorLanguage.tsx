import React from "react";
import Select from "@material-ui/core/Select";
import { useTranslation } from "react-i18next";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import { IProps } from "./type";
import useStyles from "./styled";

const SelectorLanguage: React.FC<IProps> = ({
    language,
    putLanguage,
    takeDiscover,
}) => {
    const classes = useStyles();
    const { t } = useTranslation();
    const [id, setId] = React.useState("");
    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setId(event.target.value as string);
        putLanguage(event.target.value.toString());
        takeDiscover();
    };

    return (
        <div className={classes.root}>
            <InputLabel className={classes.label} id="demo-simple-select-label">
                {t("languages")}
            </InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={id}
                onChange={handleChange}
                className={classes.select}
                variant="outlined"
            >
                <MenuItem value=""></MenuItem>
                {language?.map((item) => (
                    <MenuItem value={item.iso_639_1} key={item.iso_639_1}>
                        {item.english_name}
                    </MenuItem>
                ))}
            </Select>
        </div>
    );
};

export default SelectorLanguage;
