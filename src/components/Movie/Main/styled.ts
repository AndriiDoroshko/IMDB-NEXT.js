import { makeStyles, Theme } from "@material-ui/core/styles";
import { MainColor, CardColor, LineColor } from "src/color";
import styled from "styled-components";

const useStyles = makeStyles((theme: Theme) => {
    return {
        root: {
            minHeight: "90vh",
        },
        poster: {
            height: "80vh",
            textAlign: "center",
            borderRadius: 25,
            position: "relative",
        },
        overview: {
            backgroundColor: CardColor,
            borderRadius: 25,
            marginTop: 10,
            color: LineColor,
            padding: 15,
        },
        description: {
            minHeight: 520,
            width: "90%",
            marginLeft: 10,
            backgroundColor: MainColor,
            position: "relative",
        },
        button: {
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            top: 0,
            right: -80,
            color: LineColor,
            borderBlockEnd: `1px solid ${LineColor}`,
            borderBlock: `none`,
            outlineWidth: "1px",
        },
    };
});

export const STPoster = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 25px;
`;

export default useStyles;
