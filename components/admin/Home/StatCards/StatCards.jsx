import { Grid } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { HiUsers } from 'react-icons/hi2';
import { IoTodaySharp } from 'react-icons/io5';
import { RiBankFill } from 'react-icons/ri';
import AdminDataContext from '../../../../context/AdminDataContext';
import StatCard from './StatCard';

const StatCards = () => {
  const [statsData, setStatsData] = useState([]);
  const { users, loanRequests } = useContext(AdminDataContext);

  useEffect(() => {
    setStatsData([
      {
        name: 'users',
        icon: <HiUsers />,
        body: users ? users.length : 0,
        bg: 'var(--blue-light)',
        color: 'var(--blue)',
      },
      // {
      //   name: "pending loans",
      //   icon: <RiBankFill />,
      //   body: loanRequests ? loanRequests.length : 0,
      //   bg: "var(--secondary-light)",
      //   color: "var(--secondary)",
      // },
      // {
      //   name: "loans applied today",
      //   icon: <IoTodaySharp />,
      //   body: loanRequests
      //     ? loanRequests.filter(
      //         (request) =>
      //           new Date(
      //             request.applicationDate.seconds * 1000
      //           ).toLocaleDateString() === new Date().toLocaleDateString()
      //       ).length
      //     : 0,
      //   bg: "var(--tertiary-light)",
      //   color: "var(--tertiary)",
      // },
    ]);
  }, [users, loanRequests]);

  return (
    <Grid container columns={12} rowSpacing={2} columnSpacing={2}>
      {statsData.map((el) => (
        <Grid key={el.name} item xs={12} sm={6} lg={4} width='100%'>
          <StatCard el={el} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatCards;
