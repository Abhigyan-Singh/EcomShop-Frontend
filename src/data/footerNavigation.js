import facebookIcon from 'assets/icons/facebook-icon@2x.png';
import instagramIcon from 'assets/icons/instagram-icon@2x.png';
import pinterestIcon from 'assets/icons/pinterest-icon@2x.png';
import youtubeIcon from 'assets/icons/youtube-icon@2x.png';
import twitterIcon from 'assets/icons/twitter-icon@2x.png';

const cobornsFooterNavigation = {
  deals: [
    { name: 'Weekly Ads', href: '#' },
    { name: 'More Rewards', href: '#' },
    { name: 'More Rebates', href: '#' },
    { name: 'Sign-Up for Email Deals', href: '#' }
  ],
  food: [
    { name: 'Meal Solutions', href: '#' },
    { name: 'Chicken Shack', href: '#' },
    { name: 'celebrateMORE.com', href: '#' },
    { name: 'Four Brothers', href: '#' }
  ],
  health: [
    { name: 'Dietitians Corner', href: '#' },
    { name: 'Food Safety', href: '#' },
    { name: 'Gluten Free', href: '#' },
    { name: 'Nutrition Facts', href: '#' },
    { name: 'Pharmacy', href: '#' }
  ],
  about: [
    { name: "Coborn's Cares", href: '#' },
    { name: "Coborn's Loves Kids", href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Get Social', href: '#' },
    { name: 'News Room', href: '#' },
    { name: 'Sign-Up for Our Emails', href: '#' }
  ],
  auxiliary: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Site Map', href: '#' },
    { name: 'Email Sign Up', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Employee Login', href: '#' }
  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      image: (props) => <img src={facebookIcon} alt="Facebook" {...props} />
    },
    {
      name: 'Instagram',
      href: '#',
      image: (props) => <img src={instagramIcon} alt="Instagram" {...props} />
    },
    {
      name: 'Pinterest',
      href: '#',
      image: (props) => <img src={pinterestIcon} alt="Pinterest" {...props} />
    },
    {
      name: 'YouTube',
      href: '#',
      image: (props) => <img src={youtubeIcon} alt="YouTube" {...props} />
    },
    {
      name: 'Twitter',
      href: '#',
      image: (props) => <img src={twitterIcon} alt="Twitter" {...props} />
    }
  ]
};

export default cobornsFooterNavigation;
