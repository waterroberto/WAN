import React from "react";
import parseDate from "../../../../utils/parseDate";
import { useContext } from "react";
import AdminDataContext from "../../../../context/AdminDataContext";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

const Users = () => {
  const router = useRouter();
  const { users } = useContext(AdminDataContext);

  return (
    <Box mt={8}>
      {users && users.length > 0 && (
        <>
          <Typography fontSize={24} fontWeight={700} mb={4}>
            Users
          </Typography>
          <div id="table-container">
            <table>
              <tr id="table-head-row">
                <th>Fullame</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Country</th>
                <th>Date Joined</th>
                <th>Account Level</th>
              </tr>
              {users.map((user) => (
                <tr
                  key={user?.id}
                  onClick={() => router.push(`admin/users/${user?.id}`)}
                >
                  <td>
                    {user?.firstName} {user?.lastName}
                  </td>
                  <td>{user?.email}</td>
                  <td>{user?.phone}</td>
                  <td>{user?.country}</td>
                  <td>{parseDate(user?.timeStamp?.seconds * 1000)}</td>
                  <td>Level {user?.accountLevel}</td>
                </tr>
              ))}
            </table>
          </div>
        </>
      )}
    </Box>
  );
};

export default Users;
