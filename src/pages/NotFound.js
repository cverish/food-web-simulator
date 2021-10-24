import React from "react";
import { Box, Typography as T, Link } from "@mui/material";

const NotFound = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <T variant="h1" sx={{ fontWeight: 600 }}>{`:(`}</T>
      <T variant="h1"> 404 </T>
      <T variant="h3"> Page Not Found</T>
      <Link href={"/simulator"} sx={{ color: "inherit" }}>
        <T variant="h5">{`return to simulator ->`}</T>
      </Link>
    </Box>
  );
};

export default NotFound;
