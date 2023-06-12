import React from "react";
import {
  Footer,
  Meta,
  Navbar,
  Header,
  Stats,
  Statistics,
  ContactInformation,
  GetStarted,
  FAQs,
} from "../components";

const About = () => {
  return (
    <>
      <Meta
        title="About - Blue Chip Finance - Online loans for everyone -
        Homepage"
        description="About us - Blue Chip Finance - Online loans for everyone - About page"
      />

      <Navbar />
      <Header />
      <Statistics />
      <Stats />
      <FAQs />
      <ContactInformation />
      <GetStarted />
      <Footer />
    </>
  );
};

export default About;
