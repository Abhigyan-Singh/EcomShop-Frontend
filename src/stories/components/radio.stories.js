import React, { Fragment } from 'react';
import Radio from 'components/radio/radio';

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    disabled: {
      control: 'boolean',
      defaultValue: false
    },
    label: {
      defaultValue: 'Radio Label'
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

export const RadioStory = (args) => <Radio {...args} />;

RadioStory.storyName = 'Radio';

export const RadioGroupStory = (args) => (
  <Fragment>
    <Radio {...args} className="mb-2" id="radio-1" value="1" defaultChecked />
    <Radio {...args} className="mb-2" id="radio-2" value="2" />
    <Radio {...args} id="radio-3" value="3" />
  </Fragment>
);

RadioGroupStory.storyName = 'Radio Group';
