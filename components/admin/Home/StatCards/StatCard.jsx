import { Box, Typography } from "@mui/material";
import React from "react";

const iconStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  height: "44px",
  width: "44px",
  borderRadius: "44px",
  background: "red",
};

const StatCard = ({ el }) => {
  return (
    <Box sx={{ background: "var(--dark)", p: 3, borderRadius: 1 }}>
      <span style={{ ...iconStyle, color: el.color, background: el.bg }}>
        {el.icon}
      </span>
      <Typography
        sx={{ color: "var(--mid)" }}
        fontWeight={300}
        textTransform="uppercase"
        fontSize={14}
        my={2}
      >
        {el.name}
      </Typography>

      <Typography sx={{ color: "var(--blue)" }} fontWeight={600} fontSize={26}>
        {el.body.toLocaleString()}
      </Typography>
    </Box>
  );
};

export default StatCard;
