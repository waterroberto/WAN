import { ArrowForwardRounded } from '@mui/icons-material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import {
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import goalImage from '../../../assets/goal-1.jpg';
import Layout from '../../Layout/Layout';

const aboutList = [
  'Learn To Budge',
  'Save And Invest Your Money',
  'Create An Emergency Fund',
  'Get Out Of Debt',
];

const GoalSetting = () => {
  return (
    <Grid container columns={12} className='bg-gray-900'>
      <Grid item xs={12} sm={12} md={6} width='100%' data-aos='fade-left'>
        <Layout>
          <Image
            src={goalImage}
            alt='About Incrypto Finance. Wallet balance svg'
            style={{
              width: '100%',
              height: '100%',
              maxWidth: '700px',
              maxHeight: '700px',
              borderRadius: '40px',
            }}
          />
        </Layout>
      </Grid>
      <Grid item xs={12} sm={12} md={6} width='100%' data-aos='fade-right'>
        <Layout>
          <Typography
            mb={2}
            sx={{
              fontFamily: 'inherit',
              color: 'secondary.dark',
              fontWeight: 500,
              color: '#fff',
              fontSize: {
                xs: '1rem',
                sm: '1.5rem',
                md: '2rem',
                lg: '2.3rem',
              },
            }}
          >
            Goal Setting
          </Typography>
          <Typography
            mb={2}
            sx={{
              fontFamily: 'inherit',
              color: 'secondary.dark',
              fontWeight: 700,
              color: '#fff',
              fontSize: {
                xs: '1.8rem',
                sm: '2rem',
                md: '2.5rem',
                lg: '3rem',
              },
            }}
          >
            Manage Your Money With Online Banking Solution
          </Typography>
          <Typography
            mb={4}
            sx={{
              fontFamily: 'inherit',
              color: 'secondary.dark',
              fontWeight: 300,
              color: '#fff',
              fontSize: {
                xs: '1.1rem',
                sm: '1.1rem',
                md: '1.2rem',
              },
            }}
          >
            With South BANK it is simple to get started Banking, and it’s easy
            to get the support needed to hone your skills. You’ll be able to
            benefit from one on one support from our specialist team and develop
            your expertise with our professional trading resources and insights.
            For beginner and advanced bankers alike we offer high leverage,
            guaranteed stop losses on every trade, and our fixed spreads remain
            constant to give you greater strategic power and control.
          </Typography>

          <List>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              {aboutList.map((text) => (
                <Grid key={text} item xs={12} md={6}>
                  <ListItem>
                    <ListItemIcon sx={{ color: '#fff' }}>
                      <CheckBoxIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={text}
                      sx={{
                        color: '#fff',
                        fontSize: '0.7rem',
                      }}
                    />
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </List>
        </Layout>
      </Grid>
    </Grid>
  );
};

export default GoalSetting;
