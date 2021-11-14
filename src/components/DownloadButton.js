import React from "react";
import { Box, Button, Tooltip } from "@mui/material";
import { FileDownload } from "@mui/icons-material";
import { useDataset } from "../DatasetContext";

const downloadFile = ({ data, fileName, fileType }) => {
  // Create a blob with the data we want to download as a file
  const blob = new Blob([data], { type: fileType });
  // Create an anchor element and dispatch a click event on it
  // to trigger a download
  const a = document.createElement("a");
  a.download = fileName;
  a.href = window.URL.createObjectURL(blob);
  const clickEvt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  a.dispatchEvent(clickEvt);
  a.remove();
};

const DownloadButton = () => {
  const { dataset } = useDataset();

  const exportToJson = (e) => {
    e.preventDefault();
    // remove special characters and spaces from dataset name
    const scrubbedName = dataset.name
      .replace(/[^\w\s-]/gi, "")
      .replace(" ", "-");
    downloadFile({
      data: JSON.stringify(dataset.data),
      fileName: `Food_Web_Dataset_${scrubbedName}.json`,
      fileType: "text/json",
    });
  };

  return (
    <Box>
      <Tooltip
        title="Download your file to JSON. Ensure you have saved any edits to your dataset before downloading."
        placement="bottom-start"
        arrow
      >
        <Button
          component="span"
          variant="outlined"
          sx={{ marginRight: 1 }}
          startIcon={<FileDownload />}
          onClick={(e) => exportToJson(e)}
        >
          Download
        </Button>
      </Tooltip>
    </Box>
  );
};

export default DownloadButton;
