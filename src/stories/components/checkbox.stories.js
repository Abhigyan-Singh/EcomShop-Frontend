import React, { Fragment } from 'react';
import Checkbox from 'components/checkbox/checkbox';
import { Popover } from '@headlessui/react';


export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false
    },
    label: {
      defaultValue: 'Checkbox Label'
    },
    name: {
      defaultValue: 'group-1',
      table: {
        disable: true
      }
    },
    onChange: {
      table: {
        disable: true
      }
    }
  }
};

export const CheckboxStory = (args) => <Checkbox {...args} />;

CheckboxStory.storyName = 'Checkbox';

export const CheckboxGroupStory = (args) => (
  <Fragment>
    <Checkbox
      {...args}
      className="mb-2"
      id="checkbox-1"
      value="1"
      defaultChecked
    />
    <Checkbox {...args} className="mb-2" id="checkbox-2" value="2" />
    <Checkbox {...args} id="checkbox-3" value="3" />
  </Fragment>
);

CheckboxGroupStory.storyName = 'Checkbox Group';
