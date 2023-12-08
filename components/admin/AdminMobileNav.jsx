import { Person } from '@mui/icons-material';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Paper } from '@mui/material';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useRouter } from 'next/router';
import React from 'react';
import { HiHome, HiUsers } from 'react-icons/hi';

const AdminMobileNav = () => {
  const router = useRouter();

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 20,
        // display: { xs: "block", sm: "block", md: "none" },
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        sx={{
          background: 'var(--dark)',

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
          icon={<HiHome style={{ fontSize: 20 }} />}
          sx={{ color: '#fff' }}
          onClick={() => router.push('/admin')}
        />
        <BottomNavigationAction
          label='Register'
          icon={<Person />}
          sx={{ color: '#fff' }}
          onClick={() => router.push('/admin/register')}
        />
        <BottomNavigationAction
          label='Deposits'
          icon={<TrendingUpIcon />}
          sx={{ color: '#fff' }}
          onClick={() => router.push('/admin/deposits')}
        />
        <BottomNavigationAction
          label='Withdrawals'
          icon={<AccountBalanceIcon />}
          sx={{ color: '#fff' }}
          onClick={() => router.push('/account/withdrawals')}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default AdminMobileNav;
