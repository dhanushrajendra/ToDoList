import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import { Theme, withStyles } from "@material-ui/core/";
import CssBaseline from "@material-ui/core/CssBaseline";
import Snackbar from "@material-ui/core/Snackbar";
import createStyles from "@material-ui/core/styles/createStyles";

import Footer from "./components/Footer";
import HeaderContainer from "./components/Header";
import HomeView from "./views/HomeView";

import { loadStore } from "./actions";
import { IStyles } from "./model";
import { IReduxStore } from "./model/store";

interface IAppDispatch {
  loadReduxStore: (store: IReduxStore) => void;
}

const styles = (theme: Theme) =>
  createStyles({
    content: {
      flexGrow: 1,
      paddingBottom: theme.spacing(1) * 6,
      display: "flex",
      flexFlow: "column"
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "0 8px",
      ...theme.mixins.toolbar
    },
    container: {
      display: "flex",
      height: "100%",
      padding: theme.spacing(1) * 2,
      paddingBottom: 0
    }
  });

export interface IProps extends IStyles, IAppDispatch { }

export const App: React.FC<IProps> = ({ classes, loadReduxStore }) => {
  const [open, setOpen] = React.useState(false);

  const handleClose = (event: any, reason: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    const persistedState = localStorage.getItem("reduxState")
      ? JSON.parse(localStorage.getItem("reduxState") || "")
      : {};
    if (persistedState != null) {
      loadReduxStore(persistedState);
    }
  });

  const message =
    "This site uses local storage to store tasks, by continuing to use this site you are consenting to store data on your browser. (To clear data, right click > Inspect > Application > Clear Storage)";

  return (
    <div className="app-root">
      <CssBaseline />
      <HeaderContainer />
      <div className={classes.content}>
        <div className={classes.toolbar} />
        <div className={classes.container}>
          <Switch>
            <Route exact={true} path="/" component={HomeView} />
          </Switch>
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        message={message}
      />
      <Footer />
    </div>
  );
};

const mapDispatchToProps = (dispatch: Dispatch): IAppDispatch => ({
  loadReduxStore: (store: IReduxStore) => dispatch(loadStore(store))
});

export default withStyles(styles)(connect(null, mapDispatchToProps)(App));
