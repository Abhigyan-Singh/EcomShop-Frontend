import React from 'react';
import Locator from 'components/locator/locator';

export default {
  title: 'Components/Locator',
  component: Locator,
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    onLocationChange: {
      table: {
        disable: true
      }
    }
  }
};

export const LocatorStory = (args) => <Locator {...args} />;

LocatorStory.storyName = 'Locator';
