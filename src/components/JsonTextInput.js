import React from "react";
import { TextField } from "@mui/material";

const styles = {
  jsonTextArea: {
    width: "100%",
    "& .MuiInputBase-root": {
      fontFamily: "Monospace",
      fontSize: 12,
      padding: 1,
      backgroundColor: "white",
    },
    "& .Mui-disabled .MuiInputBase-input": {
      WebkitTextFillColor: "#000000",
    },
  },
};

const JsonTextInput = ({
  value,
  error = false,
  onChange = () => {},
  numRows = 8,
  sx,
  ...props
}) => {
  return (
    <TextField
      multiline
      label="dataset"
      value={value}
      onChange={onChange}
      error={error}
      helperText={error && value.length ? "not valid JSON" : " "}
      rows={numRows}
      sx={{ ...styles.jsonTextArea, ...sx }}
      {...props}
    />
  );
};

export default JsonTextInput;
