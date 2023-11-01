import React from "react";
import Banner from "./Banner";
import { Box } from "@mui/material";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
    <Box style={{ marginTop: 10 }}>
      <Banner />
      <p>hello from home</p>
    </Box>
    </Fragment>
  );
};

export default Home;
