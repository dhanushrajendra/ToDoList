import React from "react";

import MenuItem from "@material-ui/core/MenuItem";

interface IProps {
  value: string;
  label: string;
  handleClick: (value: string) => void;
}

const FilterMenuItem: React.FC<IProps> = ({ value, label, handleClick }) => {
  const onItemClick = (event: React.MouseEvent<HTMLElement>) => {
    handleClick(value);
  };

  return (
    <MenuItem value={value} onClick={onItemClick}>
      {label}
    </MenuItem>
  );
};

export default FilterMenuItem;
