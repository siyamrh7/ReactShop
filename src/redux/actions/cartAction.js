import axios from 'axios'


const getCartAction=(token)=>async(dispatch)=>{
    const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    headers['Authorization'] = token
    const { data } = await axios.get('https://reactbanshop.herokuapp.com/user/getcart', { headers: headers })
 dispatch({type:"GET_CART",payload:data.cart})
}

export const deleteCart=(token)=>async(dispatch)=>{
    const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    headers['Authorization'] = token
 await axios.delete('https://reactbanshop.herokuapp.com/order/cart',{headers:headers})
}
export const deleteItem=(token,_id)=>async(dispatch)=>{
    const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
    headers['Authorization'] = token
    await axios.put('https://reactbanshop.herokuapp.com/user/deletecart',{_id:_id},{headers:headers})
}
export default getCartAction;