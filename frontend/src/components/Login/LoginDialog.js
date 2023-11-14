import React from "react";
import { useState } from "react";

import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";

import { authenticateSignup } from "../../service/api";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
  display: flex;
`;

const Image = styled(Box)`
  background: #ffeedd
    url(https://img.freepik.com/free-psd/3d-background-with-medical-elements-sale_23-2150732527.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais)
    center/contain no-repeat;

  height: 82%;
  width: 28%;
  padding: 30px 35px;
  & > p,
  & > h5 {
    font-weight: 450;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > Button,
  & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  color: white;
  height: 48px;
  border-radius: 2px;
`;

const RequestOTP = styled(Button)`
  text-transform: none;
  background: #fff;

  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px rgb(0 0 0/ 20%);
`;

const Text = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your orders, Wishlist and Recommendations",
  },
  signUp: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "SignUp with your mobile number to get started",
  },
};

const signupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);
  const [signup, setSignup] = useState(signupInitialValues);

  const handleClose = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
  };

  const toggleSignUp = () => {
    toggleAccount(accountInitialValues.signUp);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  };

  const signupUser = async () => {
    let response = await authenticateSignup(signup);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        <Image style={{ display: "flex", height: "100%" }}>
          <Typography variant="h5">{account.heading}</Typography>
          <Typography style={{ marginTop: 20 }}>
            {account.subHeading}
          </Typography>
        </Image>
        {account.view === "login" ? (
          <Wrapper>
            <TextField variant="standard" label="Enter Email/Mobile number" />
            <TextField variant="standard" label="Enter Password" />
            <Text>
              By continuing, you agree to MediStore's Terms of use and Privacy
              Policy.
            </Text>
            <LoginButton>Login</LoginButton>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <RequestOTP>Request OTP</RequestOTP>
            <CreateAccount onClick={() => toggleSignUp()}>
              New to MediStore? Create an account
            </CreateAccount>
          </Wrapper>
        ) : (
          <Wrapper>
            <TextField
              variant="standard"
              name="firstname"
              onChange={(e) => onInputChange(e)}
              label="Enter FirstName"
            />
            <TextField
              variant="standard"
              name="lastname"
              onChange={(e) => onInputChange(e)}
              label="Enter LastName"
            />
            <TextField
              variant="standard"
              name="username"
              onChange={(e) => onInputChange(e)}
              label="Enter UserName"
            />
            <TextField
              variant="standard"
              name="email"
              onChange={(e) => onInputChange(e)}
              label="Enter Email"
            />
            <TextField
              variant="standard"
              name="password"
              onChange={(e) => onInputChange(e)}
              label="Enter Password"
            />
            <TextField
              variant="standard"
              name="phone"
              onChange={(e) => onInputChange(e)}
              label="Enter Phone number"
            />

            <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
          </Wrapper>
        )}
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
