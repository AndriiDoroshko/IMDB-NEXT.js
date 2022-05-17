import { makeStyles } from "@material-ui/core/styles";
import { InputColor } from "src/color";

const useStyles = makeStyles((theme) => ({
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
    input: {
        width: "100%",
        backgroundColor: InputColor,
    },
}));

export default useStyles;
