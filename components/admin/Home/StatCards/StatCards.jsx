import StatCard from "./StatCard";
import { Grid } from "@mui/material";
import { useState } from "react";

const StatCards = () => {
  const [statsData, setStatsData] = useState([
    { name: "users", icon: "ICON", body: 7812 },
    { name: "pending loans", icon: "ICON", body: 56 },
    { name: "loans applied today", icon: "ICON", body: 12 },
  ]);

  return (
    <Grid container columns={12} rowSpacing={2} columnSpacing={2}>
      {statsData.map((el) => (
        <Grid key={el.name} item xs={12} sm={6} lg={4} width="100%">
          <StatCard name={el.name} icon={el.icon} body={el.body} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatCards;
