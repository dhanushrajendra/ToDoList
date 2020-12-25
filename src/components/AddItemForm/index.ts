import AddItemForm from "./AddItemForm";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import { addTaskItem } from "../../actions";

export interface IAddItemContainerProps {
  addTaskItem: (taskName: string) => void;
}

const mapDispatchToProps = (dispatch: Dispatch): IAddItemContainerProps => ({
  addTaskItem: (taskName: string) =>
    dispatch(addTaskItem(taskName))
});

const AddItemContainer = connect(
  null,
  mapDispatchToProps
)(AddItemForm);

export default AddItemContainer;
