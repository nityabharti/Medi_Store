import React from "react";
import { useState } from "react";

import { Box, styled } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

//Components

import LoginDialog from "../Login/LoginDialog";

const CustomContainer = styled(Box)`
  display: flex;
  align-items: center;
  margin-top: 30%;
  margin-left: 50px;
`;

const IconWrapper = styled(Box)`
  background: #f7f6f1;
  border-radius: 18px;
  padding: 6px;
  margin-right: 30px;
  cursor: pointer;
`;

const TextWrapper = styled(Box)`
  color: black;
  margin-right: 10px;
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  };
  return (
    <CustomContainer>
      <IconWrapper>
        <FavoriteBorderIcon style={{ color: "black" }} />
      </IconWrapper>
      <IconWrapper>
        <ShoppingCartOutlinedIcon style={{ color: "black" }} />
      </IconWrapper>
      <TextWrapper onClick={() => openDialog()}>Log In / Sign Up</TextWrapper>
      <LoginDialog open={open} setOpen={setOpen} />
      <IconWrapper>
        <AccountCircleOutlinedIcon style={{ color: "black" }} />
      </IconWrapper>
    </CustomContainer>
  );
};

export default CustomButtons;
