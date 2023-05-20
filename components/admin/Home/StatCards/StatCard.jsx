import { Box, Typography } from "@mui/material";
import React from "react";

const StatCard = (props) => {
  return (
    <Box sx={{ background: "var(--dark)", p: 3, borderRadius: 1 }}>
      <span>{props.icon}</span>
      <Typography
        sx={{ color: "var(--mid)" }}
        fontWeight={300}
        textTransform="uppercase"
        fontSize={14}
        my={2}
      >
        {props.name}
      </Typography>

      <Typography sx={{ color: "var(--blue)" }} fontWeight={600} fontSize={26}>
        {props.body.toLocaleString()}
      </Typography>
    </Box>
  );
};

export default StatCard;
