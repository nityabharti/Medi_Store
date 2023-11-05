import React from "react";
import Banner from "./Banner";
import { Box, styled } from "@mui/material";

const Component = styled(Box)`
  ${"" /* padding: 10px 10px; */}
`;

const Home = () => {
  return (
    <>
      <Component>
        <Banner />
      </Component>
    </>
  );
};

export default Home;
