import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import { query, collection, getDocs } from "firebase/firestore";
import { db } from "../../../services/firebase.config";
import cogoToast from "cogo-toast";
import AdminRoute from "../../../components/auth/AdminRoute";
import Nav from "../../../components/admin/Nav";
import { Layout } from "../../../components";
import { Typography } from "@mui/material";
import parseDate from "../../../utils/parseDate";
import AdminMobileNav from "../../../components/admin/AdminMobileNav";
import Link from "next/link";

const Loans = () => {
  const router = useRouter();
  const [loanRequests, setLoanRequests] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchLoanRequests = async () => {
      const q = query(collection(db, "loanRequests"));
      const loans = [];

      try {
        const snapshot = await getDocs(q);
        snapshot.forEach((doc) => {
          loans.push(doc.data());
        });

        setLoanRequests(loans);
        setLoading(false);
      } catch (error) {
        console.log(error);

        cogoToast.error("Error fetching loans");
        setLoading(false);
      }
    };

    fetchLoanRequests();
  }, []);

  return (
    <AdminRoute>
      <Nav />
      <Box minHeight="100vh" sx={{ background: "var(--darker)" }}>
        <Layout>
          {loading && !loanRequests && (
            <Typography
              fontSize={32}
              sx={{
                height: "60vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--mid)",
              }}
            >
              Loading...
            </Typography>
          )}
          {loanRequests && loanRequests.length > 0 && (
            <>
              <Typography
                my={8}
                color="var(--mid)"
                fontSize={24}
                fontWeight={700}
                mb={4}
              >
                All Loan Requests
              </Typography>
              <div id="table-container" style={{ color: "var(--mid)" }}>
                <table>
                  <tr id="table-head-row">
                    <th>Amount</th>
                    <th>Duration</th>
                    <th>Date Applied</th>
                    <th>Status</th>
                    <th>Financial Placement</th>
                  </tr>
                  {[...loanRequests]
                    .sort(
                      (a, b) =>
                        b.applicationDate.seconds - a.applicationDate.seconds
                    )
                    .map((loan) => (
                      <tr
                        key={loan?._id}
                        style={{
                          opacity: loan?.status === "declined" ? 0.5 : 1,
                        }}
                      >
                        <Link href={`/admin/loans/${loan?._id}`}>
                          <td>
                            {loan?.currency}{" "}
                            {parseInt(loan?.amount).toLocaleString()}
                          </td>
                        </Link>
                        <td>{loan?.duration} Months</td>
                        <td>
                          {parseDate(loan?.applicationDate?.seconds * 1000)}
                        </td>
                        <td
                          style={{
                            color:
                              loan?.status === "pending"
                                ? "var(--secondary)"
                                : loan?.status === "declined"
                                ? "var(--red)"
                                : loan?.status === "approved"
                                ? "var(--green)"
                                : "var(--mid)",
                            fontWeight: 600,
                          }}
                        >
                          {loan?.status.toUpperCase()}
                        </td>
                        <td>{loan?.placement}</td>
                      </tr>
                    ))}
                </table>
              </div>
            </>
          )}
        </Layout>
        <AdminMobileNav />
      </Box>
    </AdminRoute>
  );
};

export default Loans;
