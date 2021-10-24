import React from "react";
import { Alert, Snackbar } from "@mui/material";

const SnackbarAlert = ({
  message,
  severity = "info",
  snackbarOpen,
  setSnackbarOpen,
}) => {
  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={6000}
      onClose={() => setSnackbarOpen(false)}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      sx={{ marginBottom: 4 }}
    >
      <Alert onClose={() => setSnackbarOpen(false)} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
