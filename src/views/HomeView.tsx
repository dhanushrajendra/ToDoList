import React from "react";

import classNames from "classnames";

import AddItemFormContainer from "../components/AddItemForm";
import FilterControlContainer from "../components/FilterMenu";
import TaskListContainer from "../components/TaskList";

import {
  createStyles,
  Theme,
  withStyles,
  WithStyles
} from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import AddCircle from "@material-ui/icons/AddCircle";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flex: 1
    },
    button: {
      margin: theme.spacing(1),
      width: 200,
      background: "#FF4500",
      color: "white",
    },
    rightIcon: {
      transition: "transform 0.5s",
      marginLeft: theme.spacing(1)
    },
    filler: {
      flex: 1
    },
    formVisible: {
      transform: "rotate(45deg)"
    },
    collapse: {
      width: "100%"
    }
  });

interface IProps extends WithStyles<typeof styles> { }

interface IState {
  showAddNewItem: boolean;
}

class HomeView extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      showAddNewItem: false
    };
  }

  private handelAddButton = () => {
    this.setState((prevState: IState) => {
      return {
        showAddNewItem: !prevState.showAddNewItem
      };
    });
  };

  public render() {
    const { classes } = this.props;
    const isFormVisible = this.state.showAddNewItem;

    return (
      <Paper className={classes.root}>
        <Grid container={true} alignItems="stretch">
          <Grid item={true} xs={12}>
            <Toolbar className={classes.filler}>
              <Button
                variant="contained"
                onClick={this.handelAddButton}
                className={classes.button}
                endIcon={
                  <AddCircle
                    className={classNames(classes.rightIcon, {
                      [classes.formVisible]: isFormVisible
                    })}
                  />
                }
              >
                {isFormVisible ? "Close" : "Add New Item"}
              </Button>
              <div className={classes.filler} />
              <FilterControlContainer />
            </Toolbar>
          </Grid>
          <Divider style={{ width: "100%" }} />
          <Collapse in={isFormVisible} className={classes.collapse}>
            <AddItemFormContainer />
            <Divider />
          </Collapse>
          <Grid item={true} xs={12} className={`list-container`}>
            <TaskListContainer />
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

export default withStyles(styles)(HomeView);
