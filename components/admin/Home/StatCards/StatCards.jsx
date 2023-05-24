import StatCard from "./StatCard";
import { Grid } from "@mui/material";
import { HiUsers } from "react-icons/hi2";
import { RiBankFill } from "react-icons/ri";
import { IoTodaySharp } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import AdminDataContext from "../../../../context/AdminDataContext";

const StatCards = () => {
  const [statsData, setStatsData] = useState([]);
  const { users, loanRequests } = useContext(AdminDataContext);

  useEffect(() => {
    setStatsData([
      {
        name: "users",
        icon: <HiUsers />,
        body: users ? users.length : 0,
        bg: "var(--blue-light)",
        color: "var(--blue)",
      },
      {
        name: "pending loans",
        icon: <RiBankFill />,
        body: loanRequests ? loanRequests.length : 0,
        bg: "var(--secondary-light)",
        color: "var(--secondary)",
      },
      {
        name: "loans applied today",
        icon: <IoTodaySharp />,
        body: 0,
        bg: "var(--tertiary-light)",
        color: "var(--tertiary)",
      },
    ]);
  }, [users]);

  return (
    <Grid container columns={12} rowSpacing={2} columnSpacing={2}>
      {statsData.map((el) => (
        <Grid key={el.name} item xs={12} sm={6} lg={4} width="100%">
          <StatCard el={el} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatCards;
