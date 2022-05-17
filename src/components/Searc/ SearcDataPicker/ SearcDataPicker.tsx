import "date-fns";
import React from "react";
import DateFnsUtils from "@date-io/date-fns";
import { useTranslation } from "react-i18next";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import InputLabel from "@material-ui/core/InputLabel";
import useStyles from "./styled";
import { IProps } from "./type";
const SearchDataPicker: React.FC<IProps> = ({ putDate, takeDiscover }) => {
    const [selectedDate, setSelectedDate] = React.useState<Date | number>(
        new Date()
    );
    const { t } = useTranslation();
    const classes = useStyles();
    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
        putDate(date.getFullYear().toString());
        takeDiscover();
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div className={classes.root}>
                <InputLabel
                    className={classes.label}
                    id="demo-simple-data-label"
                >
                    {t("date")}
                </InputLabel>
                <DatePicker
                    className={classes.data}
                    views={["year"]}
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </div>
        </MuiPickersUtilsProvider>
    );
};

export default SearchDataPicker;
