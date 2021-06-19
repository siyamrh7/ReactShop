import axios from 'axios';
import {deleteCart} from './cartAction'
const orderAction=(sum,token)=>async(dispatch)=>{
    const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    headers['Authorization'] = token
    try {
        await axios.post('https://reactbanshop.herokuapp.com/order/post',{price:sum},{headers:headers})
       dispatch(deleteCart(token))
    } catch (error) {
        console.log(error.message)
    }
}
export const getOrder=(token)=>async(dispatch)=>{
    const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    headers['Authorization'] = token
    try {
        const {data}=await axios.get('https://reactbanshop.herokuapp.com/order/getall',{headers:headers})
       dispatch({type:"GET_ORDERS",payload:data.orders})
    } catch (error) {
        console.log(error.message)
    }
}
export default orderAction;