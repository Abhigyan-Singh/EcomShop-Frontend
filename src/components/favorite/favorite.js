/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { HeartIcon } from '@heroicons/react/outline';
import { addFavorite, deleteFavorite } from 'services/favorites';

const Favorite = (props) => {
  const [favourite, setFavourite] = useState(props.favorite);

  const handleFavoriteClick = async () => {
    if (!favourite) {
      await addFavorite({ productId: props.productId });
      setFavourite(true);
    } else {
      await deleteFavorite(props.productId);
      setFavourite(false);
    }
  };

  const color = favourite ? '#ea1b21' : null;
  let heartProps = {};
  if (color) {
    heartProps = { stroke: color, fill: color };
  }

  const { showLabel = false } = props;
  const style = props.isCard ? { marginLeft: 15 } : {};
  const styleClass = props.isCard
    ? 'block mb-2 ml-15'
    : 'relative rounded-sm inline-flex items-center font-medium text-sm text-left';
  return (
    <button style={style} onClick={handleFavoriteClick} className={styleClass}>
      <HeartIcon className="h-6 w-6 font-medium" {...heartProps} />
      {showLabel && <span className="ml-2">Favorite</span>}
    </button>
  );
};

export default Favorite;
