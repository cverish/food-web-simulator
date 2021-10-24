import React, { useState } from "react";
import { Box, Typography as T, Button } from "@mui/material";
import { DatasetDisplay, UploadButton, SnackbarAlert } from "./";
import { useDataset } from "../DatasetContext";

const AddDataset = () => {
  const { addDataset } = useDataset();

  const [jsonTextArea, setJsonTextArea] = useState("");
  const [datasetName, setDatasetName] = useState("");
  const [errors, setErrors] = useState([]);

  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const ActionBar = () => {
    return (
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <UploadButton setJsonTextArea={setJsonTextArea} setErrors={setErrors} />
        <Box sx={{ pb: 0.5 }}>
          <T> your .txt or .json file, or paste JSON below.</T>
        </Box>
      </Box>
    );
  };

  const ActionButtons = () => {
    return (
      <>
        <Button
          disabled={
            !(
              errors.length === 0 &&
              jsonTextArea.length &&
              datasetName.trim().length
            )
          }
          onClick={() => handleAdd()}
          variant="contained"
        >
          Add Dataset
        </Button>
        <Button variant="outlined" onClick={() => handleClear()}>
          Clear
        </Button>
      </>
    );
  };

  const handleAdd = () => {
    const newDataset = {
      data: jsonTextArea,
      name: datasetName,
    };
    setSnackbarOpen(true);
    // timeout to allow snackbar to display for specified time
    // due to state change in context
    addDataset(newDataset);
    handleClear();
  };

  const handleClear = () => {
    setJsonTextArea("");
    setDatasetName("");
    setErrors([]);
  };

  return (
    <>
      <DatasetDisplay
        add
        actionBar={<ActionBar />}
        actionButtons={<ActionButtons />}
        handleAction={handleAdd}
        handleClear={handleClear}
        jsonTextArea={jsonTextArea}
        setJsonTextArea={setJsonTextArea}
        errors={errors}
        setErrors={setErrors}
        datasetName={datasetName}
        setDatasetName={setDatasetName}
      />
      <SnackbarAlert
        message="Dataset added successfully."
        severity="success"
        snackbarOpen={snackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
      />
    </>
  );
};

export default AddDataset;
