import { makeStyles, Theme } from "@material-ui/core/styles";
import { CardColor, LineColor } from "src/color";

const useStyles = makeStyles((theme: Theme) => {
    return {
        main: {
            height: "90vh",
        },
        card: {
            width: 150,
            height: "25vh",
            borderRadius: 25,
            backgroundColor: CardColor,
        },
        media: {
            height: "21vh",
            backgroundSize: "100% 100%",
        },
        linkTomovie: {
            marginTop: 5,
            display: "-webkit-box",
            "-webkit-line-clamp": 1,
            "-webkit-box-orient": "vertical",
            overflow: "hidden",
            textDecoration: "none",
            color: LineColor,
        },
        link: {
            textAlign: "center",
        },
    };
});

export default useStyles;
