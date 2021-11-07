import React, { useState, useEffect, createContext, useContext } from "react";
import sampleData from "./json/sampleData.json";

const DatasetContext = createContext();

const sampleDataObj = {
  name: "Sample Dataset",
  data: sampleData,
  active: true,
  key: 0,
};

const parseJson = (jsonString) => {
  return JSON.parse(
    jsonString
      .split("\n")
      .map((line) => line.trim())
      .join("")
  );
};

// gets all datasets from local storage
const getAllDatasets = () => {
  return JSON.parse(localStorage.getItem("foodWebDatasets"));
};

export const useDataset = () => {
  const context = useContext(DatasetContext);
  if (!context) {
    throw new Error("useDataset must be used within DatasetProvider");
  }
  return context;
};

export const DatasetProvider = ({ children }) => {
  const [datasets, setDatasets] = useState(getAllDatasets());
  const [dataset, setDataset] = useState();
  const [loading, setLoading] = useState(true);

  // updates the list of datasets
  const addDataset = (json) => {
    const dataObj = {
      ...json,
      data: parseJson(json.data),
    };

    const nextKey = Math.max(datasets.map((item) => item.key)) + 1;

    const newDataObj = { ...dataObj, active: true, key: nextKey };
    datasets.map((item) => (item.active = false));
    setDatasets([...datasets, newDataObj]);
  };

  const setActiveDataset = (dataObj) => {
    const updatedDatasets = datasets.map((item) => ({
      ...item,
      active: dataObj.name === item.name,
    }));
    setDatasets(updatedDatasets);
  };

  const editDataset = (dataObj) => {
    const updatedDatasets = datasets.map((item) =>
      item.key !== dataObj.key
        ? item
        : { ...item, ...dataObj, data: parseJson(dataObj.data) }
    );
    setDatasets(updatedDatasets);
  };

  const deleteDataset = (dataObj) => {
    const updatedDatasets = datasets.filter((item) => dataObj.key !== item.key);
    // setting the sample dataset as the active dataset after deletion
    updatedDatasets.find((item) => item.key === 0).active = true;
    setDatasets(updatedDatasets);
  };

  const deleteAllDatasets = () => {
    setLoading(true);
    localStorage.removeItem("foodWebDatasets");
    setDatasets([{ ...sampleDataObj }]);
  };

  useEffect(() => {
    // populate localstorage with sample data if no data exists
    if (!datasets && loading) {
      setDatasets([{ ...sampleDataObj }]);
      setDataset(...sampleDataObj);
    } else {
      setDataset(datasets.find((item) => item.active));
    }
    // update local storage
    localStorage.setItem("foodWebDatasets", JSON.stringify(datasets));
    setLoading(false);
  }, [datasets, loading]);

  const providerValue = {
    loading,
    dataset,
    datasets,
    setActiveDataset,
    addDataset,
    editDataset,
    deleteDataset,
    deleteAllDatasets,
  };
  return (
    <DatasetContext.Provider value={providerValue}>
      {children}
    </DatasetContext.Provider>
  );
};
