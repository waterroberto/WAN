import React from "react";
import {
  Footer,
  Meta,
  Layout,
  Navbar,
  ContactInformation,
} from "../components";
import { Box, Typography, Stack } from "@mui/material";
import Script from "next/script";

const Contact = () => {
  return (
    <>
      <Meta
        title="Contact us - Blue Ship Finance - Online loans for everyone -
        Homepage"
        description="Contact Blue Ship Finance - Online loans for everyone - Contact page"
      />

      <Navbar />
      <Box
        pt={12}
        sx={{
          position: "relative",
          overflow: "hidden",
          background:
            'url("https://images.unsplash.com/photo-1587560699334-bea93391dcef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80") no-repeat center center/cover',

          "&:after": {
            content: "''",
            position: "absolute",
            background: "rgba(0, 0, 0, 0.8)",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          },
          "& *": {
            zIndex: 2,
          },
        }}
        width="100%"
      >
        <Layout>
          <Stack
            direction="column"
            spacing={2}
            alignItems="center"
            justifyContent="center"
            width="100%"
          >
            <Typography
              component="h2"
              color="#fff"
              sx={{
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3rem",
                },
                fontWeight: 600,
                fontFamily: "inherit",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              component="h2"
              color="#fff"
              sx={{
                fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                fontWeight: 300,
                fontFamily: "inherit",
                textAlign: "center",
              }}
            >
              Do you have any enquiries or complaints? Send us a message or use
              the below contact options.
            </Typography>
          </Stack>
        </Layout>
      </Box>
      <Layout>
        <Script src="https://apps.elfsight.com/p/platform.js" defer></Script>
        <div className="elfsight-app-81d221c0-9474-4e5d-ab8d-0c498f4822a9"></div>
      </Layout>
      <ContactInformation />
      <Footer />
    </>
  );
};

export default Contact;
