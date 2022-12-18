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
    body: 'Balance your bank account, manange expenses, budget periodically. Spend safely, save safely with crypto. We know it, you learn it.',
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

export { featuresData, contactInformation };
