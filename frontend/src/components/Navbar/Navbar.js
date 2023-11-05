import React from "react";
import { Box, styled } from "@mui/material";
import HouseSharpIcon from "@mui/icons-material/HouseSharp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NavbarContainer = styled(Box)`
  height: 55px;
  background-color: #ffeedd;
  position: fixed;
  top: 18%;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center; /* Horizontally center the content */
  z-index: 100;
`;

const TextNav = styled(Box)`
  padding: 0 5px;
  display: flex;
  align-items: center; /* Vertically center the content */
`;

const IconText = styled(Box)`
  display: flex;
  align-items: center;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <IconText>
        <HouseSharpIcon style={{ paddingRight: "5px" }} />
        <TextNav>Health Care</TextNav>
        <ExpandMoreIcon />
      </IconText>
      <IconText>
        <TextNav>Home Care</TextNav>
        <ExpandMoreIcon />
      </IconText>
      <IconText>
        <TextNav>Personal Care</TextNav>
        <ExpandMoreIcon />
      </IconText>
      <IconText>
        <TextNav style={{ paddingRight: "5px" }}>Baby Care</TextNav>
      </IconText>
      <IconText>
        <TextNav>Food</TextNav>
        <ExpandMoreIcon />
      </IconText>
      <IconText>
        <TextNav>Ethical</TextNav>
        <ExpandMoreIcon />
      </IconText>
      <IconText>
        <TextNav>All Products</TextNav>
      </IconText>
    </NavbarContainer>
  );
};

export default Navbar;
