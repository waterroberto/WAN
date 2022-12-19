import React from 'react';
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
} from '../components';

const About = () => {
  return (
    <>
      <Meta
        title='About - Incrypto Finance - Online crypto banking for everyone -
        Homepage'
        description='About us - Incrypto Finance - Online crypto banking for everyone - About page'
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
