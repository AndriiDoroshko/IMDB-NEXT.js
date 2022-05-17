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
            padding: theme.spacing(1),
        },
        label: {
            width: "50%",
            textAlign: "center",
        },
    };
});

export default useStyles;
