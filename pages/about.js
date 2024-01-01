import React from 'react';
import {
  ContactInformation,
  FAQs,
  Footer,
  GetStarted,
  GoalSetting,
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
        title='About - Capital Trust Finance - Online banking for everyone -
        Homepage'
        description='About us | Online banking for everyone'
      />

      <Navbar />
      <Header />
      <FeaturedSection />
      <Statistics />
      <Stats />
      <GoalSetting />
      <FAQs />
      <GetStarted />
      <Footer />
    </>
  );
};

export default About;
