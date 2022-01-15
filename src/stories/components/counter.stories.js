import React from 'react';
import Counter from 'components/counter/counter';

export default {
  title: 'Components/Counter',
  component: Counter,
  argTypes: {
    defaultValue: {
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

export const CounterStory = (args) => <Counter {...args} />;

CounterStory.storyName = 'Counter';
