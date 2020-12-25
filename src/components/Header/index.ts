import Header from "./Header";

import { connect } from "react-redux";
import { Dispatch } from "redux";

import { toggleDrawer } from "../../actions";
import { IReduxStore } from "../../model/store";

interface IStoreProps {
  isDrawerOpen: boolean;
}

interface IHeaderDispatch {
  toggleDrawer: () => void;
}

export interface IHeaderContainerProps extends IStoreProps, IHeaderDispatch {}

const mapStoreToProps = (store: IReduxStore): IStoreProps => {
  return {
    isDrawerOpen: store.options.isDrawerOpen
  };
};

const mapDispatchToProps = (dispatch: Dispatch): IHeaderDispatch => ({
  toggleDrawer: () => dispatch(toggleDrawer())
});

const HeaderContainer = connect(
  mapStoreToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
