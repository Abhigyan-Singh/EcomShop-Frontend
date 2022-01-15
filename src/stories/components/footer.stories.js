import React from 'react';
import Footer from 'components/footer/footer';

export default {
  title: 'Components/Footer',
  component: Footer,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    theme: {
      table: {
        disable: true
      }
    }
  }
};

export const FooterStory = (args, { globals: { theme } }) => (
  <Footer {...args} theme={theme} />
);

FooterStory.storyName = 'Footer';
