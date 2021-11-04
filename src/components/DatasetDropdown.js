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

  const datasetDropdownOptions = datasets.map((item) => ({
    label: item.name,
    value: { ...item },
  }));

  const activeDataset = datasetDropdownOptions.find(
    (item) => item.value.active
  );

  return (
    <Dropdown
      label="choose dataset"
      options={datasetDropdownOptions}
      sort
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
