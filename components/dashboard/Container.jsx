import { Box } from "@mui/material";

const Container = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1024px",
        margin: "auto",
        background: "var(--dark)",
        borderRadius: 2,
        border: "1px solid #333",
        mb: 4,
        p: 4,
        ...props?.sx,
      }}
      {...props}
    >
      {props.children}
    </Box>
  );
};

export default Container;
