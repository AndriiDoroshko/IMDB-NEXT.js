import { makeStyles } from "@material-ui/core/styles";
import { CardColor, LineColor } from "src/color";

const useStyles = makeStyles({
    card: {
        minWidth: 400,
        width: 400,
        borderRadius: 25,
        margin: 10,
        backgroundColor: CardColor,
    },
    cardMedia: {
        height: 500,
        backgroundSize: "100% 100%",
        position: "relative",
        textAlign: "center",
    },
    link: {
        margin: "auto",
        textAlign: "center",
        padding: 5,
    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    linkTomovie: {
        display: "-webkit-box",
        "-webkit-line-clamp": 1,
        "-webkit-box-orient": "vertical",
        overflow: "hidden",
        textDecoration: "none",
        color: LineColor,
    },
    date: {
        padding: 5,
        textAlign: "center",
        borderRadius: 25,
        backgroundColor: CardColor,
        color: LineColor,
        border: `2px solid ${LineColor}`,
    },
    footer: {
        padding: "5px",

    },
});

export default useStyles;
