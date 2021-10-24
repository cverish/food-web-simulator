import React from "react";
import Routes from "./Routes";
import { Layout } from "./components";
import { DatasetProvider } from "./DatasetContext";

const App = () => {
  return (
    <DatasetProvider>
      <Layout>
        <Routes />
      </Layout>
    </DatasetProvider>
  );
};

export default App;
