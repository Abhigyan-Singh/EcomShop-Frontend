
export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            const item = state.cart.find(
                product => product.productId === action.payload.productId,
            );

            if (item) {
                const cart = state.cart.map(product => {
                    if(product.productId === action.payload.productId) {
                        return {
                            ...product,
                            qty: product.qty + 1,
                        }
                    }
                    return product;
                })
                return {
                    ...state,
                    cart,
                    total: cart.reduce((result, item) =>  item.qty * item.currentPrice + result, 0)
                }
            } else {
                const cart =  [...state.cart, { ...action.payload, qty: 1 }]
                return {
                    ...state,
                    cart,
                    total: cart.reduce((result, item) => item.qty * item.currentPrice + result, 0)
                }
            }                                                    
        case "REMOVE_FROM_CART": 
            const item2 = state.cart.find(
                product => product.productId === action.payload.productId,
            );        
            if (item2) {
                const cart = state.cart.filter((c) => c.productId !== action.payload.productId)        
                    return {
                        ...state,        
                        cart,
                        total: cart.reduce((result, item) =>  item.qty * item.currentPrice + result, 0)
                    }            
                }                        
        case "UPDATE_CART_QTY":
            const cart = state.cart.filter((item) => item.productId !== action.payload.productId 
                ? item.qty = action.payload.qty 
                : item.qty)
            return {
                ...state, 
                cart,
                total: cart.reduce((result, item) =>  item.qty * item.currentPrice + result, 0)    
            }
        default:
            return state;
    };
}

export const itemReducer = (state, action) => {
    switch (action.type) {
        case "SORT_BY_PRICE":
            return {...state, sort: action.payload }; 
        case "SORT_BY_BRAND":
            return {...state, byBrand: action.payload };

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
      return {
        ...state,
        favorites: action.payload
      };
    }
    default:
      return state;
  }
};
