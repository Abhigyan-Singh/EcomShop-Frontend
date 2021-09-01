import React from 'react';
import Tabs from 'components/tabs/tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  argTypes: {
    tabs: {
      defaultValue: [
        { name: 'Tab 1', href: '#', current: false },
        { name: 'Tab 2', href: '#', current: true },
        { name: 'Tab 3', href: '#', current: false },
        { name: 'Tab 4', href: '#', current: false }
      ]
    }
  }
};

export const TabsStory = (args) => <Tabs {...args} />;

TabsStory.storyName = 'Tabs';
