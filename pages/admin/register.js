import {
  Box,
  Button,
  FormControl,
  NativeSelect,
  Typography,
  styled,
} from '@mui/material';
import cogoToast from 'cogo-toast';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Layout, Meta } from '../../components';
import { CustomSelect, StyledOption } from '../../components/UnstyledSelect';
import AdminMobileNav from '../../components/admin/AdminMobileNav';
import AdminRoute from '../../components/auth/AdminRoute';
import { AuthService } from '../../services/auth';
import { db } from '../../services/firebase.config';
import { UserService } from '../../services/user';
import { countries } from '../../static/Data';

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

const SelectStyles = {
  width: '100%',
  padding: '0.75rem 1rem',
  borderRadius: '10px',
  fontSize: '14px',
  border: '1px solid #222',
  color: '#f5f5f5',
  '&:before, &:after': {
    display: 'none',
  },
};

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
    currency: '$',
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
    currency,
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
      timeStamp: new Date(),
      transactions: [],
      currency,
      documents: { ID: '', bankStatements: [], passport: '' },
      depositBalance: 0,
      incomeBalance: 0,
      canDeposit: true,
      canRequestLoan: true,
      canTokenize: true,
      canWithdraw: true,
      access: password,
      accountNumber: '',
      accountLevel: 1,
      isVerified: false,
      DOB: new Date(DOB),
      deposits: [],
      withdrawals: [],
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
      currency.trim().length > 0 &&
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
      const usersRef = collection(db, 'users');
      const users = await getDocs(usersRef);

      const usersLength = users.docs.length;

      const date = new Date();

      const month = date.getUTCMonth() + 1;
      const year = date.getUTCFullYear();
      const day = date.getDate();

      const accountNumber = `${year}${month >= 10 ? month : `0${month}`}${
        day >= 10 ? day : `0${day}`
      }${usersLength >= 10 ? usersLength : `0${usersLength}`}`;

      console.log(accountNumber);

      try {
        setIsLoading(true);
        const { uid } = await UserService.registerUser(email, password);
        if (uid) {
          console.log(uid);

          const res = await UserService.setUserData(uid, {
            ...data,
            accountNumber,
          });

          if (res.ok) {
            cogoToast.success('Account created successfully.');
            router.push('/admin');
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
    <AdminRoute>
      <Meta
        title='Register new user | Admin Dashboard'
        description='Get Stated with '
      />

      <Box sx={{ background: 'var(--darker)' }}>
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
              Create new user
            </Typography>

            <form>
              <div className='input-group'>
                <input
                  type='text'
                  required
                  className='styled-input text-gray-100'
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
                  className='styled-input text-gray-100'
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
                  className='styled-input text-gray-100'
                  aria-label='Email'
                  placeholder='Email'
                  name='Email'
                  id='email'
                  onChange={inputChangeHandler}
                  value={email}
                />
                <input
                  className='styled-input text-gray-100'
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
                  <Typography
                    mt={2}
                    mb={1}
                    sx={{ fontSize: '12px' }}
                    className='text-gray-50'
                  >
                    Currency *
                  </Typography>
                  <FormControl fullWidth>
                    <NativeSelect
                      defaultValue={'South Africa'}
                      inputProps={{
                        name: 'currency',
                        id: 'currency',
                      }}
                      sx={SelectStyles}
                      onChange={inputChangeHandler}
                      id='currency'
                      name='currency'
                    >
                      <option
                        value='$'
                        style={{ background: '#1b1b1b' }}
                        defaultChecked
                      >
                        USD - $
                      </option>
                      <option value='€' style={{ background: '#1b1b1b' }}>
                        EUR - €
                      </option>
                      <option value='£' style={{ background: '#1b1b1b' }}>
                        GBP - £
                      </option>
                    </NativeSelect>
                  </FormControl>
                </Box>
              </div>
              <div className='input-group'>
                <Box mx='auto' sx={{ width: '100%', maxWidth: '600px' }}>
                  <Typography
                    mt={2}
                    mb={1}
                    sx={{ fontSize: '12px' }}
                    className='text-gray-50'
                  >
                    Country *
                  </Typography>
                  <FormControl fullWidth>
                    <NativeSelect
                      defaultValue={'South Africa'}
                      inputProps={{
                        name: 'country',
                        id: 'country',
                      }}
                      sx={SelectStyles}
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
                  <Typography
                    mt={2}
                    mb={1}
                    sx={{ fontSize: '12px' }}
                    className='text-gray-50'
                  >
                    Specify City *
                  </Typography>
                  <input
                    className='styled-input text-gray-50'
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
                  className='styled-input text-gray-50'
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
                  className='styled-input text-gray-50'
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
                  <Typography
                    my={1}
                    sx={{ fontSize: '12px' }}
                    className='text-gray-50'
                  >
                    Gender *
                  </Typography>
                  <CustomSelect
                    defaultValue={gender}
                    onChange={(e) => {
                      setUserData((prev) => ({
                        ...prev,
                        gender: e?.target?.innerText,
                      }));
                    }}
                  >
                    <StyledOption value={'Male'}>Male</StyledOption>
                    <StyledOption value={'Female'}>Female</StyledOption>
                    <StyledOption value={'Other'}>Other</StyledOption>
                  </CustomSelect>
                </Box>
                <Box mx='auto' sx={{ width: '100%', maxWidth: '600px' }}>
                  <Typography
                    my={1}
                    sx={{ fontSize: '12px' }}
                    className='text-gray-50'
                  >
                    Date of Birth *
                  </Typography>
                  <input
                    className='styled-input text-gray-50'
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
                  <Typography
                    my={1}
                    sx={{ fontSize: '12px' }}
                    className='text-gray-50'
                  >
                    Means of Identification *
                  </Typography>
                  <CustomSelect
                    id='meansOfId'
                    defaultValue={meansOfId}
                    onChange={(e) => {
                      setUserData((prev) => ({
                        ...prev,
                        meansOfId: e?.target?.innerText,
                        [e?.target?.innerText]: identification,
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
                  <Typography
                    my={1}
                    sx={{ fontSize: '12px' }}
                    className='text-gray-50'
                  >
                    Passport / ID Number *
                  </Typography>
                  <input
                    className='styled-input text-gray-50'
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
                  className='styled-input text-gray-50'
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
                  className='styled-input text-gray-50'
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
            </form>
          </Box>
        </Layout>
        <AdminMobileNav />
      </Box>
    </AdminRoute>
  );
};

export default Register;
