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
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsum delectus quas sed ipsa quis',
    page: 'services/#quick-loans',
  },
  {
    icon: <RiExchangeDollarLine />,
    heading: 'Crypto Exchange',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsum delectus quas sed ipsa quis',
    page: 'services/#crypto-exchange',
  },
  {
    icon: <RiBankFill />,
    heading: 'Investments',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsum delectus quas sed ipsa quis',
    page: 'services/#investments',
  },
  {
    icon: <RiSecurePaymentFill />,
    heading: 'Safe Spending',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ipsum delectus quas sed ipsa quis',
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
