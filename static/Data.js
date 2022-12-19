import { GiTakeMyMoney } from 'react-icons/gi';
import { MdMarkEmailRead } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import {
  RiSecurePaymentFill,
  RiBankFill,
  RiExchangeDollarLine,
  RiWhatsappLine,
} from 'react-icons/ri';

const featuresData = [
  {
    icon: <GiTakeMyMoney />,
    heading: 'Quick Loans',
    body: 'Money To Pay Rent, School Fees Or Buy A New Car, Incrypto Finance Has Got You Covered. Repay in 1 to 24 months, with little interest.',
    page: 'services/#quick-loans',
  },
  {
    icon: <RiExchangeDollarLine />,
    heading: 'Decentralized Exchange',
    body: 'Get started with the easiest and most secure platform for decentralized banking, convert your money to different currencies easily, without interference.',
    page: 'services/#decentralized-exchange',
  },
  {
    icon: <RiBankFill />,
    heading: 'Investments',
    body: 'Dedicate your money to purchase assets, see your money increase in value over time. Grow your investment portfolio exponentially.',
    page: 'services/#investments',
  },
  {
    icon: <RiSecurePaymentFill />,
    heading: 'Safe Spending',
    body: 'Balance your bank account, manange expenses, budget periodically. Spend safely, save safely with Deccentralized Finance (De-Fi). We know it, you learn it.',
    page: 'services/#safe-spending',
  },
];

const contactInformation = [
  {
    icon: <RiWhatsappLine />,
    body: '+1 (781) 234-5678',
  },
  {
    icon: <MdMarkEmailRead />,
    body: 'support@incfinance.com',
  },
  {
    icon: <ImLocation />,
    body: '234 Hamilton, Cleveland, Ohio, USA.',
  },
];

const faqs = [
  {
    question: 'What is Decentralized Banking?',
    answer:
      'Decentralized Banking (De-Bank) is a banking ecosystem based on blockchain technology. It lets users buy and sell assets and financial services as a form of investment or financing without middlemen (bank, elites, etc)',
  },
  {
    question: 'Why do I need Decentralized Banking?',
    answer:
      'Since De-Banks are open source, anyone with Internet can use it, create and offer services (like lending), and combine existing services. De-Banking systems are available to the public free of charge and can even be used, enhanced or adapted to user needs.',
  },
  {
    question: 'How to apply for a loan?',
    answer:
      'Only registered and verified users are allowed to apply for loans. Your verification level depends on the amount we would loan you.',
  },
  {
    question: 'Documents I need for loan application?',
    answer:
      'This depends on the country of the applicant. Typically, we need your ID Card, Voter`s card, SSN, Proof of Residence, Proof of Employment or Bank Statement dated 3 months prior, International Passport',
  },
  {
    question: 'How do I increase my verification level?',
    answer:
      'New registered users start at Level 1. At this level the means of verification provided is just a passport photograph (not an International Passport). They increase their account to higher levels by submitting other documents which would be stated by our agents assigned to you.',
  },
  {
    question: 'Why can I not access my account at Level 1?',
    answer:
      'Level 1 users are deleted after 7 working days if they fail to verify their account to higher levels. We do this to prevent spams and fraudulent activities.',
  },
  {
    question: 'How long must I wait to get paid?',
    answer:
      'After your registeration, verification and approval, you must wait for us to verify your details and authentication status with your bank, this takes any time from 3 to 21 days',
  },
  {
    question: 'Do you need access to my bank details?',
    answer:
      'We do not directly ask you for your bank login information, but anyone applying for our loans must authenticate our platform with their bank after they have been approved for the loan. This helps make sure we can easily fund your account when we start funding, and also track any fraudulent activities in the future after your loan duration expires.',
  },
];

export { featuresData, contactInformation, faqs };
