import pharmacyIcon from 'assets/icons/services-icon-pharmacy@2x.png';
import flowerIcon from 'assets/icons/services-icon-flower@2x.png';
import coffeeIcon from 'assets/icons/services-icon-coffee@2x.png';
import convenienceIcon from 'assets/icons/services-icon-convenience@2x.png';
import cakesIcon from 'assets/icons/services-icon-cakes@2x.png';
import lotteryIcon from 'assets/icons/services-icon-lottery@2x.png';
import moneyIcon from 'assets/icons/services-icon-money@2x.png';
import postageIcon from 'assets/icons/services-icon-postage@2x.png';

const shopNavigation1 = [
  
  {
    name: 'Baby',
    href: '/search?text=Baby'
  },
  {
    name: 'Bakery',
    href: 'search?text=Bakery'
  },
  {
    name: 'Dairy',
    href: 'search?text=Diary'
  },
  {
    name: 'Deli',
    href: 'search?text=Deli'
  },
  {
    name: 'Floral',
    href: 'search?text=Floral'
  },
  {
    name: 'Frozen',
    href: 'search?text=Frozen'
  },
  {
    name: 'General Merchandise',
    href: 'search?text=General Merchandise'
  },
  {
    name: 'Grocery',
    href: 'search?text=Grocery'
  },
  {
    name: 'Meat & Seafood',
    href: 'search?text=Meat & Seafood'
  },
  {
    name: 'Pet',
    href: 'search?text=Pet'
  }
];


const shopNavigation2 = [
  {
    name: 'Produce',
    href: ''
  },
  {
    name: 'Beer, Wine, & Spirits',
    href: ''
  },
  {
    name: 'Tobacco',
    href: '#link'
  },
  {
    name: 'Health & Beauty',
    href: '#link'
  },
  {
    name: 'Natural Foods',
    href: '#link'
  },
  {
    name: '—',
    href: null
  },
  {
    name: 'On Sale',
    href: '#link'
  },
  {
    name: 'Favorites',
    href: '#link'
  },
  {
    name: 'Previously Purchased',
    href: '#link'
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
