import React from "react";
import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../login/Login";
import { useState } from "react";
const ButtonCss = styled(Button)`
  color: white;
  height: 30px;
  font-size: 15px;
  text-transform: none;

`;

const BoxWraper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > Button,
  & > p {
    margin-right: 40px;
  }
`;

const CartBox = styled(Box)`
  display: flex;
`;

const LoginButton = () => {
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <BoxWraper>
      <ButtonCss onClick={() => openDialog()}>Login</ButtonCss>

      <CartBox>
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </CartBox>
      <LoginDialog open={open} setOpen={setOpen} />
    </BoxWraper>
  );
};

export default LoginButton;
