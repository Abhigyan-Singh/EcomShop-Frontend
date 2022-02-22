import facebookIcon from 'assets/icons/facebook-icon@2x.png';
import instagramIcon from 'assets/icons/instagram-icon@2x.png';
import pinterestIcon from 'assets/icons/pinterest-icon@2x.png';
import youtubeIcon from 'assets/icons/youtube-icon@2x.png';
import twitterIcon from 'assets/icons/twitter-icon@2x.png';

const cobornsFooterNavigation = {
  deals: [
    { name: 'Weekly Ads', href: 'https://www.coborns.com/circular' },
    { name: 'More Rewards', href: 'https://www.morerewards.com/' },
    { name: 'More Rebates', href: '#' },
    { name: 'Sign-Up for Email Deals', href: 'https://www.coborns.com/emailsignup' }
  ],
  food: [
    { name: 'Meal Solutions', href: 'https://www.coborns.com/mealsolutions' },
    { name: 'Chicken Shack', href: 'https://www.coborns.com/chickenshack' },
    { name: 'celebrateMORE.com', href: 'http://celebratemore.com/home/' },
    { name: 'Four Brothers', href: 'https://www.coborns.com/four-brothers' }
  ],
  health: [
    { name: 'Dietitians Corner', href: 'http://celebratemore.com/home/articles/dietitians/' },
    { name: 'Food Safety', href: 'https://www.coborns.com/food-safety' },
    { name: 'Gluten Free', href: 'https://www.coborns.com/gluten-free' },
    { name: 'Nutrition Facts', href: 'https://www.coborns.com/nutrition-facts' },
    { name: 'Pharmacy', href: 'https://www.coborns.com/pharmacy' }
  ],
  about: [
    { name: "Coborn's Cares", href: 'https://www.coborns.com/coborns-cares' },
    { name: "Coborn's Loves Kids", href: 'https://www.coborns.com/coborns-loves-kids' },
    { name: 'Contact Us', href: 'https://www.coborns.com/contact-us' },
    { name: 'Events', href: 'https://www.coborns.com/events' },
    { name: 'Get Social', href: 'https://www.coborns.com/get-social' },
    { name: 'News Room', href: 'https://www.cobornsinc.com/news_room/' },
    { name: 'Sign-Up for Our Emails', href: 'https://www.coborns.com/emailsignup' },
    { name: 'Kids cook at home', href: 'http://celebratemore.com/home/kids-cook-at-home/' }

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
