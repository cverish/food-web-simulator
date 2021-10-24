import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { Delete } from "@mui/icons-material";
import { DatasetDisplay, DatasetDropdown, SnackbarAlert } from "./";
import { useDataset } from "../DatasetContext";

const DeleteDialog = ({
  dataset,
  deleteDataset,
  dialogOpen,
  setDialogOpen,
  setDeleteSnackbarOpen,
}) => {
  return (
    <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
      <DialogTitle>{`Delete dataset "${dataset.name}"?`}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Are you sure you want to delete this dataset? This action cannot be
          undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          color="error"
          onClick={() => {
            setDeleteSnackbarOpen(true);
            deleteDataset(dataset);
            setDialogOpen(false);
          }}
        >
          Delete Forever
        </Button>
        <Button variant="contained" onClick={() => setDialogOpen(false)}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

const EditDataset = () => {
  const { dataset, editDataset, deleteDataset } = useDataset();

  const [jsonTextArea, setJsonTextArea] = useState(
    JSON.stringify(dataset.data, null, 2)
  );
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    setJsonTextArea(JSON.stringify(dataset.data, null, 2));
    setDatasetName(dataset.name);
  }, [dataset]);

  const [errors, setErrors] = useState([]);
  const [datasetName, setDatasetName] = useState(dataset.name);
  const [editSnackbarOpen, setEditSnackbarOpen] = useState(false);
  const [deleteSnackbarOpen, setDeleteSnackbarOpen] = useState(false);

  const ActionBar = () => {
    return (
      <>
        <Box>
          <DatasetDropdown />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        {dataset.name !== "Sample Dataset" && (
          <Box>
            <Button
              variant="outlined"
              color="error"
              startIcon={<Delete />}
              onClick={() => setDialogOpen(true)}
            >
              Delete Dataset
            </Button>
            <DeleteDialog
              dataset={dataset}
              deleteDataset={deleteDataset}
              dialogOpen={dialogOpen}
              setDialogOpen={setDialogOpen}
              setDeleteSnackbarOpen={setDeleteSnackbarOpen}
            />
          </Box>
        )}
      </>
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
            ) || dataset.key === 0
          }
          onClick={() => handleEdit()}
          variant="contained"
        >
          Save Edits
        </Button>
        <Button
          variant="outlined"
          onClick={() => handleRevert()}
          disabled={dataset.key === 0}
        >
          Revert
        </Button>
      </>
    );
  };

  const handleEdit = () => {
    setEditSnackbarOpen(true);
    const editedDataset = {
      ...dataset,
      data: jsonTextArea,
      name: datasetName,
    };
    editDataset(editedDataset);
  };

  const handleRevert = () => {
    setJsonTextArea(JSON.stringify(dataset.data, null, 2));
    setDatasetName(dataset.name);
    setErrors([]);
  };

  return (
    <>
      <DatasetDisplay
        edit
        actionBar={<ActionBar />}
        actionButtons={<ActionButtons />}
        jsonTextArea={jsonTextArea}
        setJsonTextArea={setJsonTextArea}
        errors={errors}
        setErrors={setErrors}
        datasetName={datasetName}
        setDatasetName={setDatasetName}
      />
      <SnackbarAlert
        message="Dataset updated successfully."
        severity="success"
        snackbarOpen={editSnackbarOpen}
        setSnackbarOpen={setEditSnackbarOpen}
      />
      <SnackbarAlert
        message="Dataset deleted."
        severity="error"
        snackbarOpen={deleteSnackbarOpen}
        setSnackbarOpen={setDeleteSnackbarOpen}
      />
    </>
  );
};

export default EditDataset;
