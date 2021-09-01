import React from 'react';
import Select from 'components/select/select';

export default {
  title: 'Components/Select',
  component: Select,
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false
    },
    size: {
      control: 'select',
      defaultValue: 'default'
    },
    hasRoundedCorners: {
      control: 'boolean',
      defaultValue: false
    },
    isAccented: {
      control: 'boolean',
      defaultValue: false
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

export const SelectStory = (args) => (
  <Select {...args} defaultValue="" aria-label="Placeholder label">
    <option disabled value="">
      Select an option
    </option>
    <option>Option 1</option>
    <option>Option 2</option>
    <option>Option 3</option>
  </Select>
);

SelectStory.storyName = 'Select';
