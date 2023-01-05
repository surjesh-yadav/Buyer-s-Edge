import { Box, Button, ButtonGroup, styled } from "@mui/material";
import React from "react";

const ButtonGrp = styled(ButtonGroup)`
  margin-top: 32px;
  border-radius: 0%;
`;

const ButtonCSS = styled(Button)`
  border-radius: 50%;
  background: orange;
border: none;
`;
const OperationButton = () => {
  return (
    <ButtonGrp>
      <ButtonCSS>-</ButtonCSS>
      <ButtonCSS>1</ButtonCSS>
      <ButtonCSS>+</ButtonCSS>
    </ButtonGrp>
  );
};

export default OperationButton;
