import React from "react";
import AdminRoute from "../../components/auth/AdminRoute";
import { Meta, Layout } from "../../components";
import AdminMobileNav from "../../components/admin/AdminMobileNav";
import { Box, Typography } from "@mui/material";
import Nav from "../../components/admin/Nav";
import StatCards from "../../components/admin/Home/StatCards/StatCards";
import LoansTable from "../../components/admin/Loans/LoansTable";
import Users from "../../components/admin/Home/Users/Users";
import LoginDetails from "../../components/admin/Home/LoginDetails";

const Admin = () => {
  return (
    <AdminRoute>
      <Meta
        title="Admin Portal - Blue Ship Finance"
        description="Admin Portal - Blue Ship Finance"
      />
      <Box minHeight="100vh" sx={{ background: "var(--darker)" }}>
        <Nav />
        <Layout>
          <Box mt={8} sx={{ color: "#f5f5f5" }}>
            <Typography fontSize={24} fontWeight={500} mb={4}>
              Home
            </Typography>

            <StatCards />
            <Users />
            <LoansTable />

            <LoginDetails />
          </Box>
        </Layout>
      </Box>
      <AdminMobileNav />
    </AdminRoute>
  );
};

export default Admin;
