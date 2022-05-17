import { makeStyles } from "@material-ui/core/styles";
import { MainColor, CardColor, LineColor } from "src/color";

const useStyles = makeStyles({
    root: {
        backgroundColor: MainColor,
        marginBottom: 5,
    },
    page: {
        height: "80%",
        backgroundColor: CardColor,
        width: "100%",
        borderRadius: 25,
        overflow: "hidden",
        border: `1px solid ${LineColor}`,
    },
    href: {
        color: LineColor,
        textDecoration: "none",
    },
});

export default useStyles;
