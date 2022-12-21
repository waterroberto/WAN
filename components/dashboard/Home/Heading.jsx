import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { MdOutlineWaterfallChart, MdRemoveCircle } from 'react-icons/md';
import { GiBanknote } from 'react-icons/gi';
import { RiWallet3Fill } from 'react-icons/ri';

const links = [
  { name: 'Deposit', url: '/account/deposit', icon: <RiWallet3Fill /> },
  { name: 'Withdraw', url: '/account/withdraw', icon: <MdRemoveCircle /> },
  { name: 'Invest', url: '/account/invest', icon: <MdOutlineWaterfallChart /> },
  { name: 'Loans', url: '/account/loans', icon: <GiBanknote /> },
];

const Heading = () => {
  return (
    <Grid container columns={12}>
      <Grid item xs={12} sm={12} md={6} width='100%'>
        <Box
          mx={{ md: 2 }}
          my={{ xs: 2, sm: 2, md: 0 }}
          p={6}
          sx={{ background: 'var(--mid)', borderRadius: '0.5rem' }}
        ></Box>
      </Grid>
      <Grid item xs={12} sm={12} md={6} width='100%'>
        <Grid container columns={12} spacing={2}>
          {links.map((link) => (
            <Grid key={link.name} item xs={3} sm={3} width='100%'>
              <Link href={link.url}>
                <Box
                  p={{ xs: 2, sm: 3 }}
                  sx={{
                    background: 'var(--dark)',
                    borderRadius: '0.5rem',
                    outline: '2px solid var(--darker)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: { xs: '1rem', sm: '1.5rem' },
                    color: 'var(--mid)',
                  }}
                >
                  {link.icon}
                </Box>
                <Typography
                  sx={{
                    textAlign: 'center',
                    fontWeight: 600,
                    my: 2,
                    fontSize: '14px',
                  }}
                >
                  {link.name}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Heading;
