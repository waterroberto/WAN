import React from "react";
import { Footer, Meta, Layout, Navbar } from "../components";
import { Box, Typography, Button } from "@mui/material";
import CustomInput from "../components/UnstyledInput";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { AuthService } from "../services/auth";
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
      const req = await AuthService.login(email, password);

      if (req) {
        cogoToast.success("Welcome");
        router.replace("/account");
      }
    } catch (error) {
      console.log(error);

      cogoToast.error(AuthService.processError(error.code));
    }

    setIsLoading(false);
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
        title="Login - Blue Chip Finanace - Online banking for everyone"
        description="Login to your Blue Chip Account - Online banking for everyone"
      />
      <Box
        mt={8}
        sx={{
          background:
            "linear-gradient(55deg, rgba(6,6,6,1) 0%, rgba(27,27,27,1) 53%, rgba(27,34,52,1) 76%, rgba(9,9,9,1) 100%)",
        }}
      >
        <Navbar />
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
            Sign In
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
            <Link
              href="/forgot-password"
              style={{
                color: "#1b4cd1",
                fontWeight: 700,
                textAlign: "right",
                display: "block",
                marginTop: "8px",
                marginBottom: "8px",
              }}
            >
              Forgot Password?
            </Link>
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
                background: "var(--blue)",
                color: "#fff",

                "&:hover": {
                  background: isLoading ? "var(--mid)" : "#1b4cd1",
                },
                "&:disabled": {
                  background: "var(--light-blue)",
                  cursor: "not-allowed",
                },
              }}
              onClick={loginHandler}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Login"}
            </Button>
            <Typography textAlign="right" sx={{ color: "#fff" }}>
              <span>Don`t have an account?</span> {"  "}
              <Link
                href="/register"
                style={{ color: "#1b4cd1", fontWeight: 700 }}
              >
                Register
              </Link>
            </Typography>
          </form>
        </Layout>
        <Footer />
      </Box>
    </>
  );
};

export default Login;
