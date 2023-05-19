import { Box } from "@mui/material";
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
} from "../components";

export default function Home() {
  return (
    <>
      <Meta
        title="Blue Ship Finance - Home - Online loans banking for everyone"
        description="Blue Ship Financial Bank - Online loans banking for everyone - Homepage"
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
