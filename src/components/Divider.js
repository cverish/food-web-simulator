import React from "react";
import { Divider as MuiDivider } from "@mui/material";

const styles = {
  divider: { borderWidth: "1px", marginTop: 3, marginBottom: 3 },
};

const Divider = () => {
  return <MuiDivider sx={styles.divider} />;
};

export default Divider;
