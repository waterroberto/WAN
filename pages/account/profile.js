import { Box, Stack, Typography, Avatar, Grid, Button } from "@mui/material";
import ReferralCard from "../../components/dashboard/ReferralCard";
import React from "react";
import { MobileNav, Meta, Dash, Sidebar } from "../../components";
import AppBar from "../../components/dashboard/AppBar";
import { stringAvatar } from "../../utils/stringAvatar";
import userDataContext from "../../context/UserDataContext";
import { useContext } from "react";
import parseDate from "../../utils/parseDate";
import { AiFillCheckCircle } from "react-icons/ai";
import { MdCancel } from "react-icons/md";
import Container from "../../components/dashboard/Container";
import PrivateRoute from "../../components/auth/PrivateRoute";

const Profile = () => {
  const {
    firstName,
    lastName,
    phone,
    email,
    documents: { passport },
    accountLevel,
    timeStamp,
    isVerified = false,
    gender,
    country,
    zipcode,
    DOB,
  } = useContext(userDataContext);

  return (
    <PrivateRoute>
      <Meta
        title="Incrypto Finance - Profile - Online Bank"
        description="Incrypto Financial Bank | Profile into your account"
      />
      <Dash />

      <Box minHeight="100vh" sx={{ background: "var(--darker)" }}>
        <Sidebar>
          <AppBar page="Profile" />
          <Stack
            p={2}
            direction="row"
            alignItems="center"
            gap={2}
            sx={{
              background: isVerified
                ? "var(--green-light)"
                : "var(--red-light)",
              color: "#fff",
              borderRadius: 1.5,
              mb: 2,
              maxWidth: "1024px",
              mx: "auto",
            }}
          >
            {isVerified ? <AiFillCheckCircle /> : <MdCancel />}
            <Typography fontWeight={600}>
              {isVerified ? "Email is Verified" : "Unverified Email"}
            </Typography>
          </Stack>
          <Container>
            <Grid
              container
              mx="auto"
              rowSpacing={{ xs: 4, sm: 6 }}
              columnSpacing={{ sm: 4, md: 8 }}
              columns={12}
              alignItems="center"
            >
              <Grid item xs={12} sm={6} md={4} width="100%">
                <Stack direction="row" alignItems="center" gap={4}>
                  <Avatar
                    {...stringAvatar(
                      `${firstName.toUpperCase()} ${lastName.toUpperCase()}`
                    )}
                    src={passport}
                    sx={{
                      width: 120,
                      height: 120,
                      border: "4px solid var(--secondary)",
                    }}
                  />
                  <Box>
                    <Typography fontWeight={800} fontSize={20}>
                      {firstName.toUpperCase()} {lastName.toUpperCase()}
                    </Typography>
                    <Typography fontSize={16} fontWeight={300}>
                      {email}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6} md={4} width="100%">
                <Typography fontWeight={800} fontSize={20}>
                  Account Tier
                </Typography>
                <Typography fontSize={16} fontWeight={300}>
                  Level {accountLevel}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} width="100%">
                <Typography fontWeight={800} fontSize={20}>
                  Member Since
                </Typography>
                <Typography fontSize={16} fontWeight={300}>
                  {parseDate(timeStamp)}
                </Typography>
              </Grid>
            </Grid>
          </Container>
          {(accountLevel < 3 || !isVerified) && (
            <Container>
              <Typography fontWeight={800} fontSize={20} mb={4}>
                Account Verification
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                alignItems="center"
                justifyContent="flex-start"
                gap={2}
                width="100%"
              >
                {!isVerified && (
                  <Button
                    variant="text"
                    disableElevation
                    sx={{
                      p: 2,
                      color: "#fff",
                      textTransform: "capitalize",
                      fontWeight: 500,
                      fontFamily: "inherit",
                      background: "var(--light-blue)",
                      transition: "0.5s ease-in",
                      borderRadius: 2,

                      "&:hover": {
                        transition: "0.5s ease-out",
                        background: "var(--blue)",
                      },
                      width: "100%",
                    }}
                  >
                    Verify Email
                  </Button>
                )}
                {accountLevel !== 3 && (
                  <Button
                    variant="text"
                    disableElevation
                    sx={{
                      p: 2,
                      color: "#fff",
                      textTransform: "capitalize",
                      fontWeight: 500,
                      fontFamily: "inherit",
                      background: "var(--secondary)",
                      transition: "0.5s ease-in",
                      borderRadius: 2,

                      "&:hover": {
                        transition: "0.5s ease-out",
                        background: "var(--secondary-clicked)",
                      },
                      width: "100%",
                    }}
                  >
                    Upgrade to Tier {accountLevel + 1}
                  </Button>
                )}
              </Stack>
            </Container>
          )}
          <Container>
            <Typography fontWeight={800} fontSize={20} mb={4}>
              Other Information
            </Typography>
            <Grid
              container
              mx="auto"
              rowSpacing={{ xs: 4, sm: 6 }}
              columnSpacing={{ sm: 4, md: 8 }}
              columns={12}
              alignItems="center"
            >
              <Grid item xs={6} sm={6} md={4} lg={3} width="100%">
                <Typography fontWeight={300} fontSize={12} mb={0.5}>
                  FULL NAME
                </Typography>
                <Typography
                  fontWeight={700}
                  fontSize={18}
                  textTransform="capitalize"
                >
                  {firstName} {lastName}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3} width="100%">
                <Typography fontWeight={300} fontSize={12} mb={0.5}>
                  PHONE NUMBER
                </Typography>
                <Typography
                  fontWeight={700}
                  fontSize={18}
                  textTransform="capitalize"
                >
                  {phone}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} lg={3} width="100%">
                <Typography fontWeight={300} fontSize={12} mb={0.5}>
                  EMAIL
                </Typography>
                <Typography
                  fontWeight={700}
                  fontSize={18}
                  textTransform="lowercase"
                >
                  {email}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3} width="100%">
                <Typography fontWeight={300} fontSize={12} mb={0.5}>
                  GENDER
                </Typography>
                <Typography
                  fontWeight={700}
                  fontSize={18}
                  textTransform="capitalize"
                >
                  {gender}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3} width="100%">
                <Typography fontWeight={300} fontSize={12} mb={0.5}>
                  COUNTRY
                </Typography>
                <Typography
                  fontWeight={700}
                  fontSize={18}
                  textTransform="capitalize"
                >
                  {country}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3} width="100%">
                <Typography fontWeight={300} fontSize={12} mb={0.5}>
                  ZIP CODE
                </Typography>
                <Typography
                  fontWeight={700}
                  fontSize={18}
                  textTransform="capitalize"
                >
                  {zipcode}
                </Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={4} lg={3} width="100%">
                <Typography fontWeight={300} fontSize={12} mb={0.5}>
                  DATE OF BIRTH
                </Typography>
                <Typography
                  fontWeight={700}
                  fontSize={18}
                  textTransform="capitalize"
                >
                  {parseDate(DOB)}
                </Typography>
              </Grid>
            </Grid>
          </Container>
          <ReferralCard />

          <Button
            variant="text"
            disableElevation
            sx={{
              p: 1,
              color: "#fff",
              textTransform: "capitalize",
              fontWeight: 500,
              fontFamily: "inherit",
              background: "var(--red)",
              transition: "0.5s ease-in",
              borderRadius: 2,

              "&:hover": {
                transition: "0.5s ease-out",
                background: "var(--red-hover)",
              },
              width: "100%",
            }}
            onClick={() => {}}
          >
            Logout
          </Button>
        </Sidebar>
      </Box>
      <MobileNav />
    </PrivateRoute>
  );
};

export default Profile;
