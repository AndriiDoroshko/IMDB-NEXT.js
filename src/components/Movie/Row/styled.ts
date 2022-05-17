import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { CardColor, LineColor } from "src/color";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            backgroundColor: CardColor,
            overflow: "hidden",
        },
        name: {
            borderRadius: 0,
            borderBottom: `2px solid ${LineColor}`,
            color: LineColor,
            backgroundColor: CardColor,
            padding: theme.spacing(2),
            height: 40,
        },
        info: {
            textAlign: "right",
        },
    })
);

export default useStyles;
