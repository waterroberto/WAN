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
  'Mobile Banking',
  'Online Deposit',
  'International Transfer',
  'Virtual Cards',
];

const GoalSetting = () => {
  return (
    <Grid container columns={12} className='bg-gray-900'>
      <Grid item xs={12} sm={12} md={6} width='100%' data-aos='fade-right'>
        <Layout>
          <Typography
            mb={2}
            sx={{
              fontFamily: 'inherit',
              color: 'secondary.dark',
              fontWeight: 700,
              color: '#fff',
              fontSize: {
                xs: '1.5rem',
                sm: '1.8rem',
                md: '2.5rem',
              },
            }}
          >
            Ultimate Online Banking Solution
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
            With The Capital Trust Finance Bank it is simple to get started with
            mobile banking, and easy to get the support needed to grow
            financially. You`ll benefit from one on one support from our
            specialist team and develop your expertise with our professional
            financial resources and insights.
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
                      }}
                    />
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </List>
        </Layout>
      </Grid>
      {/*  */}
      <Grid item xs={12} sm={12} md={6} width='100%' data-aos='fade-left'>
        <Layout>
          <div
            className='p-4 bg-red-400 min-h-[400px] rounded-xl'
            style={{
              background: `url('${goalImage.src}') no-repeat center center/cover`,
            }}
            data-aos='fade-left'
          ></div>
        </Layout>
      </Grid>
    </Grid>
  );
};

export default GoalSetting;
