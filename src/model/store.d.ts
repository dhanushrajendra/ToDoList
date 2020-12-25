export interface IReduxStore {
  toDoList: ITodoList;
  options: IOptions;
}

export interface ITodoList {
  [key: string]: IToDoItem;
}

export interface IToDoItem {
  id: string;
  value: string;
  isCompleted: boolean;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IOptions {
  filterType: string;
  isDrawerOpen: boolean;
}
