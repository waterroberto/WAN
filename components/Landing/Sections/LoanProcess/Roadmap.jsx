import {
  Step,
  Button,
  Box,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { ArrowForwardRounded } from '@mui/icons-material';
import { useRouter } from 'next/router';

const steps = [
  {
    label: 'ACCOUNT OPENING / APPLICATION',
    description: `You will require a Government issued ID and a passport. Our application process is easy, and straight to the point. We give straight forward instructions to help you.`,
  },
  {
    label: 'VERIFICATION & PROCESSING',
    description:
      'Now, we verify your details such as ID, Proof of Address, Employment Information, Email, and Phone number. We will contact you directly to send us a Bank Statement and Previous Loan Statement if available.',
  },
  {
    label: 'UNDERWRITING & AUTHENTICATION',
    description: `After verifying you, If certain criterias don't match our set requirements, we will advice you to go for a lower amount with a lower interest rate. After verifying your application, you would be required to link your profile to our payment system, to enable us instantly credit your account. This process is compulsory for every applicant.`,
  },
  {
    label: 'LOAN PAYOUTS',
    description: `We fund immediately after the process is finalised. Mortgage loans, Business loans, and Loans on property may require additional time for legal reasons.`,
  },
];

const buttonStyles = {
  color: '#fff',
  padding: '0.75rem 2rem',
  background: 'secondary',
  textTransform: 'capitalize',
  fontWeight: 500,
  fontFamily: 'inherit',
  borderWidth: '2px',
  mt: 1,
  mr: 1,
  '&:hover': {
    background: 'primary.contrastText',
    borderWidth: '2px',
  },
};

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const router = useRouter();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box width='100%' my={4}>
      <Stepper activeStep={activeStep} orientation='vertical'>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel>
              <Typography
                sx={{
                  color: '#fff',
                  fontFamily: 'inherit',
                  my: 0.5,
                  fontWeight: 700,
                }}
              >
                {step.label}
              </Typography>
            </StepLabel>
            <StepContent>
              <Typography
                sx={{
                  color: '#fff',
                  fontFamily: 'inherit',
                  fontWeight: 300,
                }}
              >
                {step.description}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <>
                  <Button
                    variant='outlined'
                    disableElevation
                    sx={buttonStyles}
                    endIcon={
                      activeStep === steps.length - 1 && <ArrowForwardRounded />
                    }
                    onClick={() => {
                      if (activeStep === steps.length - 1) {
                        router.push('/register');
                      } else {
                        handleNext();
                      }
                    }}
                  >
                    {index === steps.length - 1 ? 'Apply Now' : 'Proceed'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    disableElevation
                    sx={buttonStyles}
                    onClick={handleBack}
                  >
                    Back
                  </Button>
                </>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
          Reset
        </Button>
      )}
    </Box>
  );
}
