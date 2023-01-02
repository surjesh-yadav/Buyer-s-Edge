import React from "react";
import {
  Dialog,
  Box,
  TextField,
  Typography,
  Button,
  styled,
} from "@mui/material";
import { useState } from "react";
import { authenticateSignUp } from "../../service/Api";
const Component = styled(Box)`
  height: 99vh;
  width: 90vh;
`;
const LoginButton = styled(Button)`
  text-transform: none;
  background-color: orange;
  color: black;
  height: 30px;
  border-radius: 31px;
  margin-top: 6px;
  margin-bottom: 10px;
  cursor: pointer;
`;
const SignupButton = styled(Button)`
  text-transform: none;
  background-color: orange;
  color: black;
  height: 30px;
  border-radius: 31px;
  margin-top: 6px;
  margin-bottom: 10px;
  cursor: pointer;
`;

const OtpButton = styled(Button)`
  text-transform: none;
  background-color: Orange;
  color: black;
  height: 30px;
  border-radius: 31px;
  margin-top: 6px;
  cursor: pointer;
`;

const WraperLogin = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  width: 100%;
  background-color: white;
`;
const WraperSignup = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  width: 100%;
  background-color: white;
`;

const Text = styled(Typography)`
  font-size: 12px;
  margin-top: 6px;
`;

const CreateAccount = styled(Typography)`
  font-size: 14px;
  margin-top: 6px;
  text-decoration: underline;
  cursor: pointer;
  color: blue;
`;

const initialValue = {
  login: {
    view: "login",
  },
  signup: {
    view: "signup",
  },
};

const initialObject = {
  firstName: "",
  lastName: "",
  userName: "",
  email: "",
  phone: "",
  passsword: "",
};

const LoginDialog = ({ open, setOpen }) => {
  const [account, ToggleAccount] = useState(initialValue.login);
  const [signup, setSignup] = useState(initialObject);
  const handleClose = () => {
    setOpen(false);
  };
  const toggleSignup = () => {
    ToggleAccount(initialValue.login);
  };
  const toggleLogin = () => {
    ToggleAccount(initialValue.signup);
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };

  const signupUser = async () => {
    await authenticateSignUp(signup);
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <Component>
        <Box style={{ display: "flex", height: "100%" }}>
          {account.view === "login" ? (
            <WraperLogin>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Your Email"
                // name="email"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Your Password"
                // name="password"
              />
              <Text>Agree Purchase Zone's Terms And Conditions?</Text>
              <LoginButton>Login</LoginButton>
              <Typography style={{ textAlign: "center" }}>OR</Typography>
              <OtpButton>Request OTP</OtpButton>
              <CreateAccount onClick={(e) => toggleLogin(e)}>
                New user? Create an account
              </CreateAccount>
            </WraperLogin>
          ) : (
            <WraperSignup>
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter FirstName"
                name="firstName"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter LastName"
                name="lastName"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter UserName"
                name="userName"
              />
              <TextField
                type="email"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Email"
                name="email"
              />
              <TextField
                type="number"
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Phone Number"
                name="phone"
              />
              <TextField
                variant="standard"
                onChange={(e) => onInputChange(e)}
                label="Enter Password"
                name="password"
              />
              <SignupButton onClick={() => signupUser()}>Continue</SignupButton>
              <CreateAccount onClick={(e) => toggleSignup(e)}>
                Have an Account? Click here to login
              </CreateAccount>
            </WraperSignup>
          )}
        </Box>
      </Component>
    </Dialog>
  );
};
export default LoginDialog;
