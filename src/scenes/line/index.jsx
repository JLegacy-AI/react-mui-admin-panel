import React from "react";
import LineChart from "../../components/LineChart";
import { Box } from "@mui/material";
import Header from "../../components/Header";

const Line = () => {
  return (
    <Box m="20px" height="75vh">
      <Header title="Line Chart" subtitle="Line Chart to show behavior" />
      <LineChart />
    </Box>
  );
};

export default Line;
