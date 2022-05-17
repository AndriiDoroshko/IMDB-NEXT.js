import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { CardColor, LineColor, PlugColor } from "src/color";

const useStyles = makeStyles({
    rate: {
        position: "absolute",
        padding: 10,
        top: 10,
        left: 10,
        zIndex: 0,
        backgroundColor: CardColor,
        color: LineColor,
        borderRadius: 25,
    },
    visible: {
        position: "absolute",
        fontSize: "2em",
        top: 10,
        right: 10,
        color: CardColor,
    },
    card: {
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundColor: PlugColor,
    },
    title: {
        paddingTop: 20,
        paddingBottom: 25,
        color: LineColor,
    },
    rateView: {
        color: LineColor,
    },
    description: {
        paddingTop: 5,
        paddingBottom: 5,
        color: LineColor,
    },
    genre: {
        color: LineColor,
    },
});

export const STDescription = styled.p`
    width: 90%;
    font-size: 1.2em;
    padding: 0 20px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    color: ${LineColor};
    text-align: justify;
`;

export default useStyles;
