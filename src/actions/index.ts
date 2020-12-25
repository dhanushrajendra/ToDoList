import { IAction, IReduxStore } from "../model/store";

import C from "../constants";

export const initTaskList = () => {
  return {
    type: C.INIT_TASK_LIST,
    payload: ""
  };
};

export const addTaskItem = (
  task: string,
): IAction => {
  return {
    type: C.ADD_NEW_TASK,
    payload: {
      taskName: task,
    }
  };
};

export const toggleTask = (id: string): IAction => {
  return {
    type: C.TOGGLE_TASK_STATUS,
    payload: id
  };
};

export const removeTask = (id: string): IAction => {
  return {
    type: C.REMOVE_TASK,
    payload: id
  };
};

export const updateDueDate = (itemId: string, newDate: Date): IAction => {
  return {
    type: C.UPDATE_TASK_DATE,
    payload: { id: itemId, newValue: newDate }
  };
};

export const updateTask = (
  itemId: string,
  newText: string,
): IAction => {
  return {
    type: C.UPDATE_TASK,
    payload: { id: itemId, newValue: newText }
  };
};

export const loadStore = (list: IReduxStore) => {
  return {
    type: C.LOAD_STORE,
    payload: list
  };
};

export const applyFilter = (filterName: string): IAction => {
  return {
    type: C.APPLY_FILTER,
    payload: filterName
  };
};

export const toggleDrawer = (): IAction => {
  return {
    type: C.TOGGLE_DRAWER,
    payload: null
  };
};
