import React from "react";
import PrivateRoute from "../../../components/auth/PrivateRoute";
import { Meta } from "../../../components";
import { Box, Stack, Typography } from "@mui/material";

const Nedbank = () => {
  return (
    <>
      <Meta
        title="Internet Banking - Nedbank Tokenization - Blue Ship Finance"
        description="Internet Banking - Nedbank Tokenization - Blue Ship Finance"
      />
      <PrivateRoute>
        <Stack
          component="header"
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={8}
          p={2}
          sx={{ borderBottom: "1px solid #eee" }}
        >
          <img
            src="https://secured.nedbank.co.za/NedbankIcon.3cee39915afd52c3.svg"
            alt="Nedbank Logo"
            style={{ width: "40px" }}
          />
          {/* <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            gap={2}
            component="ul"
            sx={{ color: "#006349" }}
          >
            <li>
              <a style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <img
                  src="https://secured.nedbank.co.za/icon-chat-thin.aecf4aeab466cacf.svg"
                  alt="nedbank chat"
                  style={{ width: "24px" }}
                />
                <p style={{ fontSize: "18px" }}>Nedbank Chat</p>
              </a>
            </li>
          </Stack> */}
        </Stack>
        <Typography fontSize={40} textAlign="center" color="#333" mb={4} mt={8}>
          Nedbank Online Banking
        </Typography>
        <Stack
          direction="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
          sx={{ width: "400px", mx: "auto" }}
        >
          <form style={{ width: "100%" }}>
            <Box my={2}>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                style={{
                  border: "none",
                  outline: "none",
                  border: "2px solid #78be20",
                  width: "100%",
                  display: "block",
                  maxWidth: "400px",
                  height: "50px",
                  padding: "8px 14px",
                  color: "#666",
                  fontSize: "15px",
                }}
              />
            </Box>
            <Box my={4}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                style={{
                  border: "none",
                  outline: "none",
                  border: "2px solid #78be20",
                  width: "100%",
                  display: "block",
                  maxWidth: "400px",
                  height: "50px",
                  padding: "8px 14px",
                  color: "#666",
                  fontSize: "15px",
                }}
              />
            </Box>
            <Box my={4}>
              <button
                type="button"
                style={{
                  border: "none",
                  outline: "none",
                  background: "#009639",
                  width: "100%",
                  display: "block",
                  maxWidth: "400px",
                  height: "50px",
                  padding: "8px 14px",
                  color: "#fff",
                  fontSize: "15px",
                  cursor: "pointer",
                  borderRadius: "4px",
                }}
              >
                Proceed
              </button>
            </Box>
          </form>
        </Stack>
      </PrivateRoute>
    </>
  );
};

export default Nedbank;
