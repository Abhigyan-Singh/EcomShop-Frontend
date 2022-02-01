import morerewardsLogo from 'assets/images/morerewards-logo@2x.png';
<<<<<<< HEAD
import axios from 'axios';
=======

>>>>>>> 585b61b9dd773859fcd714e547b7d0535cca8548

const mainNavigation = [
  {
    name: 'Shop Online',
    href: '#link',
    children: [
<<<<<<< HEAD
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
=======
      { name: '', href: '#link' }
>>>>>>> 585b61b9dd773859fcd714e547b7d0535cca8548
    ]
  },
  {
    name: 'Rewards',
<<<<<<< HEAD
    href: '#link',
=======
    href: 'https://www.morerewards.com/',
>>>>>>> 585b61b9dd773859fcd714e547b7d0535cca8548
    icon: () => (
      <img className="w-auto h-5 -mt-0.5 mr-2" src={morerewardsLogo} alt="" />
    )
  },
  {
<<<<<<< HEAD
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
=======
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
>>>>>>> 585b61b9dd773859fcd714e547b7d0535cca8548
  }
];

export default mainNavigation;
