import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { MainColor, LineColor } from "src/color";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        spinner: {
            width: "100%",
            height: "100vh",
            background: MainColor,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 100,
            "& svg": { color: LineColor },
        },
    })
);

export default useStyles;
