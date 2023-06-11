import { Box, Stack, Typography, Button } from "@mui/material";
import React, { useContext } from "react";
import { MobileNav, Meta, Dash, Sidebar, Heading } from "../../components";
import AppBar from "../../components/dashboard/AppBar";
import CryptoMarquee from "../../components/dashboard/CryptoMarquee";
import InvestCards from "../../components/dashboard/InvestCards";
import ReferralCard from "../../components/dashboard/ReferralCard";
import Transactions from "../../components/dashboard/Transactions";
import userDataContext from "../../context/UserDataContext";
import PrivateRoute from "../../components/auth/PrivateRoute";

const Dashboard = () => {
  const { userData } = useContext(userDataContext);

  return (
    <PrivateRoute>
      <Meta
        title="Blue Ship Finance - Account - Online Bank"
        description="Blue Ship Financial Bank | Welcome to your account"
      />
      <Dash />

      <Box minHeight="100vh" sx={{ background: "var(--darker)" }}>
        <Sidebar>
          <AppBar page="Dashboard" />
          <Heading />
          {/* <CryptoMarquee /> */}
          <InvestCards />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            mt={4}
          >
            <Typography sx={{ fontSize: "1.4rem", fontWeight: 700, p: 1 }}>
              Transactions
            </Typography>
            <Button variant="outlined" color="secondary">
              {userData?.transactions?.length}
            </Button>
          </Stack>
          <Transactions
            transactions={userData?.transactions}
            currency={userData?.currency}
            customStyles={{ p: { xs: 2, sm: 3, md: 4 } }}
          />
          <ReferralCard />
        </Sidebar>
      </Box>
      <MobileNav />
    </PrivateRoute>
  );
};

export default Dashboard;
