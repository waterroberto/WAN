import { Box, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useContext } from 'react';
import { MdOutlineWaterfallChart, MdRemoveCircle } from 'react-icons/md';
import { GiBanknote } from 'react-icons/gi';
import { RiWallet3Fill } from 'react-icons/ri';
import BalanceCard from './BalanceCard';
import DetailsCard from './DetailsCard';

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
        <BalanceCard />
      </Grid>
      <Grid item xs={12} sm={12} md={6} width='100%'>
        <DetailsCard />
      </Grid>
    </Grid>
  );
};

export default Heading;
