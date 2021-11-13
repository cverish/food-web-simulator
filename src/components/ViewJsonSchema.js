import React from "react";
import { Box, Typography as T } from "@mui/material";
import { JsonTextInput } from "./";
import { dataJsonSchema } from "../json/dataJsonSchema";

const ViewJsonSchema = () => {
  return (
    <Box sx={{ "& .Mui-disabled": { color: "#000000" } }}>
      <T sx={{ mb: 2 }}>
        Below is the JSON schema used to validate input data. An extra
        attribute, "singular" set to true, may be added if you are picky about
        grammatical issues in the simulator. The simulator defaults to plural.
      </T>
      <JsonTextInput
        value={JSON.stringify(dataJsonSchema, null, 2)}
        disabled={true}
        numRows={16}
        width="100%"
      />
    </Box>
  );
};

export default ViewJsonSchema;
