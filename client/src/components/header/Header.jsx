import React from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import Search from "./Search";
import LoginButton from "./LoginButton";
const StyledHeader = styled(AppBar)`
  /// AppBar me css lgane ko use hota h ye
  background: #004aad;
  height: 55px;
`;

const CustomWraper = styled(Box)`
 margin: 0 5% 0 auto;

`;
const Header = () => {
  return (
    <div>
      <StyledHeader>
        <Toolbar>
          <Box>
            <img
              src="../images/logo.png"
              alt="logo"
              style={{ width: 200, height: 50, marginLeft: 30 }}
            />
          </Box>
          <Search />
          <CustomWraper>
            <LoginButton />
          </CustomWraper>
        </Toolbar>
      </StyledHeader>
    </div>
  );
};

export default Header;
