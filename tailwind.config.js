const { themeVariants } = require('tailwindcss-theme-variants');

module.exports = {
  important: true,
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      'proxima-nova': ['proxima-nova', 'sans-serif'],
      clarendon: ['clarendon-urw', 'serif'],
      sans: ['proxima-nova', 'sans-serif'],
      serif: ['clarendon-urw', 'serif']
    },
    extend: {
      colors: {
        gray: {
          50: '#ffffff',
          100: '#f0f0f0',
          200: '#c0c0c0',
          300: '#909090',
          400: '#606060',
          500: '#303030',
          600: '#000000'
        },
        red: {
          DEFAULT: '#e32739',
          50: '#e32739'
        },
        merlot: {
          DEFAULT: '#a20f31',
          50: '#a20f31',
          100: '#5a0015'
        },
        clementine: {
          DEFAULT: '#eb7923',
          50: '#eb7923',
          100: '#bf621c'
        },
        orange: {
          DEFAULT: '#fd6032',
          50: '#fd6032',
          100: '#cc390e'
        },
        yellow: {
          DEFAULT: '#f3f8af',
          50: '#f3f8af',
          100: '#f6f7ea',
          200: '#ecedde'
        },
        lime: {
          DEFAULT: '#bfde6b',
          50: '#bfde6b',
          100: '#a5ce38'
        },
        green: {
          DEFAULT: '#296c28',
          50: '#296c28',
          100: '#153e15'
        },
        forest: {
          DEFAULT: '#2a7251',
          50: '#2a7251',
          100: '#0c5b36'
        }
      },
      boxShadow: {
        select: 'inset 0 -3px 0 0 #a5ce38',
        'select-merlot': 'inset 0 -3px 0 0 #a20f31'
      },
      spacing: {
        88: '22rem'
      }
    }
  },
  variants: {
    extend: {
      backgroundColor: [
        'disabled',
        'hover',
        'coborns',
        'coborns:disabled',
        'coborns:hover',
        'coborns:focus',
        'coborns:focus-visible',
        'cashwise',
        'cashwise:disabled',
        'cashwise:hover',
        'cashwise:focus',
        'cashwise:focus-visible',
        'marketplace',
        'marketplace:disabled',
        'marketplace:hover',
        'marketplace:focus',
        'marketplace:focus-visible'
      ],
      borderColor: [
        'focus-visible',
        'coborns',
        'coborns:focus',
        'cashwise',
        'cashwise:focus',
        'marketplace',
        'marketplace:focus'
      ],
      boxShadow: ['coborns', 'cashwise', 'marketplace'],
      cursor: ['disabled'],
      ringWidth: [
        'focus',
        'coborns:focus',
        'cashwise:focus',
        'marketplace:focus',
        'focus-visible',
        'coborns:focus-visible',
        'cashwise:focus-visible',
        'marketplace:focus-visible'
      ],
      ringColor: [
        'focus',
        'coborns:focus',
        'cashwise:focus',
        'marketplace:focus',
        'focus-visible',
        'coborns:focus-visible',
        'cashwise:focus-visible',
        'marketplace:focus-visible'
      ],
      ringOffsetWidth: [
        'focus',
        'coborns:focus',
        'cashwise:focus',
        'marketplace:focus',
        'focus-visible',
        'coborns:focus-visible',
        'cashwise:focus-visible',
        'marketplace:focus-visible'
      ],
      ringOffsetColor: [
        'focus',
        'coborns:focus',
        'cashwise:focus',
        'marketplace:focus',
        'focus-visible',
        'coborns:focus-visible',
        'cashwise:focus-visible',
        'marketplace:focus-visible'
      ],
      ringOpacity: [
        'focus',
        'coborns:focus',
        'cashwise:focus',
        'marketplace:focus',
        'focus-visible',
        'coborns:focus-visible',
        'cashwise:focus-visible',
        'marketplace:focus-visible'
      ],
      textColor: ['disabled', 'coborns', 'cashwise', 'marketplace'],
      visibility: [
        'group-focus',
        'group-focus-within',
        'group-focus-visible',
        'group-hover'
      ]
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwindcss-interaction-variants'),
    themeVariants({
      themes: {
        coborns: {
          selector: '.coborns-theme'
        },
        cashwise: {
          selector: '.cashwise-theme'
        },
        marketplace: {
          selector: '.marketplace-theme'
        }
      }
    })
  ]
};
