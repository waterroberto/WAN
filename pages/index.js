import {
  ContactInformation,
  FAQs,
  Footer,
  Hero,
  Meta,
  Navbar,
} from '../components';
import BankConvenience from '../components/Landing/BankConvenience';
import HowItWorks from '../components/Landing/HowItWorks';
import Features from '../components/Landing/Sections/Features';

export default function Home() {
  return (
    <>
      <Meta
        title='Ravdak Finance - Home - Online loans banking for everyone'
        description='Ravdak Finance - Online loans banking for everyone - Homepage'
      />
      <Navbar />
      <Hero />
      <Features />
      <BankConvenience />
      <HowItWorks />
      <FAQs />
      <ContactInformation />
      <Footer />
    </>
  );
}
