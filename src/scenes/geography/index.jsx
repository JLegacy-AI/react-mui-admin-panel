import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";

const Geo = () => {
  return (
    <Box m="20px" height="75vh">
      <Header
        title="Geography"
        subtitle="Geography Chart to show data on geo"
      />
      <GeographyChart />
    </Box>
  );
};

export default Geo;
