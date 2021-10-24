import React from "react";
import { Dropdown } from "./";
import { useDataset } from "../DatasetContext";

const styles = {
  datasetDropdown: {
    width: 250,
    mr: 2,
  },
};

const DatasetDropdown = () => {
  const { datasets, setActiveDataset } = useDataset();

  const datasetDropdownOptions = datasets
    .map((item) => ({ label: item.name, value: { ...item } }))
    .sort((a, b) => (a.label < b.label ? -1 : 1));
  const activeDataset = datasetDropdownOptions.find(
    (item) => item.value.active
  );

  return (
    <Dropdown
      label="choose dataset"
      options={datasetDropdownOptions}
      selected={activeDataset ? activeDataset.value : ""}
      onSelect={(e) => {
        setActiveDataset(e.target.value);
      }}
      sx={styles.datasetDropdown}
      size="small"
    />
  );
};

export default DatasetDropdown;
