/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import { addFavorite, useDeleteFavorite } from 'services/favorites';

const Favorite = (props) => {
  const { deleteFavorite } = useDeleteFavorite();

  const handleFavoriteClick = async () => {
    if (!props.favorite) {
      await addFavorite({ productId: props.productId });
    } else {
      await deleteFavorite(props.productId);
    }
  };

  const color = '#ea1b21';

  const { showLabel = false } = props;
  const style = props.isCard ? { marginLeft: 15 } : {};
  const styleClass = props.isCard
    ? 'block mb-2 ml-15'
    : 'relative rounded-sm inline-flex items-center font-medium text-sm text-left';
  return (
    <button
      key={props.productId}
      style={style}
      onClick={handleFavoriteClick}
      className={styleClass}
    >
      {props.favorite ? (
        <HeartIcon
          className="h-6 w-6 font-medium"
          stroke={color}
          fill={color}
        />
      ) : (
        <HeartIcon className="h-6 w-6 font-medium" />
      )}
      {showLabel && <span className="ml-2">Favorite</span>}
    </button>
  );
};

export default Favorite;
