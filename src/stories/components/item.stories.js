import React from 'react';
import Item from 'components/item/item';
import itemData from 'data/item.json';

export default {
  title: 'Components/Item',
  component: Item,
  argTypes: {
    item: {
      defaultValue: itemData,
      table: {
        disable: true
      }
    },
    layout: {
      control: 'select',
      defaultValue: 'card'
    },
    onAddClick: {
      table: {
        disable: true
      }
    },
    onFavoriteClick: {
      table: {
        disable: true
      }
    },
    onListClick: {
      table: {
        disable: true
      }
    },
    onViewClick: {
      table: {
        disable: true
      }
    }
  }
};

export const ItemStory = (args) => (
  <Item className={args.layout === 'card' ? 'w-56' : 'w-full'} {...args} />
);

ItemStory.storyName = 'Item';
