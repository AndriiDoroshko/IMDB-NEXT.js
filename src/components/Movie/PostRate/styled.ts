import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import { CardColor } from "src/color";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            fontSize: "3em",
            cursor: "pointer",
        },
    })
);

export const ModalBlock = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    color: ${CardColor};
`;

export default useStyles;
