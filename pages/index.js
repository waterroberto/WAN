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
  GoalSetting
} from '../components';

export default function Home() {
  return (
    <>
      <Meta
        title='South Bank - Home - Online loans banking for everyone'
        description='South Bank - Online loans banking for everyone - Homepage'
      />
      <Navbar />
      <Box pt={8}>
        <Hero />
        <FeatureCards showLinks={true} />
        <AboutUs />
        {/* <LoanProcess /> */}
        <Customers />
        <GoalSetting/>
        <Partners />
        <ContactInformation />
        <GetStarted />
      </Box>
      <Footer />
    </>
  );
}
