import React from "react";
import { Box } from "@mui/material";
import * as yup from "yup";
import useMediaQuery from "@mui/material";
import Header from "../../components/Header";
import { Formik } from "formik";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
};

const Form = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };
  return (
    <Box>
      <Header title="Create User" subtitle="Create a new user Profile" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
      ></Formik>
    </Box>
  );
};

export default Form;
