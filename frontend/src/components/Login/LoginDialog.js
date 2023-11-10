import React from "react";
import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #ffeedd
    url(https://img.freepik.com/free-psd/3d-background-with-medical-elements-sale_23-2150732527.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1699228800&semt=ais)
    center no-repeat;

  height: 100%;
  width: 40%;
`;

const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <Box fontStyle={{ display: "flex", height: "100%" }}>
          <Image></Image>
          <Box>
            <TextField variant="standard" label="Enter Email/Mobile number" />
            <TextField variant="standard" label="Enter Password" />
            <TextField>
              By continuing , you agree to MediStore's Terms of use and Privacy
              Policy.
            </TextField>
            <Button>Login</Button>
            <Typography>OR</Typography>
            <Button>Request OTP</Button>
            <Typography>New to MediStore? Create an account</Typography>
          </Box>
        </Box>
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
