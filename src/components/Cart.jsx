import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';

import { Button } from '@material-ui/core'
import Carts from './Carts'
import getCartAction from '../redux/actions/cartAction'
import orderAction from '../redux/actions/orderAction'
const Cart = () => {
    const { token } = useSelector(state => state.Auth)
    const { carts } = useSelector(state => state.Cart)
const dispatch = useDispatch()
const orderHandler=()=>{
    const price=carts.map((c)=>c.price)
    var sum = price.reduce(function(a, b){
        return a + b;
    }, 0);
    dispatch(orderAction(sum,token))
    setTimeout(()=>dispatch(getCartAction(token)),5000) 
    toast.success("Order Successfully Placed")
}
useEffect(() => {
dispatch(getCartAction(token))
}, [token])

    if (!carts || carts.length ===0) return(
        <div>
           <h1>No Product Available in your Cart
               </h1> 
               <Button fullWidth variant="contained" size="large" color="primary" style={{marginTop:"1rem",position:"fixed",bottom:"1%",right:"0",}} onClick={orderHandler}>Please Add a Product To Submit Order</Button>
        </div>
    )
    return <div>{
        carts.map(c => (
            <div key={carts.indexOf(c)}>
                <Carts c={c}/>
            </div>
        ))
    }
    <Button fullWidth variant="contained" size="large" color="primary" style={{marginTop:"1rem",position:"fixed",bottom:"1%",right:"0",}} onClick={orderHandler}> Place Order</Button>
    <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
    </div>
}


export default Cart
