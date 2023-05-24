import React from "react";
import AdminRoute from "../../../components/auth/AdminRoute";
import { Meta, Layout } from "../../../components";
import AdminMobileNav from "../../../components/admin/AdminMobileNav";
import { Box, Typography } from "@mui/material";
import Nav from "../../../components/admin/Nav";
import Users from "../../../components/admin/Home/Users/Users";

const UsersPage = () => {
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
            <Users />
          </Box>
        </Layout>
      </Box>
      <AdminMobileNav />
    </AdminRoute>
  );
};

export default UsersPage;
