import {
  Box,
  Button,
  Grid,
  NativeSelect,
  Stack,
  Typography,
} from '@mui/material';
import cogoToast from 'cogo-toast';
import React, { useContext, useState } from 'react';
import { FaFolderOpen } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { Dash, Meta, MobileNav, Sidebar } from '../../components';
import PopupModal from '../../components/Global/Modal';
import PrivateRoute from '../../components/auth/PrivateRoute';
import AppBar from '../../components/dashboard/AppBar';
import Container from '../../components/dashboard/Container';
import LoanHistory from '../../components/dashboard/Loan/LoanHistory';
import ReferralCard from '../../components/dashboard/ReferralCard';
import userDataContext from '../../context/UserDataContext';
import { UserService } from '../../services/user';

const Loan = (props) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [requesting, setRequesting] = useState(false);

  const [formData, setFormData] = useState({
    amount: '',
    duration: '',
    income: '',
    placement: 'Under Debt Review',
    employmentStatus: 'Permanent Employment',
    employmentDuration: '',
    bankStatement: '',
  });

  const { userData } = useContext(userDataContext);

  const handleOpen1 = () => setOpen1(true);
  const handleClose1 = () => setOpen1(false);

  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  const {
    amount,
    duration,
    income,
    placement,
    employmentStatus,
    employmentDuration,
    bankStatement,
  } = formData;

  const formInputHandler = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const addBankStatement = (e) => {
    setFormData((prev) => ({
      ...prev,
      bankStatement: e.target.files[0],
    }));
  };

  const bankStatementValid =
    bankStatement.type === 'application/pdf' ||
    bankStatement.type === 'image/jpeg' ||
    bankStatement.type === 'image/png';
  const amountIsValid = parseInt(amount) >= 5000;
  const durationIsValid = parseInt(duration) >= 6;
  const placementIsValid = placement.trim().length > 0;
  const monthlyIncomIsValid = parseInt(income) > 0;
  const employmentDurationIsValid = parseInt(employmentDuration) > 0;
  const employmentStatusIsValid = employmentStatus.trim().length > 0;

  const detailsAreValid =
    bankStatementValid &&
    amountIsValid &&
    durationIsValid &&
    placementIsValid &&
    employmentStatusIsValid &&
    employmentDurationIsValid &&
    monthlyIncomIsValid;

  const sendLoanRequest = async () => {
    if (!detailsAreValid) {
      cogoToast.error('One or more details are invalid');
      if (!bankStatementValid) {
        cogoToast.error('Attach valid document');
      }
      if (!amountIsValid) {
        cogoToast.error('Loan amount must be 5000 or higher');
      }
      if (!durationIsValid) {
        cogoToast.error('Loan duration must be at least 6 months');
      }
      if (!placementIsValid) {
        cogoToast.error('Kindly select financial status');
      }
      if (!employmentStatusIsValid) {
        cogoToast.error('Please select employment status');
      }
      if (!employmentDurationIsValid) {
        cogoToast.error('Input employment duration');
      }
      if (!monthlyIncomIsValid) {
        cogoToast.error('Input monthly income');
      }
    } else {
      setRequesting(true);

      const _id = uuidv4();

      const data = {
        _id,
        _user: userData?.id,
        ...formData,
        amount: +amount,
        income: +income,
        duration: +duration,
        employmentDuration: +employmentDuration,
        bankStatement: '',
        applicationDate: new Date(),
        status: 'pending',
        currency: userData?.currency,
      };

      try {
        const res = await UserService.sendLoanRequest(data, bankStatement);

        if (res.ok) {
          console.log(res);

          const pendingLoanRequest = await UserService.addPendingLoan(
            userData?.id,
            { amount: +amount, duration: +duration, _id }
          );

          console.log(pendingLoanRequest);
          cogoToast.success('Loan request submitted');
          cogoToast.info('Our manager will contact you');

          setFormData({
            amount: '',
            duration: '',
            income: '',
            placement: 'Under Debt Review',
            employmentStatus: 'Permanent Employment',
            employmentDuration: '',
            bankStatement: '',
          });
        }

        handleClose1();
        setRequesting(false);
      } catch (error) {
        console.log(error);
        setRequesting(false);
      }
    }
  };

  return (
    <PrivateRoute>
      <Meta
        title='Massaa Bank Finance - Loan - Online Bank'
        description='Massaa Bank Financial Bank | Loan into your account'
      />
      <Dash />

      <PopupModal
        open={open1}
        handleClose={handleClose1}
        handleOpen={handleOpen1}
        title='Loan Application'
        sx={{ maxWidth: '768px' }}
      >
        <Grid
          container
          mx='auto'
          rowSpacing={1}
          columnSpacing={{ sm: 1 }}
          columns={12}
          alignItems='center'
        >
          <Grid item xs={12} sm={6} width='100%'>
            <label htmlFor='duration'>Loan Amount</label>
            <input
              name='amount'
              className='styled-input'
              aria-label='Desired Amount'
              placeholder='Desired Amount'
              type='number'
              required
              sx={{
                background: 'var(--dark)',
                border: '1px solid #555',
                fontSize: 15,
              }}
              value={amount}
              onChange={formInputHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6} width='100%'>
            <label htmlFor='duration'>Loan Duration</label>
            <input
              name='duration'
              className='styled-input'
              aria-label='Repayment Duration'
              placeholder='Loan Duration (months)'
              type='number'
              required
              sx={{
                background: 'var(--dark)',
                border: '1px solid #555',
                fontSize: 15,
              }}
              value={duration}
              onChange={formInputHandler}
            />
          </Grid>
        </Grid>
        <Grid
          container
          mx='auto'
          rowSpacing={1}
          columnSpacing={{ sm: 1 }}
          columns={12}
          alignItems='center'
        >
          <Grid item xs={12} sm={6} width='100%'>
            <label htmlFor='income'>Monthly Income</label>
            <input
              name='income'
              className='styled-input'
              aria-label='Monthly Income'
              placeholder='Monthly Income'
              type='number'
              required
              sx={{
                background: 'var(--dark)',
                border: '1px solid #555',
                fontSize: 15,
              }}
              value={income}
              onChange={formInputHandler}
            />
          </Grid>
          <Grid item xs={12} sm={6} width='100%'>
            <label htmlFor='financial-placement'>Financial Placement</label>
            <NativeSelect
              defaultValue={placement}
              inputProps={{
                name: 'placement',
                id: 'financial-placement',
              }}
              sx={{
                width: '100%',
                color: '#ccc',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                fontSize: '14px',
                color: '#ccc',
                background: 'var(--dark)',
                border: '1px solid #555',
                fontSize: 15,

                '&:before, &:after': {
                  display: 'none',
                },
              }}
              onChange={formInputHandler}
            >
              <option value='Unpaid Loan'>Unpaid Loan</option>
              <option value='Bad Credit Score'>Bad Credit Score</option>
              <option value='Under Debt Review'>Under Debt Review</option>
              <option value='Blacklisted'>Blacklisted</option>
              <option value='None'>None</option>
            </NativeSelect>
          </Grid>
          <Grid item xs={12} sm={6} width='100%'>
            <label htmlFor='employmentStatus'>Financial Status</label>
            <NativeSelect
              defaultValue={employmentStatus}
              inputProps={{
                name: 'employmentStatus',
                id: 'employmentStatus',
              }}
              sx={{
                width: '100%',
                color: '#ccc',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                fontSize: '14px',
                color: '#ccc',
                background: 'var(--dark)',
                border: '1px solid #555',
                fontSize: 15,

                '&:before, &:after': {
                  display: 'none',
                },
              }}
              onChange={formInputHandler}
            >
              <option value='Permanent Employment'>Permanent Employment</option>
              <option value='Contract Based'>Contract Based</option>
              <option value='Self Employed'>Self Employed</option>
            </NativeSelect>
          </Grid>
          <Grid item xs={12} sm={6} width='100%'>
            <label htmlFor='employmentDuration'>Employment Duration</label>
            <input
              className='styled-input'
              aria-label='Employment Duration'
              placeholder='Employment Duration (Years)'
              type='number'
              required
              sx={{
                background: 'var(--dark)',
                border: '1px solid #555',
                fontSize: 15,
                mt: { xs: 2, sm: 5 },
              }}
              name='employmentDuration'
              value={employmentDuration}
              onChange={formInputHandler}
            />
          </Grid>
          <Button
            variant='text'
            disableElevation
            sx={{
              mt: 2,
              p: 2,
              color: '#fff',
              textTransform: 'capitalize',
              fontFamily: 'inherit',
              border: '2px solid var(--blue)',

              '&:hover': {
                border: '2px solid var(--blue-hover)',
              },
              width: '100%',
            }}
            onClick={() => {}}
            component='label'
          >
            {bankStatement
              ? 'Change Document'
              : 'Upload Recent Bank Statement(3 months)'}{' '}
            {' - '}
            <input
              hidden
              accept='.png, .jpg, .jpeg, .pdf'
              type='file'
              onChange={addBankStatement}
              max={1}
            />
            {bankStatement && bankStatement.name}
          </Button>
        </Grid>
        <Button
          disableElevation
          sx={{
            mt: 4,
            p: 2,
            color: '#fff',
            textTransform: 'capitalize',
            fontFamily: 'inherit',
            background: 'var(--green)',

            '&:hover': {
              transition: '0.5s ease-out',
              background: 'var(--green-hover)',
            },
            width: '100%',
          }}
          onClick={sendLoanRequest}
          disabled={requesting}
        >
          {requesting ? 'Loading...' : 'Proceed'}
        </Button>
      </PopupModal>
      <Box minHeight='100vh' sx={{ background: 'var(--darker)' }}>
        <Sidebar>
          <AppBar page='Loan' />
          <Container>
            <Typography fontWeight={700}>LOAN APPLICATION</Typography>
            {!userData?.canRequestLoan && (
              <Typography
                mt={4}
                p={3}
                sx={{
                  background: 'var(--blue-light)',
                  borderRadius: 2,
                  color: 'var(--mid)',
                }}
              >
                Cannot request loan at the moment. Contact manager for more
                information.
              </Typography>
            )}
            {userData?.canRequestLoan && userData?.accountLevel < 3 && (
              <Typography
                mt={4}
                p={3}
                sx={{
                  background: 'var(--red-light)',
                  borderRadius: 2,
                  color: 'var(--mid)',
                }}
              >
                To request loan, Verify account to Tier 3
              </Typography>
            )}
            {userData?.canRequestLoan && userData?.accountLevel >= 3 && (
              <Stack
                mt={2}
                direction={{ xs: 'column', md: 'row' }}
                alignItems='center'
                justifyContent='flex-start'
                gap={2}
                width={{ xs: '100%', md: '50%' }}
              >
                <Button
                  variant='text'
                  disableElevation
                  sx={{
                    p: 2,
                    color: '#fff',
                    textTransform: 'capitalize',
                    fontWeight: 500,
                    fontFamily: 'inherit',
                    background: 'var(--pale-blue)',
                    transition: '0.5s ease-in',
                    borderRadius: 2,

                    '&:hover': {
                      transition: '0.5s ease-out',
                      background: 'var(--blue)',
                    },
                    width: '100%',
                  }}
                  onClick={handleOpen1}
                >
                  Apply for Loan
                </Button>
              </Stack>
            )}
          </Container>
          <Container>
            <Typography fontWeight={700}>LOAN HISTORY</Typography>
            {(!userData?.loans || userData?.loans.length === 0) && (
              <Stack
                alignItems='center'
                justifyContent='center'
                mt={8}
                py={2}
                sx={{ color: 'var(--mid)' }}
              >
                <Box sx={{ fontSize: '64px' }}>
                  <FaFolderOpen />
                </Box>
                <Typography>No Transactions Yet</Typography>
              </Stack>
            )}
            {userData?.loans && userData?.loans.length > 0 && (
              <LoanHistory
                transactions={userData?.loans}
                currency={userData?.currency}
                modalOpen={open2}
                handleModalClose={handleClose2}
                handleModalOpen={handleOpen2}
              />
            )}
          </Container>
        </Sidebar>
      </Box>
      <MobileNav />
    </PrivateRoute>
  );
};

export default Loan;
