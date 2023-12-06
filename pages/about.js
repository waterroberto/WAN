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
import FeaturedSection from '../components/Landing/FeaturedSection';

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
      <FeaturedSection />
      <Statistics />
      <Stats />
      <FAQs />
      <ContactInformation />
      {/* <GetStarted /> */}
      <Footer />
    </>
  );
};

export default About;
