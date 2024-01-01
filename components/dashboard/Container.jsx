import { Box } from '@mui/material';

const Container = (props) => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1024px',
        margin: 'auto',
        background: '#f6f6f6',
        borderRadius: 2,
        mb: 4,
        p: 4,
        border: '1px solid rgb(1, 126, 255,0.2)',
        ...props?.sx,
      }}
      {...props}
    >
      {props.children}
    </Box>
  );
};

export default Container;
