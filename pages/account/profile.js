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
import { AuthService } from "../../services/auth";
import { useRouter } from "next/router";

const Profile = () => {
  const { userData } = useContext(userDataContext);

  const router = useRouter();

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
              background: userData?.isVerified
                ? "var(--green-light)"
                : "var(--red-light)",
              color: "#fff",
              borderRadius: 1.5,
              mb: 2,
              maxWidth: "1024px",
              mx: "auto",
            }}
          >
            {userData?.isVerified ? <AiFillCheckCircle /> : <MdCancel />}
            <Typography fontWeight={600}>
              {userData?.isVerified ? "Email is Verified" : "Unverified Email"}
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
                      `${userData?.firstName.toUpperCase()} ${userData?.lastName.toUpperCase()}`
                    )}
                    src={userData?.documents?.passport}
                    sx={{
                      width: 120,
                      height: 120,
                      border: "4px solid var(--secondary)",
                    }}
                  />
                  <Box>
                    <Typography fontWeight={800} fontSize={20}>
                      {userData?.firstName.toUpperCase()}{" "}
                      {userData?.lastName.toUpperCase()}
                    </Typography>
                    <Typography fontSize={16} fontWeight={300}>
                      {userData?.email}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
              <Grid item xs={12} sm={6} md={4} width="100%">
                <Typography fontWeight={800} fontSize={20}>
                  Account Tier
                </Typography>
                <Typography fontSize={16} fontWeight={300}>
                  Level {userData?.accountLevel}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} md={4} width="100%">
                <Typography fontWeight={800} fontSize={20}>
                  Member Since
                </Typography>
                <Typography fontSize={16} fontWeight={300}>
                  {parseDate(userData?.timeStamp?.seconds * 1000)}
                </Typography>
              </Grid>
            </Grid>
          </Container>
          {(userData?.accountLevel < 3 || !userData?.isVerified) && (
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
                {!userData?.isVerified && (
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
                {userData?.accountLevel !== 3 && (
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
                    Upgrade to Tier {userData?.accountLevel + 1}
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
                  {userData?.firstName} {userData?.lastName}
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
                  {userData?.phone}
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
                  {userData?.email}
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
                  {userData?.gender}
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
                  {userData?.country}
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
                  {userData?.zipcode}
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
                  {parseDate(userData?.DOB?.seconds * 1000)}
                </Typography>
              </Grid>
            </Grid>
          </Container>
          <ReferralCard />
          <Container>
            <Button
              variant="text"
              disableElevation
              sx={{
                p: 2,
                color: "#fff",
                background: "var(--red)",
                borderRadius: 2,

                "&:hover": {
                  background: "var(--red-hover)",
                },
                width: "100%",
              }}
              onClick={() => {
                AuthService.logout();
                router.replace("/");
              }}
            >
              Logout
            </Button>
          </Container>
        </Sidebar>
      </Box>
      <MobileNav />
    </PrivateRoute>
  );
};

export default Profile;
