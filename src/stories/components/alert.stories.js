import React from 'react';
import Alert from 'components/alert/alert';

export default {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    icon: {
      table: {
        disable: true
      }
    }
  }
};

export const AlertStory = (args) => (
  <Alert {...args}>
    COVID-19 Vaccinations are now available in select locations.{' '}
    <a className="underline">Check Availability</a>
  </Alert>
);

AlertStory.storyName = 'Alert';
