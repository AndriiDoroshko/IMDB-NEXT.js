import React from "react";
import Modal from "@material-ui/core/Modal";
import StarIcon from "@material-ui/icons/Star";
import useStyles, { ModalBlock } from "./styled";
import { IPostRate } from "./type";
import ModalRate from "../ModalRate/";

const PostRate: React.FC<IPostRate> = () => {
    const classes = useStyles();
    const [isOpen, setisOpen] = React.useState<boolean>(false);

    const handleOpen = () => setisOpen(true);

    const handleClose = () => setisOpen(false);

    return (
        <ModalBlock>
            <StarIcon className={classes.icon} onClick={handleOpen} />
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <ModalRate />
            </Modal>
        </ModalBlock>
    );
};

export default PostRate;
