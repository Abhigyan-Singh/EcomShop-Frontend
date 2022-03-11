export const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state, 
                cart: [...state.cart, {...action.payload, qty: 1}] 
            }
        case "REMOVE_FROM_CART":
            return {
                ...state, 
                cart: state.cart.filter((c) => c.productName !== action.payload.productName)}
        case "UPDATE_CART_QTY":
            return {
                ...state, 
                cart: state.cart.filter((c) => c.productName !== action.payload.productName 
                    ? c.qty = action.payload.qty 
                    : c.qty
            )}
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

        case "SORT_BY_AMYS":
            return {...state, byAmys: action.payload }; 
 
        case "SORT_BY_BANQUET":
            return {...state, byBanquet: action.payload }; 

        case "SORT_BY_ALL":
            return {...state, byAll: action.payload }; 
            
        case "SORT_BY_LOCAL":
            return {...state, byLocal: action.payload }; 

        case "SORT_BY_ORGANIC":
            return {...state, byOrganic: action.payload }; 
            
        case "SORT_BY_GLUTENFREE":
            return {...state, byGlutenFree: action.payload }; 
            
        case "SORT_BY_NEW":
            return {...state, byNew: action.payload }; 
            
        case "SORT_BY_SALE":
            return {...state, bySale: action.payload }; 
             
        case "SORT_BY_NAME":
            return {...state, byName: action.payload }; 
    
        case "SORT_BY_SIZE":
            return {...state, bySize: action.payload }; 
            
    default:
        return state 

    }
}