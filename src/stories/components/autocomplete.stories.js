import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/solid';
import Autocomplete from 'components/autocomplete/autocomplete';

export default {
  title: 'Components/Autocomplete',
  component: Autocomplete,
  argTypes: {
    items: {
      control: 'array',
      defaultValue: ['Apple', 'Banana', 'Orange']
    },
    onChange: {
      table: {
        disable: true
      }
    },
    onItemSelect: {
      table: {
        disable: true
      }
    },
    value: {
      table: {
        disable: true
      }
    }
  }
};

export const AutocompleteStory = ({ onChange, onItemSelect, ...rest }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
    onChange(event);
  };

  const handleItemSelect = (item) => {
    setValue(item);
    onItemSelect(item);
  };

  return (
    <Autocomplete
      {...rest}
      className="block w-full lg:w-96 h-10 md:h-11"
      hasRoundedCorners={true}
      icon={SearchIcon}
      placeholder="What are you looking for?"
      onChange={(event) => handleChange(event)}
      onItemSelect={(item) => handleItemSelect(item)}
      value={value}
      aria-label="LABEL HERE OR ADD LABEL TAG"
    />
  );
};

AutocompleteStory.storyName = 'Autocomplete';
