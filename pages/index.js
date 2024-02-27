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
import AboutSection from '../components/Landing/AboutSection';


export default function Home() {
  return (
    <>
      <Meta
        title='WAN Cooperation Finance - Home - Online banking for everyone'
        description='WAN Cooperation Finance  - Online banking for everyone - Homepage'
      />
      <Navbar />
      <Hero />
      <AboutSection/>
      <FeaturedSection />
      <GoalSetting />
      <FeaturedSection2 />
      <Features />
      <BankConvenience />
      <Footer />
    </>
  );
}
