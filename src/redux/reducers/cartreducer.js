const InitState={
carts:[],
}
const cartReducer=(state=InitState,action)=>{
switch (action.type) {
    case "GET_CART":
        return {...state,carts:action.payload};
    default:
    return state
}
}
export default cartReducer;