import React from "react";

import classNames from "classnames";

import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TextField from "@material-ui/core/TextField";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import SaveIcon from "@material-ui/icons/Save";

import { ITaskProps } from ".";

interface IProps {
  id: string;
  isCompleted: boolean;
  value: string;
}

interface IStates {
  isEditing: boolean;
  newItem: string;
}

class TaskItem extends React.Component<IProps & ITaskProps, IStates> {
  constructor(props: IProps & ITaskProps) {
    super(props);
    this.state = {
      isEditing: false,
      newItem: this.props.value,
    };
  }

  private onTextUpdate = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ newItem: event.target.value });
  };

  private toggleStatus = () => {
    this.props.toggleTask(this.props.id);
  };

  private updateTask = () => {
    this.setState({ isEditing: false }, () => {
      this.props.updateTask(
        this.props.id,
        this.state.newItem,
      );
    });
  };

  private handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      this.updateTask();
    }
  };

  private removeTask = () => {
    this.props.removeTask(this.props.id);
  };

  private toggleEdit = () => {
    this.setState({ isEditing: true });
  };

  private renderForm = () => {
    return (
      <TableRow>
        <TableCell colSpan={5}>
          <Grid
            container={true}
            spacing={6}
            alignItems="center"
            className="edit-row"
          >
            <Grid item={true} md={10} xs={12}>
              <TextField
                style={{ width: "100%" }}
                label="Task Name"
                onChange={this.onTextUpdate}
                value={this.state.newItem}
                onKeyDown={this.handleKeyPress}
              />
            </Grid>
            <Grid item={true} md={2} sm={1} xs={4} className="flex-center">
              <IconButton aria-label="Save" onClick={this.updateTask}>
                <SaveIcon />
              </IconButton>
            </Grid>
          </Grid>
        </TableCell>
      </TableRow>
    );
  };

  private renderItem = () => {
    const itemClass = this.props.isCompleted ? "completed" : "active";
    return (
      <TableRow className={itemClass}>
        <TableCell className="icon">
          <Checkbox
            onClick={this.toggleStatus}
            checked={this.props.isCompleted}
          />
        </TableCell>
        <TableCell className={classNames({ 'text-strike': this.props.isCompleted })}>
          {this.props.value}
        </TableCell>
        <TableCell className="icon">
          <IconButton aria-label="Edit" onClick={this.toggleEdit}>
            <EditIcon />
          </IconButton>
        </TableCell>
        <TableCell className="icon">
          <IconButton aria-label="Delete" onClick={this.removeTask}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  };

  public render() {
    return this.state.isEditing ? this.renderForm() : this.renderItem();
  }
}

export default TaskItem;
