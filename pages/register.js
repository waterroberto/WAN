import React, { useContext, useState } from 'react';
import { NativeSelect, FormControl, InputLabel } from '@mui/material';
import { StyledOption, CustomSelect } from '../components/UnstyledSelect';
import { Meta, Layout } from '../components';
import { styled, Box, Typography, Button } from '@mui/material';
import cogoToast from 'cogo-toast';
import CustomInput from '../components/UnstyledInput';
import { countries } from '../static/Data';

const Blur = styled('div')(({ theme }) => ({
  background: '#1b4cd1',
  filter: 'blur(100px)',
  width: '400px',
  height: '400px',
  borderRadius: '50%',
  position: 'absolute',
  bottom: '-200px',
  left: '-100px',
}));

const Register = () => {
  const [userData, setUserData] = useState({
    identification: 'ID Number',
  });

  const { identification } = userData;

  const inputChangeHandler = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <>
      <Meta
        title='Register - Incrypto Finanace - Online crypto banking for everyone -
        Homepage'
        description='Get Stated with Incrypto Finance - Online crypto banking for everyone - Registeration page'
      />
      <Box
        sx={{
          background:
            'linear-gradient(55deg, rgba(6,6,6,1) 0%, rgba(27,27,27,1) 53%, rgba(27,34,52,1) 76%, rgba(9,9,9,1) 100%)',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
          backgroundPosition: 'fixed',
        }}
      >
        <Layout>
          <Box
            mx='auto'
            maxWidth='600px'
            sx={{ position: 'relative', zIndex: 1, overflow: 'hidden' }}
          >
            <Typography
              component='h2'
              color='primary.main'
              mb={2}
              sx={{
                fontSize: {
                  xs: '2rem',
                  sm: '2rem',
                  md: '2.5rem',
                },
                fontWeight: 600,
                fontFamily: 'inherit',
                textAlign: 'center',
              }}
            >
              Create Account
            </Typography>
            <Typography mb={4} sx={{ textAlign: 'center' }}>
              Please provide your valid information to register!
            </Typography>
            <form>
              <div className='input-group'>
                <CustomInput
                  aria-label='First Name'
                  placeholder='First Name'
                  type='text'
                  required
                />
                <CustomInput
                  aria-label='Last Name'
                  placeholder='Last Name'
                  type='text'
                  required
                />
              </div>
              <div className='input-group'>
                <CustomInput
                  aria-label='Email'
                  placeholder='Email'
                  type='email'
                  required
                />
                <CustomInput
                  aria-label='Phone Number'
                  placeholder='Phone Number'
                  type='phone'
                  required
                />
              </div>
              <div className='input-group'>
                <Box>
                  <Typography mt={2} mb={1} sx={{ fontSize: '12px' }}>
                    Country *
                  </Typography>
                  <FormControl fullWidth>
                    <NativeSelect
                      defaultValue={'United States'}
                      inputProps={{
                        name: 'country',
                        id: 'country',
                      }}
                      sx={{
                        width: '100%',
                        background: '#1b1b1b',
                        color: '#ccc',
                        padding: '0.75rem 1rem',
                        borderRadius: '10px',
                        fontSize: '14px',
                        border: '1px solid #222',
                        color: '#ccc',
                        '&:before, &:after': {
                          display: 'none',
                        },
                      }}
                    >
                      {countries.map((country, index) => (
                        <option
                          value={country.name}
                          key={`${index}-${country.code}`}
                          style={{ background: '#1b1b1b' }}
                        >
                          {country.name}
                        </option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                </Box>
                <Box sx={{ width: '100%' }}>
                  <Typography mt={2} mb={1} sx={{ fontSize: '12px' }}>
                    Specify City *
                  </Typography>
                  <CustomInput
                    aria-label='City'
                    placeholder='City'
                    type='text'
                    required
                  />
                </Box>
              </div>

              <div className='input-group'>
                <CustomInput
                  aria-label='Zip Code'
                  placeholder='Zip Code'
                  type='zipcode'
                  required
                />
                <CustomInput
                  aria-label='Residential Address'
                  placeholder='Residential Address'
                  type='address'
                  required
                />
              </div>

              <div className='input-group'>
                <Box>
                  <Typography my={1} sx={{ fontSize: '12px' }}>
                    Gender *
                  </Typography>
                  <CustomSelect defaultValue={'Male'}>
                    <StyledOption value={'Male'}>Male</StyledOption>
                    <StyledOption value={'Female'}>Female</StyledOption>
                    <StyledOption value={'Other'}>Other</StyledOption>
                  </CustomSelect>
                </Box>
                <Box width='100%'>
                  <Typography my={1} sx={{ fontSize: '12px' }}>
                    Date of Birth*
                  </Typography>
                  <CustomInput
                    aria-label='Date of Birth'
                    placeholder='Date of Birth'
                    type='date'
                    required
                  />
                </Box>
              </div>

              <div className='input-group'>
                <Box>
                  <Typography my={1} sx={{ fontSize: '12px' }}>
                    Means of Identification *
                  </Typography>
                  <CustomSelect
                    id='identification'
                    defaultValue={identification}
                    onChange={(e) => {
                      setUserData((prev) => ({
                        ...prev,
                        identification: e.target.innerText,
                      }));
                    }}
                  >
                    <StyledOption value={'ID Number'}>ID Number</StyledOption>
                    <StyledOption value={'SSN'}>SSN</StyledOption>
                    <StyledOption value={'BVN'}>BVN</StyledOption>
                    <StyledOption value={'Passport Number'}>
                      Passport Number
                    </StyledOption>
                  </CustomSelect>
                </Box>
                <Box width='100%'>
                  <Typography my={1} sx={{ fontSize: '12px' }}>
                    {identification} *
                  </Typography>
                  <CustomInput
                    aria-label='Identification'
                    placeholder={identification}
                    type='text'
                    required
                  />
                </Box>
              </div>

              <div className='input-group'>
                <CustomInput
                  aria-label='Password'
                  placeholder='Password'
                  type='password'
                  required
                />
                <CustomInput
                  aria-label='Confirm Password'
                  placeholder='Confirm Password'
                  type='password'
                  required
                />
              </div>

              <Button
                variant='contained'
                type='submit'
                disableElevation
                sx={{
                  color: '#fff',
                  padding: '0.8rem',
                  fontWeight: 300,
                  fontFamily: 'inherit',
                  width: '100%',
                  mb: 2,
                  '&:hover': {
                    background: '#1b4cd1',
                  },
                }}
              >
                REGISTER
              </Button>
            </form>
          </Box>
        </Layout>
        <Blur />
      </Box>
    </>
  );
};

export default Register;
