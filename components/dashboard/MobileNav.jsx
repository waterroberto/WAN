import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddCardIcon from '@mui/icons-material/AddCard';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { GiSwipeCard } from 'react-icons/gi';

const MobileNav = () => {
  const router = useRouter();

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        display: { xs: 'block', sm: 'block', md: 'none' },
        background: '#f4f4f4',
        boxShadow: '2px 2px 3px #333',
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        sx={{
          maxWidth: 512,
          margin: 'auto',
          background: '#f4f4f4',

          '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            opacity: 0.75,
            background: `url("https://firebasestorage.googleapis.com/v0/b/elite-financial-services.appspot.com/o/pattern.png?alt=media&token=657fc54a-3643-40cb-b691-15c566a9f527") no-repeat center center/cover`,
          },

          '& *': {
            zIndex: 5,
          },
        }}
      >
        <BottomNavigationAction
          label='Home'
          icon={<HomeIcon />}
          onClick={() => router.push('/account')}
        />
        <BottomNavigationAction
          label='Deposit'
          icon={<AddCardIcon />}
          onClick={() => router.push('/account/deposit')}
        />
        <BottomNavigationAction
          label='Withdraw'
          icon={<AccountBalanceIcon />}
          onClick={() => router.push('/account/withdraw')}
        />
        <BottomNavigationAction
          label='Cards'
          icon={<GiSwipeCard className='text-2xl' />}
          onClick={() => router.push('/account/cards')}
        />
        <BottomNavigationAction
          label='Account'
          icon={<PersonIcon />}
          onClick={() => router.push('/account/profile')}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default MobileNav;
