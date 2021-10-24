import React, { useState } from "react";
import { Box, Typography as T } from "@mui/material";
import { Divider, Dropdown, DatasetDropdown } from "../components";
import { ANIMAL, SUN, PLANT } from "../constants/organismTypes";
import { useDataset } from "../DatasetContext";

const styles = {
  description: {
    mb: 4,
    mt: 4,
  },
  desc: {
    typography: "body",
    marginBottom: 2,
  },
  ital: {
    fontStyle: "italic",
    marginRight: "2px",
  },
  bold: {
    fontWeight: 500,
  },
};

const isPredator = (predator, prey) => {
  return predator.prey.includes(prey.value);
};

const PredatorFeedback = ({ currentPredator, currentPrey }) => {
  if (!currentPredator.value || !currentPrey.value) return "";
  const predatorName = currentPredator.name;
  const preyName = currentPrey.name;
  const correct = isPredator(currentPredator, currentPrey);

  const feedbackMessage = {
    [SUN]: `${predatorName} ${
      correct ? "gets" : "does not get"
    } energy from ${preyName}.`,
    [PLANT]: `${predatorName} ${
      correct ? "get" : "do not get"
    } energy from ${preyName}.`,
    [ANIMAL]: `${predatorName} ${
      correct ? "are" : "are not"
    } a predator of ${preyName}.`,
  };

  return (
    <T variant="h4" sx={{ textAlign: "center", mt: 4 }}>
      {feedbackMessage[currentPredator.type]}
    </T>
  );
};

const FoodWebSimulator = () => {
  const { dataset } = useDataset();
  const [currentPredator, setCurrentPredator] = useState("");
  const [currentPrey, setCurrentPrey] = useState("");

  const simulatorDropdownOptions = dataset.data.map((item) => ({
    value: item,
    label: item.name,
  }));

  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flexGrow: 1 }}>
          <T variant="h4">Explore Food Web</T>
        </Box>
        <Box>
          <DatasetDropdown />
        </Box>
      </Box>
      <Divider />
      <Box sx={styles.description}>
        <T sx={styles.desc}>
          <span style={styles.ital}>Whoosh! </span> In a blur of feathers a
          red-tailed hawk swoops up a mouse with its talons.
        </T>
        <T sx={styles.desc}>
          <span style={styles.ital}>Crunch! </span> The person next to you sinks
          their teeth into an apple.
        </T>
        <T sx={styles.desc}>
          <span style={styles.ital}>Rustle! </span> The leaves of a tree flutter
          in the sunlight.
        </T>
        <T sx={styles.desc}>
          Every organism needs energy to live! We can model these relationships
          using a food web. Remember the energy arrows you draw in your food web
          model go in the direction of the flow of energy!
        </T>
        <T sx={styles.desc}>
          This tool will help you determine the roles of each organism and how
          the energy is flowing in the relationships between them.
        </T>
        <T sx={styles.desc}>
          Use the drop downs to explore the relationships between two organisms
          to help you make your food web!
        </T>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 4,
        }}
      >
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <Dropdown
            options={simulatorDropdownOptions}
            selected={currentPredator}
            onSelect={(e) => setCurrentPredator(e.target.value)}
            size="small"
            width={250}
          />
        </Box>
        <Box sx={{ mx: 2 }}>
          <T variant="h5" align="center">
            {currentPredator !== "" && currentPredator.type === ANIMAL
              ? "are a predator of"
              : `${currentPredator.type === SUN ? "gets" : "get"} energy from `}
          </T>
        </Box>
        <Box>
          <Dropdown
            options={simulatorDropdownOptions}
            selected={currentPrey}
            onSelect={(e) => setCurrentPrey(e.target.value)}
            size="small"
            width={250}
          />
        </Box>
        <Box sx={{ flexGrow: 1 }} />
      </Box>
      <Box sx={{ mt: 3 }}>
        <PredatorFeedback
          currentPredator={currentPredator}
          currentPrey={currentPrey}
        />
      </Box>
    </Box>
  );
};

export default FoodWebSimulator;
