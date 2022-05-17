import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { CardColor, LineColor } from "src/color";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            overflow: "scroll",
            overflowX: "hidden",
            height: 500,
            "&::-webkit-scrollbar": {
                width: 0,
            },
        },

        paper: {
            backgroundColor: CardColor,
            border: `2px solid ${LineColor}`,
            borderRadius: 25,
        },
        large: {
            width: theme.spacing(6),
            height: theme.spacing(6),
        },
        title: {
            color: LineColor,
        },
        info: {
            width: "70%",
        },
    })
);

export default useStyles;
