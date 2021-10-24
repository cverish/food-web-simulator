import React, { useState } from "react";
import { Box, Typography as T, Button } from "@mui/material";
import { DeleteForever } from "@mui/icons-material";
import { SnackbarAlert } from "./";
import { useDataset } from "../DatasetContext";

const styles = {
  bold: {
    fontWeight: 600,
  },
};

const ClearData = () => {
  const { deleteAllDatasets } = useDataset();
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleClick = () => {
    setSnackbarOpen(true);
    // timeout to allow snackbar to display for specified time
    // due to state change in context
    setTimeout(function () {
      deleteAllDatasets();
    }, 3000);
  };

  return (
    <Box sx={{ textAlign: "center" }}>
      <T>
        The data for this app is stored locally - it is not uploaded anywhere.
      </T>
      <T> You can delete all datasets by clicking the button below.</T>
      <T sx={styles.bold}>This action cannot be undone.</T>
      <Button
        startIcon={<DeleteForever />}
        size="large"
        color="error"
        variant="outlined"
        onClick={() => handleClick()}
        sx={{ mt: 2 }}
      >
        Delete all data
      </Button>
      <SnackbarAlert
        message="All data deleted successfully."
        severity="error"
        snackbarOpen={snackbarOpen}
        setSnackbarOpen={setSnackbarOpen}
      />
    </Box>
  );
};

export default ClearData;
