import React from "react";
import { Box, Typography as T } from "@mui/material";
import { JsonTextInput } from "./";
import { dataJsonSchema } from "../json/dataJsonSchema";

const ViewJsonSchema = () => {
  return (
    <Box sx={{ "& .Mui-disabled": { color: "#000000" } }}>
      <T sx={{ mb: 2 }}>
        Below is the JSON schema used to validate input data.
      </T>
      <JsonTextInput
        value={JSON.stringify(dataJsonSchema, null, 2)}
        disabled={true}
        numRows={18}
        width="100%"
      />
    </Box>
  );
};

export default ViewJsonSchema;
