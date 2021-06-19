const InitState={
    orders:[]
}
const OrdersReducer=(state=InitState,action)=>{
    switch (action.type) {
        case "GET_ORDERS":
            if (action.payload.msg){
                return state
            }
            return {...state,orders:action.payload}
    
        default:
            return state
    }
}
export default OrdersReducer