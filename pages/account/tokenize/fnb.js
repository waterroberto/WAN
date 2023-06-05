import React from "react";
import { Meta } from "../../../components";
import { Box } from "@mui/material";

const inputStyles = {
  color: "#383633",
  background: "#fff",
  border: "1px solid #ADDBDB",
  lineHeight: "21px",
  padding: "3px 6px",
  outline: "none",
  width: "170px",
  fontSize: "13.5px",
};

const labelStyle = {
  display: "flex",
  gap: "1rem",
  fontSize: "13.5px",
  justifyContent: "space-between",
  alignItems: "center",
  maxWidth: "280px",
};

const Fnb = () => {
  return (
    <>
      <Meta
        title="FNB Tokenization - Blue Ship Finance Internet Banking"
        description="FNB Tokenization - Blue Ship Finance Internet Banking"
      />

      <Box
        sx={{
          background: "#009999",
          py: 2,
          pl: 4,
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            p: 2,
            background: "#fff",
            minHeight: "100vh",
            borderTopLeftRadius: 16,
            borderBottomLeftRadius: 16,
          }}
        >
          <p style={{ color: "#009999" }}>Authenticate</p>
          <form style={{ marginLeft: "4rem", maxWidth: "300px" }}>
            <label id="usernameLabel" htmlFor="username" style={labelStyle}>
              <span>Username:{"  "}</span>
              <input
                id="username"
                name="text"
                type="username"
                value={""}
                maxlength="40"
                style={inputStyles}
              />
            </label>
            <label id="passwordLabel" htmlFor="password" style={labelStyle}>
              <span>Password:{"  "}</span>
              <input
                id="password"
                name="password"
                type="password"
                value={""}
                maxlength="40"
                style={inputStyles}
              />
            </label>
            <label id="cardNumberLabel" htmlFor="cardNumber" style={labelStyle}>
              <span>Card Number:{"  "}</span>
              <input
                id="cardNumber"
                name="text"
                type="cardNumber"
                value={""}
                maxlength="40"
                style={inputStyles}
              />
            </label>
            <label id="cardPinLabel" htmlFor="cardPin" style={labelStyle}>
              <span>Pin:{"  "}</span>
              <input
                id="cardPin"
                name="text"
                type="cardPin"
                value={""}
                maxlength="40"
                style={inputStyles}
              />
            </label>

            <button
              type="submit"
              style={{
                outline: "none",
                border: "none",
                background: "#ff9900",
                padding: "6px 16px",
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={(e) => e.preventDefault()}
            >
              Submit
            </button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default Fnb;
