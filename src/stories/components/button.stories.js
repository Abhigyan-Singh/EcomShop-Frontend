import React from 'react';
import Button from 'components/button/button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    appearance: {
      control: 'select',
      defaultValue: 'primary'
    },
    label: {
      defaultValue: 'Click Me'
    },
    onClick: {
      table: {
        disable: true
      }
    }
  }
};

export const ButtonStory = (args) => <Button {...args} />;

ButtonStory.storyName = 'Button';
