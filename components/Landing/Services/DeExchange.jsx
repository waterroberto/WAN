import React from "react";
import { ArrowForwardRounded } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import Layout from "../../Layout/Layout";

const DeExchange = () => {
  return (
    <Grid
      container
      columns={12}
      sx={{
        background: "#fff",
      }}
      id="car-loans"
    >
      <Grid item xs={12} sm={12} md={6} width="100%" data-aos="fade-up">
        <Layout>
          <Typography
            mb={2}
            sx={{
              fontFamily: "inherit",
              color: "secondary.dark",
              fontWeight: 700,
              color: "#060606",
              fontSize: {
                xs: "2rem",
                sm: "2rem",
                md: "2.5rem",
                lg: "3rem",
              },
              textTransform: "uppercase",
            }}
          >
            Car Loans
          </Typography>
          <Typography
            mb={4}
            sx={{
              fontFamily: "inherit",
              color: "secondary.dark",
              fontWeight: 300,
              color: "#1b1b1b",
              fontSize: {
                xs: "1.1rem",
                sm: "1.1rem",
                md: "1.2rem",
              },
            }}
          >
            Get your unbeatable car financing option with us today. With our low
            interest rates and flexible repayment plans, getting that dream car
            is guaranteed. We finance salary earners and registered business
            owners the opportunity to buy quality, certified cars.
          </Typography>
          <Button
            variant="contained"
            href="/register"
            disableElevation
            endIcon={<ArrowForwardRounded />}
            sx={{
              borderRadius: "0.25rem",
              color: "#fff",
              padding: "1rem 2rem",
              textTransform: "capitalize",
              fontSize: "1rem",
              fontWeight: 600,
              fontFamily: "inherit",
            }}
          >
            Get Started
          </Button>
        </Layout>
      </Grid>
      <Grid item xs={12} sm={12} md={6} width="100%" data-aos="fade-down">
        <Layout>
          <Box
            sx={{
              height: "400px",
              width: "100%",
              background:
                'url("https://firebasestorage.googleapis.com/v0/b/west-financial-services.appspot.com/o/car-loan-2.jpg?alt=media&token=eadbd414-b551-4253-ae67-033ec9f603b5") no-repeat center center/cover',
            }}
          ></Box>
        </Layout>
      </Grid>
    </Grid>
  );
};

export default DeExchange;
