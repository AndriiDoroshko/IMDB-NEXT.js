import React from "react";
import { useTranslation } from "react-i18next";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import { IProps } from "./type";
import useStyles from "./styled";

const CheckboxBlock: React.FC<IProps> = ({ putAdult, takeDiscover }) => {
    const [checked, setChecked] = React.useState(true);
    const classes = useStyles();
    const { t } = useTranslation();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        putAdult(event.target.checked.toString());
        takeDiscover();
    };
    return (
        <div className={classes.root}>
            <InputLabel className={classes.label} id="outlined-search">
                {t("adult")}
            </InputLabel>
            <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "primary checkbox" }}
            />
        </div>
    );
};
export default CheckboxBlock;
