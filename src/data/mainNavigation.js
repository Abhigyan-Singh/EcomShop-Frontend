import morerewardsLogo from 'assets/images/morerewards-logo@2x.png';
import axios from 'axios';

const mainNavigation = [
  {
    name: 'Shop Online',
    href: '#link',
    children: [
      { name: 'Baby', href: axios.get('#http://localhost:8009/grocery/tree/5/PRODUCTS/34') },
      { name: 'Bakery', href: axios.get('#http://localhost:8009/grocery/tree/5/PRODUCTS/109792') },
      { name: 'Beer', href: '#http://localhost:8009/grocery/tree/5/PRODUCTS/' },
      { name: 'Meat & Seafood', href: '#http://localhost:8009/grocery/tree/5/PRODUCTS/109792' },
      { name: 'Dairy', href: '#http://localhost:8009/grocery/tree/5/PRODUCTS/109792' },
      { name: 'Deli', href: '#http://localhost:8009/grocery/tree/5/PRODUCTS/109792' },
      { name: 'Floral', href: '#http://localhost:8009/grocery/tree/5/PRODUCTS/109792' },
      { name: 'Frozen', href: '#http://localhost:8009/grocery/tree/5/PRODUCTS/109792' },
      { name: 'General Merchandise', href: '#http://localhost:8009/grocery/tree/5/PRODUCTS/109792' },
      { name: 'Grocery', href: '#http://localhost:8009/grocery/tree/5/PRODUCTS/109792' },
      { name: 'Health & Beauty', href: '#http://localhost:8009/grocery/tree/5/PRODUCTS/109792' },
      { name: 'Household & Laundry', href: '#http://localhost:8009/grocery/tree/5/PRODUCTS/109792' },
      { name: 'Liquor', href: '#http://localhost:8009/grocery/tree/5/PRODUCTS/109792' },
      { name: 'Pet', href: '#http://localhost:8009/grocery/tree/5/PRODUCTS/109792' },
      { name: 'Produce', href: '#http://localhost:8009/grocery/tree/5/PRODUCTS/109792' },
      { name: 'Tobacco', href: '#http://localhost:8009/grocery/tree/5/PRODUCTS/109792' },
      { name: 'Wine', href: '#http://localhost:8009/grocery/tree/5/PRODUCTS/109792' },
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
