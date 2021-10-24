import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Dropdown = ({
  label,
  options,
  selected,
  onSelect,
  width = 300,
  ...props
}) => {
  return (
    <FormControl>
      <InputLabel>{label}</InputLabel>
      <Select
        sx={{ width: width }}
        value={selected}
        label={label}
        onChange={onSelect}
        {...props}
      >
        {options.map((item, i) => (
          <MenuItem value={item.value} key={i}>
            {item.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Dropdown;
