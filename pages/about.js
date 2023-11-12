import React from 'react';
import {
  ContactInformation,
  FAQs,
  Footer,
  GetStarted,
  Header,
  Meta,
  Navbar,
  Statistics,
  Stats,
} from '../components';

const About = () => {
  return (
    <>
      <Meta
        title='About - Massaa Bank- Online loans for everyone -
        Homepage'
        description='About us - Massaa Bank- Online loans for everyone - About page'
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
