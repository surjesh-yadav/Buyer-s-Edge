import { Box, styled, Typography } from "@mui/material";
import React from "react";

const MainBox = styled(Box)`
height: 65vh;
width: 80%;
margin: 80px  140px;

`

const Container = styled(Box)`
text-align: center;
padding-top: 70px;
`

const CartEmpty = () => {
  return (
    <MainBox>
      <Container>
        <img
          src="https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90"
          alt="empty"
          style={{width: "40%"}}
        />
        <Typography>Cart is Empty</Typography>
        <Typography>Add items in your Cart Now</Typography>
      </Container>
    </MainBox>
  );
};

export default CartEmpty;
