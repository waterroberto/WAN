import { Box, Stack, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { Dash, Meta, MobileNav, Sidebar } from "../../components";
import AppBar from "../../components/dashboard/AppBar";
import { MdArrowDropDown } from "react-icons/md";
import { FaFolderOpen } from "react-icons/fa";
import userDataContext from "../../context/UserDataContext";
import Transactions from "../../components/dashboard/Transactions";
import Container from "../../components/dashboard/Container";
import PrivateRoute from "../../components/auth/PrivateRoute";

const Deposit = () => {
  const { userData } = useContext(userDataContext);

  const deposits = userData?.transactions.filter(
    (transaction) => transaction.type.toLowerCase() === "deposit"
  );

  return (
    <PrivateRoute>
      <Meta
        title="Blue Chip - Deposit - Online Bank"
        description="Blue Chip Bank | Deposit into your account"
      />
      <Dash />

      <Box minHeight="100vh" sx={{ background: "var(--darker)" }}>
        <Sidebar>
          <AppBar page="Deposit" />
          <Container>
            <Typography>FUND YOUR ACCOUNT</Typography>
            <Stack
              mt={2}
              direction={{ xs: "column", md: "row" }}
              alignItems="center"
              justifyContent="flex-start"
              gap={2}
            >
              <Button
                variant="text"
                disableElevation
                endIcon={<MdArrowDropDown />}
                sx={{
                  p: 2,
                  color: "#fff",
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontFamily: "inherit",
                  background: "var(--green)",
                  transition: "0.5s ease-in",
                  borderRadius: 2,

                  "&:hover": {
                    transition: "0.5s ease-out",
                    background: "var(--green-hover)",
                  },
                  width: "100%",
                }}
              >
                Select Payment Method
              </Button>
              <Button
                variant="text"
                disableElevation
                sx={{
                  p: 2,
                  color: "#fff",
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontFamily: "inherit",
                  background: "var(--green)",
                  transition: "0.5s ease-in",
                  borderRadius: 2,

                  "&:hover": {
                    transition: "0.5s ease-out",
                    background: "var(--green-hover)",
                  },
                  width: "100%",
                }}
              >
                Upload Proof of Deposit
              </Button>
            </Stack>
          </Container>
          <Container>
            <Typography>DEPOSIT HISTORY</Typography>
            {(!deposits || deposits.length === 0) && (
              <Stack
                alignItems="center"
                justifyContent="center"
                mt={8}
                py={2}
                sx={{ color: "var(--mid)" }}
              >
                <Box sx={{ fontSize: "64px" }}>
                  <FaFolderOpen />
                </Box>
                <Typography>No Transactions Yet</Typography>
              </Stack>
            )}
            {deposits && deposits.length > 0 && (
              <Transactions
                transactions={deposits}
                currency={userData?.currency}
              />
            )}
          </Container>
        </Sidebar>
      </Box>
      <MobileNav />
    </PrivateRoute>
  );
};

export default Deposit;
