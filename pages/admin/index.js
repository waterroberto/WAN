import React from "react";
import AdminRoute from "../../components/auth/AdminRoute";
import { Meta, Layout } from "../../components";
import AdminMobileNav from "../../components/admin/AdminMobileNav";

const Admin = () => {
  return (
    <AdminRoute>
      <Meta
        title="Admin Portal - Blue Ship Finance"
        description="Admin Portal - Blue Ship Finance"
      />
      <Layout>
        <p>Admin</p>
      </Layout>
      <AdminMobileNav />
    </AdminRoute>
  );
};

export default Admin;
