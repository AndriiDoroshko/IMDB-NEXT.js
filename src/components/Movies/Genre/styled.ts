import { makeStyles } from "@material-ui/core/styles";
import { LineColor } from "src/color";

const useStyles = makeStyles({
    genre: {
        margin: 5,
        color: LineColor,
        border: `2px solid ${LineColor}`,
    },
});
export default useStyles;
