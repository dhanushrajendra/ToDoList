import C from "../constants";
import { IAction, IOptions } from "../model/store";

export const defaultStore: IOptions = {
  filterType: "all",
  isDrawerOpen: false
};

export default function options(
  state: IOptions = defaultStore,
  action: IAction
): IOptions {
  switch (action.type) {
    case C.APPLY_FILTER: {
      return {
        ...state,
        filterType: action.payload
      };
    }
    case C.TOGGLE_DRAWER: {
      return {
        ...state,
        isDrawerOpen: !state.isDrawerOpen
      };
    }
    default: {
      return { ...state };
    }
  }
}
