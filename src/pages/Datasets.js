import React, { useState } from "react";
import { Box, Typography as T, Tabs, Tab, Divider } from "@mui/material";
import {
  AddCircleOutline,
  Schema,
  Edit,
  DeleteForever,
} from "@mui/icons-material";
import {
  AddDataset,
  EditDataset,
  ViewJsonSchema,
  ClearData,
} from "../components";

const styles = {
  header: { display: "flex", pb: 3, borderBottom: 1, borderColor: "divider" },
  tabs: { borderRight: 1, borderColor: "divider" },
  tab: { borderBottom: 1, borderColor: "divider" },
  activePane: { py: 2, px: 4, height: 475, width: "100%" },
  tabHeader: { pb: 1 },
  tabContent: { pt: 2, height: "100%" },
};

const tabItems = [
  {
    label: "Add Dataset",
    value: 0,
    component: <AddDataset />,
    icon: <AddCircleOutline />,
  },
  {
    label: "Edit Dataset",
    value: 1,
    component: <EditDataset />,
    icon: <Edit />,
  },
  {
    label: "View Schema",
    value: 2,
    component: <ViewJsonSchema />,
    icon: <Schema />,
  },
  {
    label: "Clear Data",
    value: 3,
    component: <ClearData />,
    icon: <DeleteForever />,
  },
];

const Datasets = () => {
  const [tab, setTab] = useState(0);

  const ActivePane = ({ tabItem }) => {
    return (
      <Box>
        <Box sx={styles.tabHeader}>
          <T variant="h5">{tabItem.label}</T>
        </Box>
        <Divider />
        <Box sx={styles.tabContent}>{tabItem.component}</Box>
      </Box>
    );
  };

  return (
    <Box>
      <Box sx={{}}>
        <Box sx={styles.header}>
          <T variant="h4">Manage Datasets</T>
        </Box>
        <Box></Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <Tabs
          orientation="vertical"
          value={tab}
          onChange={(e, newValue) => setTab(newValue)}
          sx={styles.tabs}
        >
          {tabItems.map((item) => (
            <Tab
              sx={styles.tab}
              icon={item.icon}
              label={item.label}
              key={item.value}
            />
          ))}
        </Tabs>
        <Box sx={styles.activePane}>
          {<ActivePane tabItem={tabItems.find((item) => item.value === tab)} />}
        </Box>
      </Box>
    </Box>
  );
};

export default Datasets;
