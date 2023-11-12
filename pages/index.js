import { Box } from '@mui/material';
import {
  AboutUs,
  ContactInformation,
  Customers,
  FeatureCards,
  Footer,
  GetStarted,
  Hero,
  LoanProcess,
  Meta,
  Navbar,
  Partners,
} from '../components';

export default function Home() {
  return (
    <>
      <Meta
        title='Massaa Bank - Home - Online loans banking for everyone'
        description='Massaa Bank - Online loans banking for everyone - Homepage'
      />
      <Navbar />
      <Box pt={8}>
        <Hero />
        <FeatureCards showLinks={true} />
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
