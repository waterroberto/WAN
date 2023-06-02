import { Box, CircularProgress } from "@mui/material";

const Progress = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        my: 4,
      }}
    >
      <Box
        sx={{
          py: 4,
          px: 5,
          background: "#fff",
          borderRadius: 2,
        }}
      >
        <CircularProgress />
      </Box>
    </Box>
  );
};

export default Progress;
