import { Box, Stack, Typography, Button } from "@mui/material";
import LoanHistory from "../../components/dashboard/Loan/LoanHistory";
import { FaFolderOpen } from "react-icons/fa";
import React from "react";
import { MobileNav, Meta, Dash, Sidebar } from "../../components";
import AppBar from "../../components/dashboard/AppBar";
import { useContext, useState } from "react";
import userDataContext from "../../context/UserDataContext";
import PopupModal from "../../components/Global/Modal";
import Container from "../../components/dashboard/Container";

const Loan = (props) => {
  const [open, setOpen] = useState(false);
  const { loans, currency } = useContext(userDataContext);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Meta
        title="Incrypto Finance - Loan - Online Bank"
        description="Incrypto Financial Bank | Loan into your account"
      />
      <Dash />

      <Box minHeight="100vh" sx={{ background: "var(--darker)" }}>
        <Sidebar>
          <AppBar page="Loan" />
          <Container>
            <Typography>LOAN APPLICATION</Typography>
            <Stack
              mt={2}
              direction={{ xs: "column", md: "row" }}
              alignItems="center"
              justifyContent="flex-start"
              gap={2}
              width={{ xs: "100%", md: "50%" }}
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
                  background: "var(--pale-blue)",
                  transition: "0.5s ease-in",
                  borderRadius: 2,

                  "&:hover": {
                    transition: "0.5s ease-out",
                    background: "var(--blue)",
                  },
                  width: "100%",
                }}
              >
                Apply for Loan
              </Button>
            </Stack>
          </Container>
          <Container>
            <Typography>LOAN HISTORY</Typography>
            {(!loans || loans.length === 0) && (
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
            {loans && loans.length > 0 && (
              <LoanHistory
                transactions={loans}
                currency={currency}
                modalOpen={open}
                handleModalClose={handleClose}
                handleModalOpen={handleOpen}
              />
            )}
          </Container>
        </Sidebar>
      </Box>
      <MobileNav />
    </>
  );
};

export default Loan;
