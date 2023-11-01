import React from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import logo from "../../assets/logo.png";

//components
import Search from "./Search";
import CustomButtons from "./CustomButtons";

const Styledheader = styled(AppBar)`
  background: #0e6621;
  height: 35px;
`;

const Component = styled(Box)`
  margin-top: 8%;
  margin-left: 6%;
`;
const Header = () => {
  return (
    <Styledheader>
      <Toolbar>
        <Component>
          <img src={logo} alt="logo" style={{ width: 72 }} />
        </Component>
        <Search />
        <Box>
          <CustomButtons />
        </Box>
      </Toolbar>
    </Styledheader>
  );
};

export default Header;
