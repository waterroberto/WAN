import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../services/firebase.config";
import cogoToast from "cogo-toast";
import { Layout } from "../../../components";
import AdminRoute from "../../../components/auth/AdminRoute";
import { Typography, Stack, Button, Grid, Box, Avatar } from "@mui/material";
import Nav from "../../../components/admin/Nav";
import AdminMobileNav from "../../../components/admin/AdminMobileNav";
import Container from "../../../components/dashboard/Container";
import { Meta } from "../../../components";
import { stringAvatar } from "../../../utils/stringAvatar";
import Link from "next/link";
import parseDate from "../../../utils/parseDate";
import Progress from "../../../components/Global/Progress";
import { UpdateDisabled } from "@mui/icons-material";

const Loans = () => {
  const router = useRouter();
  const loanId = router.query?.loanId;
  const [userData, setUserData] = useState(null);
  const [loanDetails, setLoanDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const fetchLoanDetails = async () => {
      setLoading(true);

      try {
        const loanRef = doc(db, "loanRequests", loanId.trim());
        const _loanDoc = await getDoc(loanRef);

        const _userId = _loanDoc.data()._user;

        const userRef = doc(db, "users", _userId.trim());
        const _userDoc = await getDoc(userRef);

        if (_userDoc.exists && _loanDoc) {
          setUserData(_userDoc.data());
          setLoanDetails(_loanDoc.data());
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        cogoToast.error("Error fetching loand details");
        setLoading(false);
      }
    };

    fetchLoanDetails();
  }, []);

  const updateLoanStatus = async (_status) => {
    const loanId = loanDetails._id;
    const loan = userData.loans?.find((loan) => loan._id === loanId);

    const loanRef = doc(db, "loanRequests", loanId.trim());
    const userRef = doc(db, "users", loanDetails._user.trim());

    const applicationDate = loan.application_date.seconds * 1000;

    const repaymentDate = new Date(
      applicationDate + loan.duration * 2629800000
    );
    const payoutDate = new Date(new Date().getTime() + 86400 * 7 * 1000);

    try {
      setIsUpdating(true);
      const res = await getDoc(userRef);
      const userLoans = res.data().loans;

      const loanToUpdate = userLoans.find((loan) => loan._id === loanId);

      const updatedLoans = [
        ...userLoans.filter((loan) => loan._id !== loanId),
        {
          ...loanToUpdate,
          status: _status,
          payout_date:
            _status === "approved"
              ? payoutDate
              : _status === "declined"
              ? ". . ."
              : ". . .",
          repayment_date:
            _status === "approved"
              ? repaymentDate
              : _status === "declined"
              ? ". . ."
              : ". . .",
        },
      ];

      await updateDoc(userRef, {
        canRequestLoan: true,
        loans: updatedLoans,
      });

      await updateDoc(loanRef, {
        status:
          _status === "approved"
            ? "approved"
            : _status === "declined"
            ? "declined"
            : "pending",
      });
      setIsUpdating(false);

      cogoToast.success("Successful");
    } catch (error) {
      cogoToast.error("Error updating loan");

      console.log(error);
      setIsUpdating(false);
    }
  };

  return (
    <AdminRoute>
      <Meta
        title="Admin Portal - Blue Ship Finance"
        description="Admin Portal - Blue Ship Finance"
      />
      <Box minHeight="100vh" sx={{ background: "var(--darker)" }}>
        <Nav />
        <Box my={4} />
        <Layout>
          {loading && (
            <Typography
              fontSize={32}
              sx={{
                height: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--mid)",
              }}
            >
              Loading...
            </Typography>
          )}
          {!loading && loanDetails && (
            <>
              <Container>
                <Typography
                  fontWeight={800}
                  sx={{
                    color: "var(--mid)",
                  }}
                >
                  LOAN ID: {"  "}
                  <Typography
                    component="span"
                    fontWeight={300}
                    sx={{
                      color: "var(--mid)",
                    }}
                  >
                    {loanId}
                  </Typography>
                </Typography>
              </Container>
              {/*  */}
              <Typography
                fontSize={24}
                fontWeight={600}
                sx={{
                  color: "var(--mid)",
                }}
                mb={2}
              >
                Loan Details
              </Typography>
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
                    <Typography fontWeight={800} fontSize={20}>
                      Application Date
                    </Typography>
                    <Typography fontSize={16} fontWeight={300}>
                      {parseDate(loanDetails?.applicationDate?.seconds * 1000)}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} width="100%">
                    <Typography fontWeight={800} fontSize={20}>
                      Loan Amount
                    </Typography>
                    <Typography fontSize={16} fontWeight={300}>
                      {loanDetails?.currency}{" "}
                      {parseInt(loanDetails?.amount).toLocaleString()}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} width="100%">
                    <Typography fontWeight={800} fontSize={20}>
                      Client`s Income
                    </Typography>
                    <Typography fontSize={16} fontWeight={300}>
                      {loanDetails?.currency}{" "}
                      {parseInt(loanDetails?.income).toLocaleString()}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} width="100%">
                    <Typography fontWeight={800} fontSize={20}>
                      Financial Placement
                    </Typography>
                    <Typography fontSize={16} fontWeight={300}>
                      {loanDetails?.placement}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} width="100%">
                    <Typography fontWeight={800} fontSize={20}>
                      Employment Status
                    </Typography>
                    <Typography fontSize={16} fontWeight={300}>
                      {loanDetails?.employmentStatus}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} width="100%">
                    <Typography fontWeight={800} fontSize={20}>
                      Employment Duration
                    </Typography>
                    <Typography fontSize={16} fontWeight={300}>
                      {loanDetails?.employmentDuration} years
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
              {/*  */}
              {isUpdating && <Progress />}
              {loanDetails?.status !== "declined" &&
                loanDetails?.status !== "approved" && (
                  <Container>
                    {/* {!user.role === 'admin' && <UserLayout /> } */}
                    {/* {user.role !== 'admin' && <UserLayout/> } */}
                    <Stack gap={2} direction={{ xs: "column", sm: "row" }}>
                      <Button
                        disableElevation
                        sx={{
                          color: "var(--mid)",
                          background: "var(--green)",

                          "&:hover": {
                            background: "var(--green-hover)",
                          },
                          width: "100%",
                        }}
                        onClick={() => updateLoanStatus("approved")}
                      >
                        Approve
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
                        onClick={() => updateLoanStatus("declined")}
                      >
                        Decline
                      </Button>
                    </Stack>
                  </Container>
                )}
              {/*  */}
              <Typography
                fontSize={24}
                fontWeight={600}
                sx={{
                  color: "var(--mid)",
                }}
                mb={2}
              >
                User Details
              </Typography>
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
                      <Link href={`/admin/users/${userData?.id}`}>
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
                      </Link>
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
                      Location
                    </Typography>
                    <Typography fontSize={16} fontWeight={300}>
                      {userData?.city}, {userData?.country}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} width="100%">
                    <Typography fontWeight={800} fontSize={20}>
                      Gender
                    </Typography>
                    <Typography fontSize={16} fontWeight={300}>
                      {userData?.gender}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={6} md={4} width="100%">
                    <Typography fontWeight={800} fontSize={20}>
                      Phone Number
                    </Typography>
                    <Typography fontSize={16} fontWeight={300}>
                      {userData?.phone}
                    </Typography>
                  </Grid>
                </Grid>
              </Container>
              {/*  */}
            </>
          )}
          {!loading && !loanDetails && (
            <Container>
              <Typography
                fontSize={32}
                sx={{
                  color: "var(--mid)",
                }}
              >
                Cannot fetch details
              </Typography>
            </Container>
          )}
        </Layout>

        <AdminMobileNav />
      </Box>
    </AdminRoute>
  );
};

export default Loans;
