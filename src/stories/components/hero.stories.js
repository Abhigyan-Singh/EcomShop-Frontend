import React from 'react';
import Hero from 'components/hero/hero';
import slides from 'data/slides.json';

export default {
  title: 'Components/Hero',
  component: Hero,
  argTypes: {
    slides: {
      table: {
        disable: true
      }
    }
  }
};

export const HeroStory = (args) => <Hero {...args} slides={slides} />;

HeroStory.storyName = 'Hero';
