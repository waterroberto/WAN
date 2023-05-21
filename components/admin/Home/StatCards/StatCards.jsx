import StatCard from "./StatCard";
import { Grid } from "@mui/material";
import { useState } from "react";
import { HiUsers } from "react-icons/hi2";
import { RiBankFill } from "react-icons/ri";
import { IoTodaySharp } from "react-icons/io5";

const StatCards = () => {
  const [statsData, setStatsData] = useState([
    {
      name: "users",
      icon: <HiUsers />,
      body: 7812,
      bg: "var(--blue-light)",
      color: "var(--blue)",
    },
    {
      name: "pending loans",
      icon: <RiBankFill />,
      body: 56,
      bg: "var(--secondary-light)",
      color: "var(--secondary)",
    },
    {
      name: "loans applied today",
      icon: <IoTodaySharp />,
      body: 12,
      bg: "var(--tertiary-light)",
      color: "var(--tertiary)",
    },
  ]);

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
