import { connect } from "react-redux";
import { Dispatch } from "redux";
import { applyFilter } from "../../actions";

import { IReduxStore } from "../../model/store";
import FilterMenu from "./FilterMenu";

interface IDispatchProps {
  applyFilter: (value: string) => void;
}

interface IStoreProps {
  filterType: string;
}

export interface IFilterContainerProps extends IStoreProps, IDispatchProps {}

const mapStateToProps = (store: IReduxStore): IStoreProps => {
  return {
    filterType: store.options.filterType
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IDispatchProps => ({
  applyFilter: (value: string) => dispatch(applyFilter(value))
});

const FilterControlContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterMenu);

export default FilterControlContainer;
