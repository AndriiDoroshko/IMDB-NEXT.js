import { makeStyles, createStyles } from "@material-ui/core/styles";
import { LineColor, CardColor } from "src/color";

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            display: "flex",
            padding: 20,
            justifyContent: "center",
            "& > *": {
                marginTop: theme.spacing(2),
            },
            "& svg, button, div": {
                color: LineColor,
                backgroundColor: CardColor,
            },
        },
    })
);

export default useStyles;
