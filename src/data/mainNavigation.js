import morerewardsLogo from 'assets/images/morerewards-logo@2x.png';
// import { legacy } from '../services/crossApp.js';






const mainNavigation = [
  {
    name: 'Shop Online',
    href: '#link',
    children: [
      {
        name: '',
        href: '#link',
        submenu: [
          {
            name: '',
            href: ''
          }
        ]
      }
    ]
  },
  {
    name: 'Rewards',
    href: '#link',
    href: 'https://www.morerewards.com/',
    icon: () => (
      <img className="w-auto h-5 -mt-0.5 mr-2" src={morerewardsLogo} alt="" />
    )
  },
  {
    name: 'Digital Coupons',
    href: 'https://www.morerewards.com/digitalcoupons'
  },
  // {
  //   name: 'Pharmacy',
  //   href: 'https://www.coborns.com/pharmacy'
  // },
  {
    name: 'Our Brands',
    href: '#link',
    children: [
      { parent: 'ourbrand', name: 'Cape Covelle SeaFood', href: 'https://www.coborns.com/four-brothers' },
      { parent: 'ourbrand', name: 'CharKing', href: 'https://www.coborns.com/four-brothers' },
      { parent: 'ourbrand', name: 'Crav`n Flavor', href: 'https://www.coborns.com/four-brothers' },
      { parent: 'ourbrand', name: 'Four brothers', href: 'https://www.coborns.com/four-brothers' },
      { parent: 'ourbrand', name: 'Our brands', href: ' https://coborns.ourbrandfamily.com/' }
    ]
  },
  {
    name: 'Recipes',
    href: 'http://celebratemore.com/home/recipes/'
  }
  // {
  //   name: 'My Account',
  //   href: legacy()
  // }
];

export default mainNavigation;
