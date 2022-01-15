import PropTypes from 'prop-types';
import cobornsFooterLogo from 'assets/images/coborns-footer-logo@2x.png';
import cashwiseFooterLogo from 'assets/images/cashwise-footer-logo@2x.png';
import marketplaceFooterLogo from 'assets/images/marketplace-footer-logo@2x.png';
import cobornsFooterNavigation from 'data/footerNavigation';
import './footer.css';

const Footer = (props) => {
  // BSWING: 'theme' can be passed through like this or pulled from another context - refactor if desired.
  const { theme, ...rest } = props;

  const navigation = cobornsFooterNavigation;

  return (
    <footer className="cbn-footer" aria-labelledby="footer-heading" {...rest}>
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="pt-16 pb-4 px-4 md:pb-6 md:px-6">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="flex items-center flex-col space-y-8 xl:col-span-1">
            {theme === 'coborns' && (
              <img className="h-24" src={cobornsFooterLogo} alt="Coborn's" />
            )}
            {theme === 'cashwise' && (
              <img className="h-32" src={cashwiseFooterLogo} alt="Cashwise" />
            )}
            {theme === 'marketplace' && (
              <img
                className="h-14"
                src={marketplaceFooterLogo}
                alt="MarketPlace Foods"
              />
            )}
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.image className="h-9 w-9" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-serif leading-tight text-gray-500 tracking-wider uppercase">
                  Deals
                </h3>
                <ul className="mt-6 space-y-2">
                  {navigation.deals.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm font-medium text-gray-500 hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-lg font-serif leading-tight text-gray-500 tracking-wider uppercase">
                  Food &amp; Recipes
                </h3>
                <ul className="mt-6 space-y-2">
                  {navigation.food.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm font-medium text-gray-500 hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-serif leading-tight text-gray-500 tracking-wider uppercase">
                  Health &amp; Nutrition
                </h3>
                <ul className="mt-6 space-y-2">
                  {navigation.health.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm font-medium text-gray-500 hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-lg font-serif leading-tight text-gray-500 tracking-wider uppercase">
                  About Coborns
                </h3>
                <ul className="mt-6 space-y-2">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-sm font-medium text-gray-500 hover:underline"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <ul className="flex flex-wrap divide-x mb-2">
            {navigation.auxiliary.map((item, index) => (
              <li className={index > 0 ? 'mr-3 pl-3' : 'mr-3'} key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-medium text-gray-500 hover:underline"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-sm font-medium text-gray-500">
            Copyright &copy; 2021 Coborn's, Inc, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  theme: PropTypes.string
};

export default Footer;
