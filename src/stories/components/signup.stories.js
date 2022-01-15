import React from 'react';
import Signup from 'components/signup/signup';

export default {
  title: 'Components/Signup',
  component: Signup,
  argTypes: {}
};

export const SignupStory = (args) => <Signup {...args} />;

SignupStory.storyName = 'Signup';
