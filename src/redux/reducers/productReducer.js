
var InitState = {
    products: [],
    product: {},
    cart: {},
    search: "",
   
}
const productReducer = (state = InitState, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload };
        case "GET_PRODUCT":
            return {
                ...state,
                product: state.products.find(p => p._id === action.id)
            };
        case "ADD_CART":
            const check = state.cart._id === action.id;
            if (check) { return state }
            else { return { ...state, cart: state.products.find(p => p._id === action.id) } };
        case "SEARCH":
            return { ...state, search: action.payload };
       
        default:
            return state;
    }
}
export default productReducer;