import { GiTakeMyMoney } from 'react-icons/gi';
import {
  RiSecurePaymentFill,
  RiBankFill,
  RiExchangeDollarLine,
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

export { featuresData };
