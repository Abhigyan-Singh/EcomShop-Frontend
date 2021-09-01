import React from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import Input from 'components/input/input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false
    },
    placeholder: {
      defaultValue: 'Type something here...'
    },
    size: {
      control: 'select',
      defaultValue: 'default'
    },
    hasRoundedCorners: {
      control: 'boolean',
      defaultValue: false
    },
    icon: {
      table: {
        disable: true
      }
    },
    iconVisible: {
      control: 'boolean',
      defaultValue: false
    },
    iconPosition: {
      control: 'select',
      defaultValue: 'left'
    },
    isInvalid: {
      control: 'boolean',
      defaultValue: false
    },
    onChange: {
      table: {
        disable: true
      }
    }
  }
};

export const InputStory = ({ iconVisible, ...rest }) => (
  <Input {...rest} icon={iconVisible && SearchIcon} />
);

InputStory.storyName = 'Input';
