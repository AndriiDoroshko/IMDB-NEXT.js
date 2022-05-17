import { makeStyles, Theme } from "@material-ui/core/styles";
import { MainColor } from "src/color";

const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            backgroundColor: MainColor,
            width:"100%"
        },
    };
});

export default useStyles;
