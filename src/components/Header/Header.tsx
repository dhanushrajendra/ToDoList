import React from "react";

import AppBar from "@material-ui/core/AppBar";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { IHeaderContainerProps } from ".";
import { IStyles } from "../../model";

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      background: "#FF4500",
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
  });

interface IProps extends IHeaderContainerProps, IStyles { }

const Header: React.FC<IProps> = ({ classes }) => {

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          TinyList
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
export default withStyles(styles, { withTheme: true })(Header);
