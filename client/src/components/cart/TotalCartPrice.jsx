import { Box, styled, Typography, Button } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";
const RightHeader = styled(Box)`
  padding: 20px 25px;
  text-align: center;
  background: lightblue;
  border-bottom: 1px solid grey;
`;

const Rupees = styled(Box)`
  float: right;
`;
const RightDownBox = styled(Box)`
  padding: 20px 20px;
  background-color: lightcyan;
  & > p {
    margin-bottom: 20px;
    font-size: 14px;
  }
`;

const RightBox = styled(Box)`
  box-shadow: 0 -2px 10px 0 rgb(0 0 0/20%);
  height: 90%; 
`;

const TotalCartPrice = ({ cartItems }) => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  useEffect(() => {
    totalAmount();
  }, [cartItems]);

  const totalAmount = () => {
    let price = 0,
      discount = 0;
    cartItems.map((item) => {
      price += item.price.mrp;
      discount += item.price.mrp - item.price.cost;
    });
    setPrice(price);
    setDiscount(discount);
  };

  return (
    <RightBox>
      <RightHeader>
        <Typography>ORDER PRICE DETAILS</Typography>
      </RightHeader>
      <RightDownBox>
        <Typography>
          Price of {cartItems?.length} item
          <Rupees component="span">₹{price}</Rupees>
        </Typography>
        <Typography>
          Discount on  {cartItems?.length} item
          <Rupees component="span">-₹{discount}</Rupees>
        </Typography>
        <Typography>
          Delivery Charges of {cartItems?.length} item
          <Rupees component="span">₹20</Rupees>
        </Typography>
        <Typography variant="h5">
          Total Ammount of {cartItems?.length} item
          <Rupees component="span">₹{price-discount+20}</Rupees>
        </Typography>
        <Typography style={{ color: "green", fontWeight: "500", fontSize: 12 }}>
          Congratulations.......You will save ₹{discount-20} on this order
        </Typography>
      </RightDownBox>
      <Button
        style={{
          width: "100%",
          background: "lightgreen",
          color: "red",
        }}
      >
        Order Now
      </Button>
    </RightBox>
  );
};

export default TotalCartPrice;
