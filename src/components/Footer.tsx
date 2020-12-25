import React from "react";

import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { IStyles } from "../model";

const styles = (theme: Theme) =>
  createStyles({
    footer: {
      position: "fixed",
      background: "white",
      bottom: 0,
      textAlign: "center",
      width: "100%",
      paddingBottom: theme.spacing(1) * 2
    }
  });

const Footer: React.FC<IStyles> = ({ classes }) => {
  return (
    <div className={classes.footer}>
      <Typography variant="body1">
        Dhanush Rajendra
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Footer);
