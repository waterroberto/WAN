import {
  Box,
  Stack,
  Typography,
  Button,
  Grid,
  NativeSelect,
} from "@mui/material";
import { FormControl } from "@mui/material";
import LoanHistory from "../../components/dashboard/Loan/LoanHistory";
import { FaFolderOpen } from "react-icons/fa";
import React from "react";
import { MobileNav, Meta, Dash, Sidebar } from "../../components";
import AppBar from "../../components/dashboard/AppBar";
import { useContext, useState } from "react";
import userDataContext from "../../context/UserDataContext";
import PopupModal from "../../components/Global/Modal";
import Container from "../../components/dashboard/Container";
// import CustomInput from "../../components/UnstyledInput";
import PrivateRoute from "../../components/auth/PrivateRoute";

const Loan = (props) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const { loans, currency } = useContext(userDataContext);

  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  return (
    <PrivateRoute>
      <Meta
        title="Incrypto Finance - Loan - Online Bank"
        description="Incrypto Financial Bank | Loan into your account"
      />
      <Dash />

      <PopupModal
        open={open1}
        handleClose={handleClose1}
        handleOpen={handleOpen1}
        title="Loan Application"
        sx={{ maxWidth: "768px" }}
      >
        <Typography mb={2} fontWeight={300}>
          Loan Details
        </Typography>
        <Grid
          container
          mx="auto"
          rowSpacing={1}
          columnSpacing={{ sm: 1 }}
          columns={12}
          alignItems="center"
        >
          <Grid item xs={12} sm={6} width="100%">
            <input
              className="styled-input"
              aria-label="Desired Amount"
              placeholder="Desired Amount"
              type="number"
              required
              sx={{
                background: "var(--dark)",
                border: "1px solid #555",
                fontSize: 15,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} width="100%">
            <input
              className="styled-input"
              aria-label="Repayment Duration"
              placeholder="Repayment Duration (months)"
              type="number"
              required
              sx={{
                background: "var(--dark)",
                border: "1px solid #555",
                fontSize: 15,
              }}
            />
          </Grid>
        </Grid>
        <Typography my={2} fontWeight={300}>
          Applicant`s Details
        </Typography>
        <Grid
          container
          mx="auto"
          rowSpacing={1}
          columnSpacing={{ sm: 1 }}
          columns={12}
          alignItems="center"
        >
          <Grid item xs={12} sm={6} width="100%">
            <input
              className="styled-input"
              aria-label="Monthly Income"
              placeholder="Monthly Income"
              type="number"
              required
              sx={{
                background: "var(--dark)",
                border: "1px solid #555",
                fontSize: 15,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} width="100%">
            <Typography mt={{ xs: 2, sm: -6 }} mb={1} fontSize={14}>
              Financial Placement
            </Typography>
            <FormControl fullWidth>
              <NativeSelect
                defaultValue={"Under Debt Review"}
                inputProps={{
                  name: "financial-placement",
                  id: "financial-placement",
                }}
                sx={{
                  width: "100%",
                  color: "#ccc",
                  padding: "0.75rem 1rem",
                  borderRadius: "10px",
                  fontSize: "14px",
                  color: "#ccc",
                  background: "var(--dark)",
                  border: "1px solid #555",
                  fontSize: 15,

                  "&:before, &:after": {
                    display: "none",
                  },
                }}
              >
                <option value="Unpaid Loan">Unpaid Loan</option>
                <option value="Bad Credit Score">Bad Credit Score</option>
                <option value="Under Debt Review">Under Debt Review</option>
                <option value="Blacklisted">Blacklisted</option>
                <option value="None">None</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} width="100%">
            <Typography mt={{ xs: 2, sm: 0 }} mb={1} fontSize={14}>
              Employment Status
            </Typography>
            <FormControl fullWidth>
              <NativeSelect
                defaultValue={"Permanent Employment"}
                inputProps={{
                  name: "employment-status",
                  id: "employment-status",
                }}
                sx={{
                  width: "100%",
                  color: "#ccc",
                  padding: "0.75rem 1rem",
                  borderRadius: "10px",
                  fontSize: "14px",
                  color: "#ccc",
                  background: "var(--dark)",
                  border: "1px solid #555",
                  fontSize: 15,

                  "&:before, &:after": {
                    display: "none",
                  },
                }}
              >
                <option value="Permanent Employment">
                  Permanent Employment
                </option>
                <option value="Contract Based">Contract Based</option>
                <option value="Self Employed">Self Employed</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} width="100%">
            <input
              className="styled-input"
              aria-label="Employment Duration"
              placeholder="Employment Duration (Years)"
              type="number"
              required
              sx={{
                background: "var(--dark)",
                border: "1px solid #555",
                fontSize: 15,
                mt: { xs: 2, sm: 5 },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6} width="100%">
            <Button
              variant="text"
              disableElevation
              sx={{
                p: 1.5,
                color: "#fff",
                textTransform: "capitalize",
                fontFamily: "inherit",
                background: "var(--blue)",
                transition: "0.5s ease-in",
                borderRadius: 1,

                "&:hover": {
                  transition: "0.5s ease-out",
                  background: "var(--blue-hover)",
                },
                width: "100%",
              }}
              onClick={() => {}}
              component="label"
            >
              Upload Recent Bank Statement (3 - 6 months)
              <input
                hidden
                accept=".png, .jpg, .jpeg, .pdf"
                multiple
                type="file"
              />
            </Button>
          </Grid>
        </Grid>
        <Button
          disableElevation
          sx={{
            mt: 4,
            p: 2,
            color: "#fff",
            textTransform: "capitalize",
            fontFamily: "inherit",
            background: "var(--green)",

            "&:hover": {
              transition: "0.5s ease-out",
              background: "var(--green-hover)",
            },
            width: "100%",
          }}
          onClick={() => {}}
        >
          Proceed
        </Button>
      </PopupModal>
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
                onClick={handleOpen1}
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
                modalOpen={open2}
                handleModalClose={handleClose2}
                handleModalOpen={handleOpen2}
              />
            )}
          </Container>
        </Sidebar>
      </Box>
      <MobileNav />
    </PrivateRoute>
  );
};

export default Loan;
