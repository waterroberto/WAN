import { Box } from '@mui/material';
import {
  Footer,
  Navbar,
  Meta,
  AboutUs,
  Hero,
  FeatureCards,
  LoanProcess,
  Customers,
  Partners,
  ContactInformation,
  GetStarted,
} from '../components';

export default function Home() {
  return (
    <>
      <Meta
        title='Incrypto Finanace - Home - Online crypto banking for everyone -
        Homepage'
        description='Incrypto Financial Bank - Online crypto banking for everyone - Homepage - Incrypto Finanace'
      />

      <Navbar />
      <Box pt={8}>
        <Hero />
        <FeatureCards />
        <AboutUs />
        <LoanProcess />
        <Customers />
        <Partners />
        <ContactInformation />
        <GetStarted />
      </Box>
      <Footer />
    </>
  );
}
