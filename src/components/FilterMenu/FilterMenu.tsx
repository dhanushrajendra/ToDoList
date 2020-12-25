import React from "react";

import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import FilterList from "@material-ui/icons/FilterList";

import { IFilterContainerProps } from ".";
import { FILTER_MENU } from "../../constants/menu";
import FilterMenuItem from "./FilterMenuItem";

interface IState {
  showFilterMenu: boolean;
  anchorEl: null | HTMLElement;
}

class FilterMenu extends React.Component<IFilterContainerProps, IState> {
  constructor(props: IFilterContainerProps) {
    super(props);
    this.state = {
      anchorEl: null,
      showFilterMenu: false
    };
  }

  private handleItemClick = (value: string) => {
    this.handleMenuClose();
    this.props.applyFilter(value);
  };

  private handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
    event.persist();
    this.setState({
      anchorEl: event.currentTarget,
      showFilterMenu: true
    });
  };

  private handleMenuClose = () => {
    this.setState({ anchorEl: null, showFilterMenu: false });
  };

  public render() {
    return (
      <div>
        <IconButton
          onClick={this.handleOpenMenu}
          className="filter-button"
          aria-label="Filter"
          aria-owns={this.state.anchorEl ? "filter-menu" : undefined}
          aria-haspopup="true"
        >
          <FilterList />
        </IconButton>
        <Menu
          open={this.state.showFilterMenu}
          onClose={this.handleMenuClose}
          anchorEl={this.state.anchorEl}
          transformOrigin={{
            vertical: "top",
            horizontal: "right"
          }}
        >
          {FILTER_MENU.map(item => {
            return (
              <FilterMenuItem
                key={item.value}
                value={item.value}
                label={item.label}
                handleClick={this.handleItemClick}
              />
            );
          })}
        </Menu>
      </div>
    );
  }
}

export default FilterMenu;
