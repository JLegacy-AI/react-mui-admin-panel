import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import PieChart from "../../components/PieChart";

const Pie = () => {
  return (
    <Box m="20px" height="75vh">
      <Header
        title="PieChart"
        subtitle="PieChart to Show the information about the Client"
      />
      <PieChart />
    </Box>
  );
};

export default Pie;
