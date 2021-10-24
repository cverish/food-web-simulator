import React from "react";
import { Box, Button, Tooltip } from "@mui/material";
import { FileUpload } from "@mui/icons-material";
import { validateJson } from "../utils/validator";

const UploadButton = ({ setJsonTextArea, setErrors }) => {
  const handleUpload = (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file, "UTF-8");
    fileReader.onload = (e) => {
      const result = e.target.result;
      try {
        const data = JSON.parse(result);
        setJsonTextArea(JSON.stringify(data, null, 2));
        setErrors(validateJson(result));
      } catch {
        setErrors([{ stack: "Not a valid JSON document" }]);
      }
    };
  };

  return (
    <Box>
      <input
        accept="application/JSON, text/plain"
        style={{ display: "none" }}
        id="button-file"
        type="file"
        onChange={(e) => handleUpload(e)}
      />
      <label htmlFor="button-file">
        <Tooltip
          title="Your data is stored locally and will not be uploaded to the cloud."
          placement="bottom-start"
          arrow
        >
          <Button
            component="span"
            variant="outlined"
            sx={{ marginRight: 1 }}
            startIcon={<FileUpload />}
          >
            Upload
          </Button>
        </Tooltip>
      </label>
    </Box>
  );
};

export default UploadButton;
