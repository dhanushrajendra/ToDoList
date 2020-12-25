import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { IToDoListProps } from ".";
import TaskItem from "../Task";

const ToDoList: React.FC<IToDoListProps> = ({ toDoList }) => {
  return (
    <Table className="task-list">
      <TableHead>
        <TableRow className="task-list-header">
          <TableCell align="center">Status</TableCell>
          <TableCell>Task Name</TableCell>
          <TableCell colSpan={2} />
        </TableRow>
      </TableHead>
      <TableBody>
        {toDoList.map((item, index) => {
          return (
            <TaskItem
              key={index}
              id={item.id}
              isCompleted={item.isCompleted}
              value={item.value}
            />
          );
        })}
      </TableBody>
    </Table>
  );
};

export default ToDoList;
