import React from "react";
import { Box } from "@mui/material";
import BarChart from "../../components/BarChart";
import Header from "../../components/Header";

const Bar = () => {
  return (
    <Box m="20px" height="75vh">
      <Header title="BarChart" subtitle="Informtion display on BarChart" />
      <BarChart />
    </Box>
  );
};

export default Bar;
