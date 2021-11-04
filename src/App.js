import React from "react";
import Routes from "./Routes";
import { Layout } from "./components";
import { DatasetProvider } from "./DatasetContext";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2ca2d6",
    },
    tertiary: {
      main: "#A8B0A7",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DatasetProvider>
        <Layout>
          <Routes />
        </Layout>
      </DatasetProvider>
    </ThemeProvider>
  );
};

export default App;
