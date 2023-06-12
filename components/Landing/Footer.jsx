import React from "react";
import { Box, Grid, Typography, Stack } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Layout, NewsLetter } from "../";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <Box sx={{ background: "#f5f5f5" }}>
      {/* <NewsLetter /> */}
      <Layout>
        <Grid
          container
          mx="auto"
          rowSpacing={4}
          columnSpacing={{ sm: 2, md: 2 }}
          columns={12}
        >
          {/* . . . */}
          <Grid item xs={12} sm={6} md={4} width="100%">
            <Link href="/">
              <Image src={logo} style={{ maxHeight: "70px" }} />
            </Link>
            <Typography
              py={2}
              mb={4}
              sx={{
                fontFamily: "inherit",
                color: "var(--primary)",
                fontWeight: 300,
                fontSize: { xs: "1rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              Our loans provide you with financing needed to fund your personal
              & business needs, while assuring you the financial freedom and
              security you are looking for.
            </Typography>
          </Grid>
          {/* . . . */}
          <Grid item xs={12} sm={6} md={4} width="100%">
            <Typography
              mb={2}
              sx={{
                fontFamily: "inherit",
                color: "var(--primary)",
                fontWeight: 600,
                fontSize: {
                  xs: "1.4rem",
                  sm: "1.4rem",
                  md: "1.5rem",
                },
              }}
            >
              Quick Links
            </Typography>
            <Stack
              direction="column"
              sx={{
                "& a": {
                  marginBottom: "0.75rem",
                  fontFamily: "inherit",
                  fontWeight: 300,
                },
              }}
            >
              <Link href="/">Home</Link>
              <Link href="/about">About us</Link>
              <Link href="/services">Services</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/login">Login</Link>
            </Stack>
          </Grid>
          {/* . . . */}
          <Grid item xs={12} sm={6} md={4} width="100%">
            <Typography
              mb={2}
              sx={{
                fontFamily: "inherit",
                color: "var(--primary)",
                fontWeight: 600,
                fontSize: {
                  xs: "1.4rem",
                  sm: "1.4rem",
                  md: "1.5rem",
                },
              }}
            >
              Contact Us
            </Typography>
            <Box
              sx={{
                "& p": {
                  marginBottom: "0.75rem",
                  fontFamily: "inherit",
                  fontWeight: 300,
                },
              }}
            >
              <Typography>support@incfinance.com</Typography>
              <Typography>+27 (781) 234-5678</Typography>
              <Typography>234 Hamilton, Cleveland, Ohio, USA.</Typography>
            </Box>
          </Grid>
        </Grid>
      </Layout>
    </Box>
  );
};

export default Footer;
