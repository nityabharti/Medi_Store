import React from "react";
import { Box, styled } from "@mui/material";
import HouseSharpIcon from "@mui/icons-material/HouseSharp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const NavbarContainer = styled(Box)`
  height: 45px;
  background-color: #ffeedd;
  margin-top: 10%;
  padding-top: 20px;
  padding-left: 20%;
  padding-right: 20%;
  display: flex;
`;

const TextNav = styled(Box)`
  padding-left: 5px;
  padding-right: 5px;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <HouseSharpIcon style={{ paddingRight: "25px" }} />
      <TextNav>Health Care</TextNav>
      <ExpandMoreIcon />
      <TextNav>Home Care</TextNav>
      <ExpandMoreIcon />
      <TextNav>Personal Care</TextNav>
      <ExpandMoreIcon />
      <TextNav style={{ paddingRight: "25px" }}>Baby Care</TextNav>
      <TextNav>Food</TextNav>
      <ExpandMoreIcon />
      <TextNav>Ethical</TextNav>
      <ExpandMoreIcon />
      <TextNav>All Products</TextNav>
    </NavbarContainer>
  );
};

export default Navbar;
