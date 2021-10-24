import React from "react";
import { Box, TextField } from "@mui/material";
import { JsonTextInput } from "./";
import { validateJson } from "../utils/validator";
import { useDataset } from "../DatasetContext";

const styles = {
  action: {
    display: "flex",
    alignItems: "center",
    mb: 3,
  },
  button: {
    "& .MuiButton-root": {
      mx: 1,
      height: 40,
    },
  },
};

const DatasetDisplay = ({
  add = false,
  edit = false,
  actionBar,
  actionButtons,
  jsonTextArea,
  setJsonTextArea,
  datasetName,
  setDatasetName,
  errors,
  setErrors,
}) => {
  const { datasets, dataset } = useDataset();

  const allDatasetNames = datasets.map((item) => item.name.toLowerCase());

  return (
    <Box>
      <Box sx={styles.action}>{actionBar}</Box>
      <Box sx={{ mt: 1 }}>
        <JsonTextInput
          error={errors.length > 0 && jsonTextArea.length > 0}
          value={jsonTextArea}
          label="dataset"
          onChange={(e) => {
            setErrors(validateJson(e.target.value));
            setJsonTextArea(e.target.value);
          }}
          rows={12}
          disabled={dataset.key === 0 && edit}
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Box>
          <TextField
            error={
              (!datasetName.trim().length > 0 &&
                jsonTextArea.length > 0 &&
                errors.length === 0) ||
              (allDatasetNames.includes(datasetName.toLowerCase()) &&
                !(edit && datasetName === dataset.name))
            }
            value={datasetName}
            onChange={(e) => setDatasetName(e.target.value)}
            label={edit ? "edit dataset name" : "dataset name (required)"}
            sx={{ width: 300 }}
            helperText={"dataset name must be unique"}
            size="small"
            disabled={dataset.key === 0 && edit}
          />
        </Box>
        <Box flexGrow={1} />
        <Box sx={styles.button}>{actionButtons}</Box>
      </Box>
    </Box>
  );
};

export default DatasetDisplay;
