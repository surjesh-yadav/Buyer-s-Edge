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
  background: #004aad
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 100%;
  width: 40%;
  padding: 45px 35px;
  flex: 1;
  & > div & > Button & > p {
    margin-top: 20px;
  }
`;

const LoginButton = styled(Button)`
  text-transform: none;
  background-color: orange;
  color: black;
  height: 30px;
  border-radius: 31px;
`;

const OtpButton = styled(Button)`
  text-transform: none;
  background-color: Orange;
  color: black;
  height: 30px;
  border-radius: 31px;
`;

const Wraper2nd = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  background-color: Blue;
`;

const Text = styled(Typography)`
  font-size: 12px;
`;

const LoginDialog = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          <Image>
            <Typography variant="h5">Please_Login</Typography>
            <Typography style={{ marginTop: 20 }}>
              To get access to your account
            </Typography>
          </Image>

          <Wraper2nd>
            <TextField variant="standard" label="Enter Email Id" />
            <TextField variant="standard" label="Enter Password" />
            <Text>
              By Contuining, You have to agree Purchase Zone's Terms And
              Conditions
            </Text>
            <LoginButton>Login</LoginButton>
            <Typography>OR</Typography>
            <OtpButton>Request OTP</OtpButton>
            <Text>
              If you Have not account Please Click here and create a account
            </Text>
          </Wraper2nd>
        </Box>
      </Component>
    </Dialog>
  );
};
export default LoginDialog;
