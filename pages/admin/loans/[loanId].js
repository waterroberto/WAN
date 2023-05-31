import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import { query, collection, getDocs } from "firebase/firestore";
import { db } from "../../../services/firebase.config";
import cogoToast from "cogo-toast";
import { Layout } from "../../../components";
import AdminRoute from "../../../components/auth/AdminRoute";
import Typography from "@mui/material";
import Nav from "../../../components/admin/Nav";
import AdminMobileNav from "../../../components/admin/AdminMobileNav";

const Loans = () => {
  const router = useRouter();
  const loanId = router.query?.loanId;
  const [userData, setUserData] = useState(null);
  const [loanData, setLoanData] = useState(null);

  return (
    <AdminRoute>
      <Box minHeight="100vh" sx={{ background: "var(--darker)" }}>
        <Nav />
        <Layout>
          <Box my={8} fontSize={18} sx={{ color: "var(--mid)" }}>
            Loan Details
          </Box>
        </Layout>

        <AdminMobileNav />
      </Box>
    </AdminRoute>
  );
};

export default Loans;
