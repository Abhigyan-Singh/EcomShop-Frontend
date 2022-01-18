import React, { Fragment } from 'react';
import List from 'stories/components/list.stories';

export default {
  title: 'Pages/Home',
  argTypes: {
    isAuthenticated: {
      name: 'Show Authenticated State',
      control: 'boolean',
      defaultValue: true
    }
  },
  parameters: {
    layout: 'fullscreen'
  }
};

export const DisplayShoppingListDetails = ({
  isAuthenticated,
  logout,
  ...rest
}) => {
  return (
    <Fragment>
      <div style={{ height: 500 }}>
        <List />
      </div>
    </Fragment>
  );
};

DisplayShoppingListDetails.storyName = 'DisplayShoppingListDetails';
