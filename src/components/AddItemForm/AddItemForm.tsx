import React from "react";

import { createStyles, Theme, withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import SaveIcon from "@material-ui/icons/Save";

import { IAddItemContainerProps } from ".";
import { IStyles } from "../../model";

interface IState {
  newItemText: string;
}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      padding: `${theme.spacing(1)}px ${theme.spacing(1) * 3}px`
    }
  });

const defaultState: IState = {
  newItemText: "",
};

class AddItemForm extends React.Component<
  IAddItemContainerProps & IStyles,
  IState
  > {
  constructor(props: IAddItemContainerProps & IStyles) {
    super(props);

    this.state = { ...defaultState };
  }

  private checkForm = () => {
    if (!this.state.newItemText) {
      return false;
    }

    return true;
  };

  private handleSubmit = () => {
    if (this.checkForm()) {
      this.props.addTaskItem(
        this.state.newItemText,
      );

      this.setState({ ...defaultState });
    }
  };

  private handleTextUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newItemText: event.target.value });
  };

  private handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      this.handleSubmit();
    }
  };

  public render() {
    const { classes } = this.props;

    return (
      <Grid item={true} xs={12} className={classes.root}>
        <Grid container={true} alignItems="center" spacing={6}>
          <Grid item={true} md={true} xs={12}>
            <TextField
              label="Add To List"
              className={"add-task-input"}
              onChange={this.handleTextUpdate}
              onKeyPress={this.handleKeyPress}
              value={this.state.newItemText}
            />
          </Grid>
          <Grid item={true} md={1} xs={1} className="center-horizontal">
            <Button
              aria-label="Add"
              variant="contained"
              onClick={this.handleSubmit}
              endIcon={<SaveIcon />}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(AddItemForm);
