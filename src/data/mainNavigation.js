import morerewardsLogo from 'assets/images/morerewards-logo@2x.png';

const mainNavigation = [
  {
    name: 'Shop Online',
    href: '#link',
    children: [
      { name: '', href: '#link' }
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
  {
    name: 'Pharmacy',
    href:'https://www.coborns.com/pharmacy'
  },
  {
    name: 'Our Brands',
    href: '#link',
    children: [
      { name: 'four brothers', href: 'https://www.coborns.com/four-brothers' },
      { name: 'our brands', href: ' https://coborns.ourbrandfamily.com/' }
    ]
  },
  {
    name: 'Recipes',
    href: 'http://celebratemore.com/home/recipes/'
  },
  {
    name: 'My Account',
    href: 'https://testweb.shop.cashwise.com/myaccountdetails'
  }
];

export default mainNavigation;
