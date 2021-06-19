import { combineReducers } from "redux";
import Authenticate from "./reducers/AuthReducer";
import cartReducer from "./reducers/cartreducer";
import productReducer from "./reducers/productReducer";
import OrderReducer from "./reducers/OrderReducer"
const rootReducer=combineReducers({
productReducer,
Auth:Authenticate,
Cart:cartReducer,
Orders:OrderReducer
})
export default rootReducer;