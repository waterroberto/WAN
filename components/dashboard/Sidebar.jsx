import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MuiDrawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled, useTheme } from '@mui/material/styles';
import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { HiLogout, HiUser } from 'react-icons/hi';
import {
  MdDashboard,
  MdOutlineWaterfallChart,
  MdRemoveCircle,
} from 'react-icons/md';
import { RiBankLine, RiWallet3Fill } from 'react-icons/ri';
import logo from '../../assets/logo-2.svg';
import Layout from '../Layout/Layout';

const drawerWidth = 220;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const links1 = [
  { name: 'Dashboard', url: '/account', icon: <MdDashboard /> },
  { name: 'Deposit', url: '/account/deposit', icon: <RiWallet3Fill /> },
  { name: 'Withdraw', url: '/account/withdraw', icon: <MdRemoveCircle /> },
  // { name: 'Loan', url: '/account/loan', icon: <MdOutlineWaterfallChart /> },
];
const links2 = [
  { name: 'Loans & Grants', url: '/account/loan', icon: <RiBankLine /> },
  { name: 'Profile', url: '/account/profile', icon: <HiUser /> },
  { name: 'Logout', url: '/account/profile', icon: <HiLogout /> },
];

export default function Sidebar({ children }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant='permanent'
        open={open}
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiPaper-elevation': {
            color: 'var(--mid)',
            position: 'fixed',
            background: 'var(--dark)',
            transition: '0.5s ease-out',

            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              opacity: 0.5,
              background: `url("https://firebasestorage.googleapis.com/v0/b/elite-financial-services.appspot.com/o/pattern.png?alt=media&token=657fc54a-3643-40cb-b691-15c566a9f527") no-repeat center center/cover`,
            },

            '& *': {
              zIndex: 5,
            },
          },
        }}
      >
        <DrawerHeader
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              mx: 'auto',
              display: 'block',
              p: 0,
              pt: 3,
              pb: 1,
            }}
          >
            <Image
              src={require('../../public/logo.png')}
              alt='ICF Logo'
              width={open ? 60 : 50}
              height={open ? 60 : 50}
            />
          </IconButton>
          <IconButton
            onClick={handleDrawerClose}
            sx={{ display: open ? 'block' : 'none', color: 'var(--blue)' }}
          >
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {links1.map((link, index) => (
            <Link key={link.name} href={link.url}>
              <ListItem disablePadding sx={{ display: 'block', mb: 1 }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      color: 'var(--mid)',
                      fontSize: '1.3rem',
                    }}
                  >
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={link.name}
                    sx={{
                      opacity: open ? 1 : 0,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
        <Divider sx={{ my: 1 }} />
        <List>
          {links2.map((link, index) => (
            <Link key={link.name} href={link.url}>
              <ListItem disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                    mb: 1,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                      fontSize: '1.3rem',
                      color:
                        link.name === 'Logout' ? 'var(--red)' : 'var(--mid)',
                    }}
                  >
                    {link.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={link.name}
                    sx={{
                      color:
                        link.name === 'Logout' ? 'var(--red)' : 'var(--mid)',
                      opacity: open ? 1 : 0,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </Drawer>
      <Box
        component='main'
        pb={16}
        sx={{
          flexGrow: 1,
          background: 'var(--darker)',
          color: '#fff',
          minHeight: '100vh',
        }}
      >
        <Layout>{children}</Layout>
      </Box>
    </Box>
  );
}
