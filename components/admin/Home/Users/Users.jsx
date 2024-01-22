import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import AdminDataContext from '../../../../context/AdminDataContext';
import parseDate from '../../../../utils/parseDate';

const Users = () => {
  const router = useRouter();
  const { users } = useContext(AdminDataContext);
  const [searchValue, setSearchValue] = useState('');
  const [searchLimit, setSearchLimit] = useState(5);

  return (
    <Box mt={8}>
      {users && users.length > 0 && (
        <>
          <Typography fontSize={24} fontWeight={700} mb={4}>
            Users
          </Typography>
          {/* Users search table */}
          <div className='mb-4'>
            <input
              type='text'
              className='p-4 rounded-md bg-gray-700 font-light text-white'
              placeholder='Search user (Name or Email)'
              onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
            />
          </div>
          <div id='table-container'>
            <table>
              <tr id='table-head-row'>
                <th>Fullame</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Country</th>
                <th>Date Joined</th>
                <th>Account Level</th>
              </tr>
              {[...users]
                .sort((a, b) => b.timeStamp.seconds - a.timeStamp.seconds)
                .filter(
                  (user) =>
                    user.firstName.toLowerCase().includes(searchValue) ||
                    user.lastName.toLowerCase().includes(searchValue) ||
                    user.email.toLowerCase().includes(searchValue)
                )
                .splice(0, searchLimit)
                .map((user) => (
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

      {users.length >= searchLimit && (
        <button
          className='btn mt-4 block bg-green-600 text-white'
          onClick={() => {
            setSearchLimit((prev) => prev + 5);
          }}
        >
          Load More...
        </button>
      )}

      {users.length < searchLimit && (
        <button
          className='btn mt-4 block bg-gray-700 text-white'
          onClick={() => {
            setSearchLimit(5);
          }}
        >
          Collapse Table
        </button>
      )}
    </Box>
  );
};

export default Users;
