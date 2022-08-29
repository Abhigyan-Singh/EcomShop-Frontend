import pharmacyIcon from 'assets/icons/services-icon-pharmacy@2x.png';
import flowerIcon from 'assets/icons/services-icon-flower@2x.png';
import coffeeIcon from 'assets/icons/services-icon-coffee@2x.png';
import convenienceIcon from 'assets/icons/services-icon-convenience@2x.png';
import cakesIcon from 'assets/icons/services-icon-cakes@2x.png';
import lotteryIcon from 'assets/icons/services-icon-lottery@2x.png';
import moneyIcon from 'assets/icons/services-icon-money@2x.png';
import postageIcon from 'assets/icons/services-icon-postage@2x.png';
//import onSale from '../services/departmentSearch';

const shopNavigation1 = [  
  {
    name: 'Baby',
    href: '/search?area=109791'
  },
  {
    name: 'Bakery',
    href: '/search?area=109792'
  },
  {
    name: 'Meat & Seafood',
    href: '/search?area=109793'
  },
  {
    name: 'Dairy',
    href: '/search?area=109794'
  },
  {
    name: 'Deli',
    href: '/search?area=109795'
  },
  {
    name: 'Floral',
    href: '/search?area=109796'
  },
  {
    name: 'General Merchandise',
    href: '/search?area=109797'
  },
  {
    name: 'Grocery',
    href: '/search?area=109798'
  },
  {
    name: 'Frozen',
    href: '/search?area=109799'
  },
  {
    name: 'Health & Beauty',
    href: '/search?area=109800'
  }
];


const shopNavigation2 = [
  {
    name: 'Household & Laundry',
    href: '/search?area=109801'
  },
  {
    name: 'Pet',
    href: '/search?area=109802'
  },
  {
    name: 'Produce',
    href: '/search?area=109803'
  },
  {
    name: 'Beer',
    href: '/search?area=109804'
  },
  {
    name: 'Wine',
    href: '/search?area=109805'
  },
  {
    name: 'Liquor',
    href: '/search?area=109806'
  },
  {
    name: 'Tobacco',
    href: '/search?area=109807'
  },
  {
    name: '—',
    href: null
  },
  {
    name: 'On Sale',
    href: '/search?area=102188'
  },
  {
    name: 'Favorites',
    href: '/favorites'
  },
  {
    name: 'Previously Purchased',
    href: '/dispmyshoppinglistdetails'
  }
];

const servicesNavigation = [
  {
    name: "Coborn's Pharmacy",
    href: '#link',
    imageSrc: pharmacyIcon
  },
  {
    name: 'Flower Shoppe',
    href: '#link',
    imageSrc: flowerIcon
  },
  {
    name: 'Coffee Shops',
    href: '#link',
    imageSrc: coffeeIcon
  },
  {
    name: 'Convenience Stores',
    href: '#link',
    imageSrc: convenienceIcon
  },
  {
    name: 'Custom Cakes',
    href: '#link',
    imageSrc: cakesIcon
  },
  {
    name: 'Lottery',
    href: '#link',
    imageSrc: lotteryIcon
  },
  {
    name: 'Money Orders',
    href: '#link',
    imageSrc: moneyIcon
  },
  {
    name: 'Postage',
    href: '#link',
    imageSrc: postageIcon
  }
];

export { shopNavigation1, shopNavigation2, servicesNavigation };
