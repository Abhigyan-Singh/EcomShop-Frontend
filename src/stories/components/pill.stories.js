import React from 'react';
import Pill from 'components/pill/pill';

export default {
  title: 'Components/Pill',
  component: Pill,
  argTypes: {
    label: {
      defaultValue: 'Pill Label'
    },
    href: {
      defaultValue: '#link',
      table: {
        disable: true
      }
    }
  }
};

export const PillStory = (args) => <Pill {...args} />;

PillStory.storyName = 'Pill';
