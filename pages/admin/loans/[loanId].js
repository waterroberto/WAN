import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../services/firebase.config";
import cogoToast from "cogo-toast";
import { Layout } from "../../../components";
import AdminRoute from "../../../components/auth/AdminRoute";
import { Typography, Stack, Button } from "@mui/material";
import Nav from "../../../components/admin/Nav";
import AdminMobileNav from "../../../components/admin/AdminMobileNav";
import Container from "../../../components/dashboard/Container";

const Loans = () => {
  const router = useRouter();
  const loanId = router.query?.loanId;
  const [userData, setUserData] = useState(null);
  const [loanDetails, setLoanDetails] = useState(null);
  const [loading, setLoading] = useState(false);

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

          console.log("User: ", _userDoc.data());
          console.log("Loan Details: ", _loanDoc.data());
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        cogoToast.error("Error fetching loand details");
        setLoading(false);
      }
    };

    fetchLoanDetails();
  }, [loanId]);

  return (
    <AdminRoute>
      <Box minHeight="100vh" sx={{ background: "var(--darker)" }}>
        <Nav />

        <Layout>
          <Box my={8} fontSize={18} sx={{ color: "var(--mid)" }}>
            Loan Details
          </Box>

          {loading && !loanDetails && (
            <Typography
              fontSize={32}
              sx={{
                height: "100vh",
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
              <Container>
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
                    onClick={() => {}}
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
                    onClick={() => {}}
                  >
                    Decline
                  </Button>
                </Stack>
              </Container>
            </>
          )}
        </Layout>

        <AdminMobileNav />
      </Box>
    </AdminRoute>
  );
};

export default Loans;
