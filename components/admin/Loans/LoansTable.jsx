import React from "react";
import { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import parseDate from "../../../utils/parseDate";
import AdminDataContext from "../../../context/AdminDataContext";

const LoansTable = () => {
  const router = useRouter();
  const { loanRequests } = useContext(AdminDataContext);

  return (
    <Box my={8}>
      {loanRequests && loanRequests.length > 0 && (
        <>
          <Typography fontSize={24} fontWeight={700} mb={4}>
            Pending Loan Requests
          </Typography>
          <div id="table-container">
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
                    onClick={() => router.push(`admin/loans/${loan?._id}`)}
                  >
                    <td>
                      {loan?.currency} {parseInt(loan?.amount).toLocaleString()}
                    </td>
                    <td>{loan?.duration} Months</td>
                    <td>{parseDate(loan?.applicationDate?.seconds * 1000)}</td>
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
    </Box>
  );
};

export default LoansTable;
