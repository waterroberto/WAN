import React from 'react';
import { Box, Typography, Grid, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Layout } from '../../';
import Image from "next/image";
import aboutImage from '../../../assets/about-img-1.png'
import CheckIcon from '@mui/icons-material/Check';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Avatar from '@mui/material/Avatar';




const headingStyles = {
  fontFamily: 'inherit',
  fontWeight: 700,
  textAlign: 'center',
  fontSize: { xs: '1.5rem', sm: '1.8rem', lg: '2rem' },
  color: '#1b4cd1',
};

const subheadingStyles = {
  fontFamily: 'inherit',
  fontWeight: 500,
  color: '#fff',
  textAlign: 'center',
  fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
};

const aboutList = [
  "Cards that work all across the world.",
  "Highest Returns on your investments",
  "No ATM fees. No minimum balance. No overdrafts",
]

const Statistics = () => {
  return (
    <Box
      sx={{
        background: '#060606',
      }}
    >
      <Layout>
        <Image 
              src={aboutImage}
              alt="People smiling and happy"
              style={{
                width: "100%",
                height: "100%",
                maxWidth: "700px",
                maxHeight: "700px",
                filter: "hue-rotate(10deg)",
              }}
        />

        <Typography
          mt={1}
          mb={4}
          sx={{
            fontFamily: 'inherit',
            fontWeight: 300,
            color: '#00a9a4',
            textAlign: 'left',
            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
          }}
          data-aos='fade-up'
        >
          Smart Banking
        </Typography>

        <Typography
          mt={1}
          mb={4}
          sx={{
            fontFamily: 'inherit',
            fontWeight: 300,
            color: '#fff',
            textAlign: 'left',
            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
          }}
          data-aos='fade-up'
        >
          The Better Way To Save & Invest Online Banking
        </Typography>


        <Typography
          mt={1}
          mb={4}
          sx={{
            fontFamily: 'inherit',
            fontWeight: 300,
            color: '#fff',
            textAlign: 'left',
            fontSize: { xs: '1.1rem', sm: '1.2rem', md: '1.3rem' },
          }}
          data-aos='fade-up'
        >
          Take Control Of Your Financial Future. Hear Our New Pick For Data Driven Investor (+203%). Maximize Returns, Sleep Well, And Build True Wealth with our Proprietary Quant Ratings.
        </Typography>


        <Box

        >

          <List>
            {aboutList.map((text) => (
              <ListItem  key={text}>
                  <ListItemIcon sx={{color: "#fff",}}>
                    <DoneAllIcon/>
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      color: "#fff"
                    }}
                  />
              </ListItem>
            ))} 
          </List>
          

        </Box>
      </Layout>
    </Box>
  );
};

export default Statistics;
