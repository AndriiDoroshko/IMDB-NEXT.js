import Link from "next/link";
import { useTranslation } from "react-i18next";
import BackspaceIcon from "@material-ui/icons/Backspace";
import { Grid, Button } from "@material-ui/core";
import useStyles from "./styled";
import { MAIN_PAGE } from "src/api";

const Header = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
            className={classes.root}
        >
            <Grid item xs={2}>
                <Link href={MAIN_PAGE}>
                    <Button
                        variant="outlined"
                        color="primary"
                        href="#outlined-buttons"
                        className={classes.button}
                    >
                        <BackspaceIcon />
                        <span> {t("back")}</span>
                    </Button>
                </Link>
            </Grid>
            {/* <Grid item xs={2}>
                <Paper className={classes.paper}>Key</Paper>
            </Grid> */}
        </Grid>
    );
};

export default Header;
