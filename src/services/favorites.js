import { useEffect, useState } from 'react';
import { config, API } from 'apiConfig';
import apiClient from './api';
import { CartState } from 'context/context';

export const addFavoriteApi = (payload) => {
  return apiClient.post(config.baseUrl + API.add_favorite, payload);
};

export const useDeleteFavorite = () => {
  const { dispatchFavorites } = CartState();
  const fetchFavorites = async () => {
    const favorites = await getAllFavorites();
    const items = favorites?.data.map((each) => {
      return {
        ...each,
        keywords: each.keywords ? each.keywords.split(',') : [],
        favorite: true
      };
    });
    dispatchFavorites({ type: 'SET_FAVORITE', payload: items });
  };

  const deleteFavorite = async (productId) => {
    await apiClient.delete(
      config.baseUrl + API.delete_favorite + productId,
      {}
    );
    fetchFavorites();
  };

  const addFavorite = async (payload) => {
    await addFavoriteApi(payload);
    fetchFavorites();
  };

  return {
    deleteFavorite,
    fetchFavorites,
    addFavorite
  };
};

export const getAllFavorites = () => {
  return apiClient.get(config.baseUrl + API.all_favorite);
};
