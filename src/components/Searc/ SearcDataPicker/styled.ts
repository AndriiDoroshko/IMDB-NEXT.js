import { makeStyles, Theme } from "@material-ui/core/styles";
import { InputColor } from "src/color";

const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            display: "flex",
            borderRadius: 10,
            alignItems: "center",
            overflow: "hidden",
            backgroundColor: InputColor,
            height: 58,
        },
        label: {
            backgroundColor: InputColor,
            textAlign: "center",
            padding: theme.spacing(1),
        },
        data: {
            backgroundColor: InputColor,
            padding: theme.spacing(0, 1),
            "& input": {
                textAlign: "center",
            },
        },
    };
});

export default useStyles;
