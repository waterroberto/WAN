import {
  ContactInformation,
  FAQs,
  Footer,
  GoalSetting,
  Hero,
  Meta,
  Navbar,
} from '../components';
import BankConvenience from '../components/Landing/BankConvenience';
import FeaturedSection from '../components/Landing/FeaturedSection';
import FeaturedSection2 from '../components/Landing/FeaturedSection2';
import HowItWorks from '../components/Landing/HowItWorks';
import Features from '../components/Landing/Sections/Features';

export default function Home() {
  return (
    <>
      <Meta
        title='Capital Trust Finance - Home - Online banking for everyone'
        description='Capital Trust Finance - Online banking for everyone - Homepage'
      />
      <Navbar />
      <Hero />
      <FeaturedSection />
      <GoalSetting />
      <FeaturedSection2 />
      <Features />
      <BankConvenience />
      <Footer />
    </>
  );
}
