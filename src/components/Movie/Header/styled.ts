import { makeStyles, Theme } from "@material-ui/core/styles";
import { LineColor, CardColor } from "src/color";

const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            padding: theme.spacing(2),
            height: "10vh",
        },
        paper: {
            textAlign: "center",
            padding: theme.spacing(1),
            borderRadius: 25,
            backgroundColor: CardColor,
            color: LineColor,
            border: `2px solid ${LineColor}`,
        },
        button: {
            width: "100px",
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: 'transparent',
            color: LineColor,
            border: `2px solid ${LineColor}`,
        },
    };
});

export default useStyles;
