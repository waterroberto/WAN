import React, { useEffect, useState } from "react";
import AdminRoute from "../../../components/auth/AdminRoute";
import { Meta, Layout } from "../../../components";
import AdminMobileNav from "../../../components/admin/AdminMobileNav";
import { Box, Typography, Grid, Stack, Avatar, Button } from "@mui/material";
import Nav from "../../../components/admin/Nav";
import Container from "../../../components/dashboard/Container";
import { useRouter } from "next/router";
import { onSnapshot, doc } from "firebase/firestore";
import { db } from "../../../services/firebase.config";
import parseDate from "../../../utils/parseDate";
import { stringAvatar } from "../../../utils/stringAvatar";
import Image from "next/image";

const UserDetails = () => {
  const router = useRouter();
  const userId = router.query?.userId;
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const ref = doc(db, "users", userId);
    const unsub = onSnapshot(ref, (doc) => {
      setUserData(doc.data());
    });

    return () => {
      unsub();
    };
  }, [userId]);

  return (
    <AdminRoute>
      <Meta
        title="Admin Portal - Blue Ship Finance"
        description="Admin Portal - Blue Ship Finance"
      />
      <Box minHeight="100vh" sx={{ background: "var(--darker)" }}>
        <Nav />
        <Layout>
          <Box my={8} sx={{ color: "var(--mid)" }}>
            User Details
          </Box>

          <Container>
            <Grid
              container
              mx="auto"
              rowSpacing={{ xs: 4, sm: 6 }}
              columnSpacing={{ sm: 4, md: 8 }}
              columns={12}
              alignItems="center"
              sx={{ color: "var(--mid)" }}
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
                      border: "4px solid var(--pale-blue)",
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
          <Container>
            <Box my={4}>
              {userData?.accountLevel !== 3 && (
                <Button
                  disableElevation
                  sx={{
                    p: 2,
                    color: "#fff",
                    background:
                      userData?.accountLevel === 1
                        ? "var(--secondary)"
                        : "var(--green)",

                    "&:hover": {
                      background:
                        userData?.accountLevel === 1
                          ? "var(--secondary-clicked)"
                          : "var(--green-hover)",
                    },
                    width: "100%",
                  }}
                  onClick={() => {}}
                >
                  Upgrade to Tier {userData?.accountLevel + 1}
                </Button>
              )}
            </Box>
          </Container>

          <Container>
            <Typography
              fontWeight={800}
              fontSize={20}
              mb={4}
              sx={{ color: "var(--mid)" }}
            >
              User Details
            </Typography>
            <Grid
              container
              mx="auto"
              rowSpacing={{ xs: 4, sm: 6 }}
              columnSpacing={{ sm: 4, md: 8 }}
              columns={12}
              alignItems="center"
              sx={{ color: "var(--mid)" }}
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
          <Container>
            <Typography
              fontWeight={800}
              fontSize={20}
              mb={4}
              sx={{ color: "var(--mid)" }}
            >
              Documents
            </Typography>
            {!userData?.documents.ID && !userData?.documents.passport && (
              <Typography
                fontWeight={300}
                fontSize={32}
                mb={4}
                textAlign="center"
                sx={{ color: "var(--mid)" }}
              >
                No Documents
              </Typography>
            )}
            <Grid
              container
              mx="auto"
              columns={12}
              alignItems="center"
              sx={{ color: "var(--mid)" }}
            >
              {userData?.documents.passport && (
                <Grid item xs={12} sm={12} lg={6} width="100%" mx="auto">
                  <Box my={4} px={2}>
                    <Typography fontWeight={600} fontSize={20} mb={4}>
                      Selfie
                    </Typography>
                    <img
                      src={userData?.documents?.passport}
                      width={500}
                      height={500}
                      style={{ width: "100%" }}
                    />
                  </Box>
                </Grid>
              )}
              {userData?.documents.ID && (
                <Grid item xs={12} sm={12} lg={6} mx="auto">
                  <Box my={4} px={2}>
                    <Typography fontWeight={600} fontSize={20} mb={4}>
                      ID/Passport
                    </Typography>
                    <img
                      src={userData?.documents?.ID}
                      width={500}
                      height={500}
                      style={{ width: "100%" }}
                    />
                  </Box>
                </Grid>
              )}
            </Grid>
          </Container>
          <Container>
            <Stack gap={4} direction={{ xs: "column", sm: "row" }}>
              <Button
                disableElevation
                sx={{
                  color: "var(--mid)",
                  border: "1px solid var(--secondary)",

                  "&:hover": {
                    border: "1px solid var(--secondary-clicked)",
                  },
                  width: "100%",
                }}
                onClick={() => {}}
              >
                Disable User
              </Button>
              <Button
                disableElevation
                sx={{
                  color: "var(--mid)",
                  background: "var(--red)",

                  "&:hover": {
                    background: "var(--red-hover)",
                  },
                  width: "100%",
                }}
                onClick={() => {}}
              >
                Delete User
              </Button>
            </Stack>
          </Container>
        </Layout>
      </Box>
      <AdminMobileNav />
    </AdminRoute>
  );
};

export default UserDetails;
