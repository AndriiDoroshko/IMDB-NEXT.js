import { makeStyles, Theme } from "@material-ui/core/styles";
import { MainColor, CardColor, LineColor } from "src/color";

const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            backgroundColor: MainColor,
            height: 150,
        },
        paper: {
            backgroundColor: CardColor,
            textAlign: "center",
            color: LineColor,
        },
    };
});

export default useStyles;
