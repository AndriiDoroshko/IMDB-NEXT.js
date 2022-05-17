import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { MainColor, LineColor } from "src/color";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 450,
            backgroundColor: MainColor,
            border: `2px solid ${LineColor}`,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(5, 5, 5),
            borderRadius: 25,
            outline: "none",
        },
        title: {
            color: LineColor,
            textAlign: "center",
        },
        icon: {
            fontSize: "3em",
            cursor: "pointer",
        },
        label: {
            backgroundColor: "#ffffff",
            borderRadius: 25,
            colorSecondary: LineColor,
            textAlign: "center",
            margin: "auto",
        },
        button: {
            margin: theme.spacing(1),
            color: LineColor,
        },
        status: {
            color: LineColor,
            padding: theme.spacing(2),
        },
    })
);

export default useStyles;
