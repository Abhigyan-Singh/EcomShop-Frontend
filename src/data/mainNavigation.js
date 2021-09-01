import morerewardsLogo from 'assets/images/morerewards-logo@2x.png';

const mainNavigation = [
  {
    name: 'Shop Online',
    href: '#link',
    children: [
      { name: 'Baby', href: '#link' },
      { name: 'Bakery', href: '#link' },
      { name: 'Dairy', href: '#link' },
      { name: 'Deli', href: '#link' }
    ]
  },
  {
    name: 'Rewards',
    href: '#link',
    icon: () => (
      <img className="w-auto h-5 -mt-0.5 mr-2" src={morerewardsLogo} alt="" />
    )
  },
  {
    name: 'Deals',
    href: '#link'
  },
  {
    name: 'In-store Services',
    href: '#link'
  },
  {
    name: 'Pharmacy',
    href: '#link'
  },
  {
    name: 'Our Brands',
    href: '#link'
  },
  {
    name: 'Recipes',
    href: '#link'
  },
  {
    name: 'My Account',
    href: '#link'
  }
];

export default mainNavigation;
