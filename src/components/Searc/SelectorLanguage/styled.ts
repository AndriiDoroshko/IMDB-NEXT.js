import { makeStyles, Theme } from "@material-ui/core/styles";
import { InputColor } from "src/color";

const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            display: "flex",
            borderRadius: 10,
            alignItems: "center",
            overflow: "hidden",
            backgroundColor: InputColor,
        },
        label: {
            width: "30%",
            backgroundColor: InputColor,
            textAlign: "center",
            padding: theme.spacing(1),
        },
        select: {
            width: "100%",
            backgroundColor: InputColor,
        },
    };
});

export default useStyles;
