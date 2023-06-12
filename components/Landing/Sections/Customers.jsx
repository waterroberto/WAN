import React from "react";
import { ArrowForwardRounded } from "@mui/icons-material";
import { Grid, Typography, Button } from "@mui/material";
import { Layout } from "../../";
import Image from "next/image";
import people from "../../../assets/people.png";

const Customers = () => {
  return (
    <Grid
      container
      columns={12}
      sx={{
        background: "#fff",
      }}
    >
      <Grid item xs={12} sm={12} md={6} width="100%" data-aos="fade-up">
        <Layout>
          <Image
            src={people}
            alt="Blue Chip finance customers. People smiling and happy"
            style={{
              width: "100%",
              height: "100%",
              maxWidth: "700px",
              maxHeight: "700px",
              filter: "hue-rotate(10deg)",
            }}
          />
        </Layout>
      </Grid>
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
                xs: "1.5rem",
                sm: "1.8rem",
                md: "2rem",
                lg: "2.5rem",
              },
            }}
          >
            Thousands of customers trust our company for their
            <Typography
              component="span"
              sx={{
                color: "primary.main",
                fontSize: "inherit",
                fontWeight: "inherit",
              }}
            >
              {" "}
              Business
            </Typography>{" "}
            &{" "}
            <Typography
              component="span"
              sx={{
                color: "primary.main",
                fontSize: "inherit",
                fontWeight: "inherit",
              }}
            >
              {" "}
              Personal
            </Typography>{" "}
            needs.
          </Typography>
          <Typography
            mb={4}
            sx={{
              fontFamily: "inherit",
              color: "secondary.dark",
              fontWeight: 300,
              fontSize: {
                xs: "1.1rem",
                sm: "1.1rem",
                md: "1.2rem",
              },
            }}
          >
            We are <span className="em"> Available to Everyone</span>, and in
            every country. We make sure you apply without upfront fee. Our
            platform is easy to use.
            <br />
            Applications are processed immediately after submission. You can
            just apply, sit back and wait for our response.
            <br />
            Our support team gives 24/7 guidance, and offer fast and reliable
            response concerning any problems you might face.
          </Typography>
          <Button
            variant="outlined"
            href="/about"
            disableElevation
            endIcon={<ArrowForwardRounded />}
            sx={{
              borderRadius: "2rem",
              padding: "1rem 2rem",
              textTransform: "capitalize",
              fontSize: "1rem",
              fontWeight: 600,
              fontFamily: "inherit",
              borderWidth: "2px",
              "&:hover": {
                borderWidth: "2px",
              },
            }}
          >
            Learn More
          </Button>
        </Layout>
      </Grid>
    </Grid>
  );
};

export default Customers;
