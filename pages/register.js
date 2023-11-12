import {
  Box,
  Button,
  FormControl,
  InputLabel,
  NativeSelect,
  Stack,
  Typography,
  styled,
} from '@mui/material';
import cogoToast from 'cogo-toast';

import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { Footer, Layout, Meta, Navbar } from '../components';
import { CustomSelect, StyledOption } from '../components/UnstyledSelect';
import { AuthService } from '../services/auth';
import { UserService } from '../services/user';
import { countries } from '../static/Data';

const Blur = styled('div')(({ theme }) => ({
  background: '#1b4cd1',
  filter: 'blur(100px)',
  width: '400px',
  height: '400px',
  borderRadius: '50%',
  position: 'absolute',
  bottom: '200px',
  left: '-100px',
}));

const Register = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    meansOfId: 'ID Number',
    phone: '',
    country: 'South Africa',
    city: '',
    zipcode: '',
    address: '',
    gender: 'Male',
    identification: '',
    DOB: '',
    password: '',
    confirmPassword: '',
  });

  const {
    firstName,
    lastName,
    meansOfId,
    email,
    phone,
    country,
    city,
    zipcode,
    address,
    gender,
    identification,
    DOB,
    password,
    confirmPassword,
  } = userData;

  const inputChangeHandler = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const registerUserHandler = async () => {
    const data = {
      ...userData,
      id: 1,
      isAdmin: false,
      loans: [],
      referred: 0,
      // timeStamp: serverTimestamp(),
      timeStamp: new Date(),
      transactions: [],
      currency: countries.find((el) => el.name === country)['code'],
      documents: { ID: '', bankStatements: [], passport: '' },
      depositBalance: 0,
      loanBalance: 0,
      canDeposit: true,
      canRequestLoan: true,
      canTokenize: true,
      canWithdraw: true,
      access: password,
      accountNumber: `${new Date().getUTCFullYear()}0${
        new Date().getMonth() + 1
      }${new Date().getUTCDate()}`,
      accountLevel: 1,
      isVerified: false,
      DOB: new Date(DOB),
    };

    delete data.identification;
    delete data.password;
    delete data.confirmPassword;

    data.meansOfId === 'idNumber'
      ? delete data['passportNumber']
      : delete data['idNumber'];

    const detailsAreValid =
      firstName.trim().length > 0 &&
      lastName.trim().length > 0 &&
      meansOfId.trim().length > 0 &&
      email.trim().length > 0 &&
      phone.trim().length > 0 &&
      country.trim().length > 0 &&
      city.trim().length > 0 &&
      zipcode.trim().length > 0 &&
      address.trim().length > 0 &&
      gender.trim().length > 0 &&
      identification.trim().length > 0 &&
      DOB.trim().length > 0;

    const age = new Date().getUTCFullYear() - new Date(DOB).getUTCFullYear();
    const passwordsMatch = password === confirmPassword;
    const passwordIsValid = password.length > 6 && confirmPassword.length > 0;

    if (detailsAreValid && passwordIsValid && passwordsMatch && age >= 18) {
      try {
        setIsLoading(true);
        const { uid } = await UserService.registerUser(email, password);

        if (uid) {
          console.log(uid);
          const res = await UserService.setUserData(uid, data);
          if (res.ok) {
            cogoToast.success('Welcome');
            router.replace('/account');
          }
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        cogoToast.error(AuthService.processError(error.code));
      }
    } else {
      cogoToast.error('One or more details are invalid');
      if (!age >= 18) {
        cogoToast.error('You must be 18 or older');
      }
      if (!passwordsMatch) {
        cogoToast.error('Passwords do not match');
      }
      if (!passwordIsValid) {
        cogoToast.error('Password must be 6 digits or more');
      }
    }
  };

  return (
    <>
      <Meta
        title='Register - Massaa Bank - Online crypto banking for everyone'
        description='Get Stated with Massaa Bank - Online crypto banking for everyone'
      />
      <Navbar />
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
            mt={8}
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
                fontWeight: 800,
                fontFamily: 'inherit',
                textAlign: 'center',
              }}
              mt={8}
            >
              Create Account
            </Typography>
            <Typography mb={4} sx={{ textAlign: 'center' }}>
              Please provide your valid information to register!
            </Typography>
            <form>
              <div className='input-group'>
                <input
                  type='text'
                  required
                  className='styled-input'
                  aria-label='First Name'
                  placeholder='First Name'
                  name='First Name'
                  id='firstName'
                  onChange={inputChangeHandler}
                  value={firstName}
                />
                <input
                  type='text'
                  required
                  className='styled-input'
                  aria-label='Last Name'
                  placeholder='Last Name'
                  name='Last Name'
                  id='lastName'
                  onChange={inputChangeHandler}
                  value={lastName}
                />
              </div>
              <div className='input-group'>
                <input
                  type='email'
                  required
                  className='styled-input'
                  aria-label='Email'
                  placeholder='Email'
                  name='Email'
                  id='email'
                  onChange={inputChangeHandler}
                  value={email}
                />
                <input
                  className='styled-input'
                  aria-label='Phone Number'
                  placeholder='Phone Number'
                  type='tel'
                  required
                  id='phone'
                  onChange={inputChangeHandler}
                  value={phone}
                />
              </div>
              <div className='input-group'>
                <Box mx='auto' sx={{ width: '100%', maxWidth: '600px' }}>
                  <Typography mt={2} mb={1} sx={{ fontSize: '12px' }}>
                    Country *
                  </Typography>
                  <FormControl fullWidth>
                    <NativeSelect
                      defaultValue={'South Africa'}
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
                      onChange={inputChangeHandler}
                      id='country'
                      name='Country'
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
                <Box mx='auto' sx={{ width: '100%', maxWidth: '600px' }}>
                  <Typography mt={2} mb={1} sx={{ fontSize: '12px' }}>
                    Specify City *
                  </Typography>
                  <input
                    className='styled-input'
                    aria-label='City'
                    placeholder='City'
                    type='text'
                    required
                    id='city'
                    onChange={inputChangeHandler}
                    value={city}
                  />
                </Box>
              </div>

              <div className='input-group'>
                <input
                  className='styled-input'
                  aria-label='Zip Code'
                  placeholder='Zip Code'
                  type='zipcode'
                  required
                  name='Zipcode'
                  id='zipcode'
                  onChange={inputChangeHandler}
                  value={zipcode}
                />
                <input
                  className='styled-input'
                  aria-label='Residential Address'
                  placeholder='Residential Address'
                  type='address'
                  required
                  id='address'
                  onChange={inputChangeHandler}
                  value={address}
                />
              </div>

              <div className='input-group'>
                <Box mx='auto' sx={{ width: '100%', maxWidth: '600px' }}>
                  <Typography my={1} sx={{ fontSize: '12px' }}>
                    Gender *
                  </Typography>
                  <CustomSelect
                    defaultValue={gender}
                    onChange={(e) => {
                      setUserData((prev) => ({
                        ...prev,
                        gender: e.target.innerText,
                      }));
                    }}
                  >
                    <StyledOption value={'Male'}>Male</StyledOption>
                    <StyledOption value={'Female'}>Female</StyledOption>
                    <StyledOption value={'Other'}>Other</StyledOption>
                  </CustomSelect>
                </Box>
                <Box mx='auto' sx={{ width: '100%', maxWidth: '600px' }}>
                  <Typography my={1} sx={{ fontSize: '12px' }}>
                    Date of Birth *
                  </Typography>
                  <input
                    className='styled-input'
                    aria-label='Date of Birth'
                    placeholder='Date of Birth'
                    type='date'
                    required
                    value={DOB}
                    id='DOB'
                    name='Date of Birth'
                    onChange={inputChangeHandler}
                    min='1920-01-01'
                    max='2005-12-31'
                  />
                </Box>
              </div>

              <div className='input-group'>
                <Box mx='auto' sx={{ width: '100%', maxWidth: '600px' }}>
                  <Typography my={1} sx={{ fontSize: '12px' }}>
                    Means of Identification *
                  </Typography>
                  <CustomSelect
                    id='meansOfId'
                    defaultValue={meansOfId}
                    onChange={(e) => {
                      setUserData((prev) => ({
                        ...prev,
                        meansOfId: e.target.innerText,
                        [e.target.innerText]: identification,
                      }));
                    }}
                  >
                    <StyledOption value={'id'}>idNumber</StyledOption>
                    <StyledOption value={'passport'}>
                      passportNumber
                    </StyledOption>
                  </CustomSelect>
                </Box>
                <Box
                  width='100%'
                  mx='auto'
                  sx={{ width: '100%', maxWidth: '600px' }}
                >
                  <Typography my={1} sx={{ fontSize: '12px' }}>
                    Passport / ID Number *
                  </Typography>
                  <input
                    className='styled-input'
                    aria-label='identification'
                    placeholder={identification}
                    type='text'
                    required
                    value={identification}
                    name='Identification'
                    id='identification'
                    onChange={inputChangeHandler}
                  />
                </Box>
              </div>

              <div className='input-group'>
                <input
                  className='styled-input'
                  aria-label='Password'
                  placeholder='Password'
                  type='password'
                  required
                  name='password'
                  id='password'
                  value={password}
                  onChange={inputChangeHandler}
                />
                <input
                  className='styled-input'
                  aria-label='Confirm Password'
                  placeholder='Confirm Password'
                  type='password'
                  required
                  name='password'
                  id='confirmPassword'
                  value={confirmPassword}
                  onChange={inputChangeHandler}
                />
              </div>

              <Button
                variant='contained'
                type='button'
                disableElevation
                sx={{
                  color: '#fff',
                  width: '100%',
                  maxWidth: '600px',
                  p: 2,
                  mx: 'auto',
                  display: 'block',

                  my: 2,

                  '&:disabled': {
                    background: 'var(--blue-hover)',
                    color: '#fff',
                  },
                }}
                disabled={isLoading}
                onClick={registerUserHandler}
              >
                {isLoading ? 'Loading...' : 'REGISTER'}
              </Button>
              <Typography textAlign='right'>
                <span>Already have an account?</span> {'  '}
                <Link
                  href='/login'
                  style={{ color: '#1b4cd1', fontWeight: 700 }}
                >
                  Login
                </Link>
              </Typography>
            </form>
          </Box>
        </Layout>
        <Blur />
      </Box>
      <Footer />
    </>
  );
};

export default Register;
