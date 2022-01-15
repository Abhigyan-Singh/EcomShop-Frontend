import '../src/index.css';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: { disable: true },
  controls: {
    hideNoControlsWarning: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  html: {
    highlighter: {
      showLineNumbers: true
    },
    removeEmptyComments: true
  }
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components and layouts',
    defaultValue: 'coborns',
    toolbar: {
      icon: 'paintbrush',
      items: [
        { value: 'coborns', title: 'Coborns' },
        { value: 'cashwise', title: 'Cashwise' },
        { value: 'marketplace', title: 'MarketPlace' }
      ],
      showName: true
    }
  }
};

const withThemeProvider = (Story, context) => {
  document.documentElement.className = `${context.globals.theme}-theme`;
  return <Story {...context} />;
};
export const decorators = [withThemeProvider];
