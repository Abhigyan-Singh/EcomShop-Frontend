export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_POST_LOGIN': {
      return {
        ...state,
        postlogin: action.payload
      };
    }
    case 'SET_CART_PROGRESS': {
      return {
        ...state,
        progress: action.payload
      };
    }
    case 'SET_CART_DATA': {
      const cart = action.payload;
      return {
        ...state,
        cart,
        total: cart.reduce((result, item) => item.normalPrice + result, 0)
      };
    }

    case 'ADD_TO_CART':
      console.log(action);
      const item = state.cart.find(
        (product) => product.productId === action.payload.productId
      );
      console.log('add to cart', state)

      if (item) {
        const count = state.count + 1
        const cart = state.cart.map((product) => {
          if (product.productId === action.payload.productId) {
            const totalQuantity = action.qty
              ? action.qty + product.qty
              : product.qty + 1;
            return {
              ...product,
              qty: totalQuantity
            };
          }
          return product;
        });
        return {
          ...state,
          cart,
          count,
          total: cart.reduce(
            (result, item) => item.qty * item.normalPrice + result,
            0
          )
        };
      } else {
        const count = state.count + 1
        const cart = [
          ...state.cart,
          {
            ...action.payload,
            qty: action.qty ? action.qty : 1,
          }
        ];
        return {
          ...state,
          cart,
          count,
          total: cart.reduce(
            (result, item) => item.qty * item.normalPrice + result,
            0
          )
        };
      }

    case 'REMOVE_FROM_CART':
      const decreaseCount = state.count - 1
      const item2 = state.cart.find(
        (product) => product.productId === action.payload.productId
      );
      if (item2) {
        const cart = state.cart.filter(
          (c) => c.productId !== action.payload.productId
        );
        return {
          ...state,
          cart,
          decreaseCount,
          total: cart.reduce(
            (result, item) => item.qty * item.normalPrice + result,
            0
          )
        };
      }

    case 'INCREASE_ITEM_QTY':
      const count2 = state.count + 1
      const item3 = state.cart.find(
        (product) => product.productId === action.payload.productId
      );
      if (item3) {
        const cart = state.cart.map((product) => {
          if (product.productId === action.payload.productId) {
            return {
              ...product,
              qty: product.qty + 1
            };
          }
          return product;
        });
        return {
          ...state,
          cart,
          count2,
          total: cart.reduce(
            (result, item) => item.qty * item.normalPrice + result,
            0
          )
        };
      }

    case 'DECREASE_ITEM_QTY':
      const item4 = state.cart.find(
        (product) => product.productId === action.payload.productId
      );
      if (item4) {
        const cart = state.cart.map((product) => {
          if (product.productId === action.payload.productId) {
            return {
              ...product,
              qty: Math.max(product.qty - 1, 1)
            };
          }
          return product;
        });
        return {
          ...state,
          cart,
          total: cart.reduce(
            (result, item) => item.qty * item.normalPrice + result,
            0
          )
        };
      }

    case 'INPUT_QTY':
      const cart3 = state.cart.map((product) => {
        if (product.productId === action.payload.productId) {
          return {
            ...product,
            qty: product.qty + 1
          };
        }
        return product;
      });
      return {
        ...state,
        cart3,
        total: cart3.reduce(
          (result, item) => item.qty * item.normalPrice + result,
          0
        )
      };

    case 'SAVE_ITEM_QTY':
      const cart = state.cart.map((product) => {
        if (product.productId === action.payload.productId) {
          return {
            ...product,
            qty: action.qty
          };
        }
        return product;
      });
      return {
        ...state,
        cart,
        total: cart.reduce(
          (result, item) => item.qty * item.normalPrice + result,
          0
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
    case 'SET_FAVORITE_PROGRESS': {
      return {
        ...state,
        progress: action.payload
      };
    }
    default:
      return state;
  }
};

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER': {
      return {
        ...state,
        user: action.payload
      };
    }
    default:
      return state;
  }
};
