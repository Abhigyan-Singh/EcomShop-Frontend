import React from 'react';
import Header from 'components/header/header';
import user from 'data/user.json';

export default {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    isAuthenticated: {
      name: 'Show Authenticated State',
      control: 'boolean',
      defaultValue: true
    },
    onDeptChange: {
      table: {
        disable: true
      }
    },
    theme: {
      table: {
        disable: true
      }
    },
    user: {
      table: {
        disable: true
      }
    }
  }
};

export const HeaderStory = (
  { isAuthenticated, onDeptChange, ...rest },
  { globals: { theme } }
) => <Header {...rest} theme={theme} user={isAuthenticated ? user : null} />;

HeaderStory.storyName = 'Header';
