import React from "react";
import { Meta, Layout } from "../../components";
import { Box, Typography, Button } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { AuthService } from "../../services/auth";
import cogoToast from "cogo-toast";

const Login = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);

  const { email, password } = formData;

  const loginHandler = async () => {
    setIsLoading(true);
    try {
      // { email: support@blueshipfinance.online password: support17052023%%}
      const req = await AuthService.loginAdmin(email, password);

      // console.log(req);

      if (req) {
        cogoToast.success("Welcome");
        router.replace("/admin");
      }
      setIsLoading(false);
    } catch (error) {
      error.code
        ? cogoToast.error(AuthService.processError(error.code))
        : cogoToast.error(AuthService.processError(error.message));

      setIsLoading(false);
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
      <Meta title="Login - Blue Ship Finance - Online banking for everyone" />
      <Box
        pt={16}
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(55deg, rgba(6,6,6,1) 0%, rgba(27,27,27,1) 53%, rgba(27,34,52,1) 76%, rgba(9,9,9,1) 100%)",
        }}
      >
        <Layout>
          <Typography
            component="h2"
            mb={2}
            sx={{
              fontSize: {
                xs: "2rem",
                sm: "2rem",
                md: "2.5rem",
              },
              fontWeight: 700,
              fontFamily: "inherit",
              textAlign: "center",
              color: "#fff",
            }}
          >
            Admin Portal
          </Typography>

          <form style={{ width: "100%", margin: "auto", maxWidth: "512px" }}>
            <input
              className="styled-input"
              aria-label="Email"
              placeholder="Email"
              type="email"
              required
              id="email"
              value={email}
              onChange={inputChangeHandler}
            />
            <input
              className="styled-input"
              aria-label="Password"
              placeholder="Password"
              type="password"
              required
              id="password"
              value={password}
              onChange={inputChangeHandler}
            />
            <Button
              variant="contained"
              type="button"
              disableElevation
              sx={{
                padding: "0.8rem",
                fontWeight: 300,
                fontFamily: "inherit",
                width: "100%",
                maxWidth: "512px",
                mb: 2,
                cursor: isLoading ? "not-allowed" : "cursor",
                background: "var(--secondary)",
                color: "#fff",

                "&:hover": {
                  background: isLoading
                    ? "var(--secondary)"
                    : "var(--secondary-clicked)",
                },
                "&:disabled": {
                  color: "#fff",
                  background: "var(--secondary-clicked)",
                  cursor: "not-allowed",
                },
              }}
              onClick={loginHandler}
              disabled={isLoading}
            >
              {isLoading ? "Authenticating..." : "Sign In"}
            </Button>
          </form>
        </Layout>
      </Box>
    </>
  );
};

export default Login;
