"use client";

import Link from "@mui/material/Link";
import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import SellIcon from "@mui/icons-material/Sell";
import ChangeCircleSharpIcon from '@mui/icons-material/ChangeCircleSharp';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export const Header = () => {
  const [value, setValue] = React.useState(-1);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid black",
          padding: "0px 10px",
        }}
      >
        <Link href="/home" style={{ textDecoration: "none" }}>
          KinderBook
        </Link>
        <Box sx={{ width: 500 }}>
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              label="Sell"
              icon={<SellIcon />}
              href="/sell"
            />

            <BottomNavigationAction
              label="Exchange"
              icon={<ChangeCircleSharpIcon />}
              href="/exchange"
            />

            <BottomNavigationAction
              label="Account"
              icon={<AccountCircleIcon />}
            />
          </BottomNavigation>
        </Box>
      </div>
    </>
  );
};

export default Header;
