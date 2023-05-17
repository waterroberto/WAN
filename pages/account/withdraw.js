import { Box, Stack, Typography, Button } from "@mui/material";
import PrivateRoute from "../../components/auth/PrivateRoute";
import Container from "../../components/dashboard/Container";
import Transactions from "../../components/dashboard/Transactions";
import { FaFolderOpen } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";
import React, { useContext } from "react";
import { MobileNav, Meta, Dash, Sidebar } from "../../components";
import AppBar from "../../components/dashboard/AppBar";
import userDataContext from "../../context/UserDataContext";

const Withdraw = () => {
  const { transactions, currency } = useContext(userDataContext);

  const withdrawals = transactions.filter(
    (transaction) => transaction.type.toLowerCase() === "withdraw"
  );

  return (
    <PrivateRoute>
      <Meta
        title="Incrypto Finance - Withdraw - Online Bank"
        description="Incrypto Financial Bank | Withdraw into your account"
      />
      <Dash />

      <Box minHeight="100vh" sx={{ background: "var(--darker)" }}>
        <Sidebar>
          <AppBar page="Withdraw" />
          <Box
            sx={{
              width: "100%",
              maxWidth: "1024px",
              margin: "auto",
              mb: 4,
            }}
          >
            <Stack
              my={2}
              direction={{ xs: "column", sm: "row" }}
              gap={2}
              sx={{
                "& div": {
                  p: 2,
                  width: "100%",
                  height: "180px",
                  borderRadius: 2,
                  background: "var(--dark)",
                },
              }}
            >
              <Box></Box>
              <Box></Box>
            </Stack>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              alignItems="center"
              justifyContent="flex-start"
              gap={2}
              width="100%"
            >
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
                Transfer to other banks
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
                Transfer to my account
              </Button>
            </Stack>
          </Box>
          <Container>
            <Typography>WITHDRAWAL HISTORY</Typography>
            {(!withdrawals || withdrawals.length === 0) && (
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
            {withdrawals && withdrawals.length > 0 && (
              <Transactions transactions={withdrawals} currency={currency} />
            )}
          </Container>
        </Sidebar>
      </Box>
      <MobileNav />
    </PrivateRoute>
  );
};

export default Withdraw;
