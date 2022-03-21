export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [
          ...state.cart.filter((p) => p.id !== action.payload.product_id),
          action.payload
        ]
      };
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(
          (c) => c.productName !== action.payload.productName
        )
      };
    case 'UPDATE_CART_QTY':
      return {
        ...state,
        cart: state.cart.filter((c) =>
          c.productName !== action.payload.productName
            ? (c.qty = action.payload.qty)
            : c.qty
        )
      };
    default:
      return state;
  }
};

export const itemReducer = (state, action) => {
  switch (action.type) {
    case 'SORT_BY_PRICE':
      return { ...state, sort: action.payload };
    case 'SORT_BY_BRAND':
      return { ...state, byBrand: action.payload };

    case 'SORT_BY_AMYS':
      return { ...state, byAmys: !state.byAmys };

    case 'SORT_BY_BANQUET':
      return { ...state, byBanquet: !state.byBanquet };

    case 'SORT_BY_ALL':
      return { ...state, byAll: action.payload };

    case 'SORT_BY_LOCAL':
      return { ...state, byLocal: !state.byLocal };

    case 'SORT_BY_ORGANIC':
      return { ...state, byOrganic: !state.byOrganic };

    case 'SORT_BY_GLUTENFREE':
      return { ...state, byGlutenFree: !state.byGlutenFree };

    case 'SORT_BY_NEW':
      return { ...state, byNew: !state.byNew };

    case 'SORT_BY_SALE':
      return { ...state, bySale: !state.bySale };

    case 'SORT_BY_NAME':
      return { ...state, byName: action.payload };

    case 'SORT_BY_SIZE':
      return { ...state, bySize: action.payload };

    default:
      return state;
  }
};

export const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVORITE': {
      console.log('set favorites');
      return {
        ...state,
        favorites: action.payload
      };
    }
    default:
      return state;
  }
};
