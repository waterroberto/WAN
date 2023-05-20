import { Stack, Box } from "@mui/material";
import React from "react";

const Nav = () => {
  return (
    <Box
      component="header"
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "var(--dark)",
        color: "#f5f5f5",
        zIndex: 50,
      }}
    >
      <Stack
        component="nav"
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          padding: {
            xs: "1rem",
            sm: "2rem 3rem",
            lg: "2rem 4rem",
          },
        }}
      ></Stack>
    </Box>
  );
};

export default Nav;
