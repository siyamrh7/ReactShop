import React, { useEffect } from 'react'
import axios from 'axios'
import Register from './Register'
import  Appbar  from './Appbar.jsx'
import Login from './Login'
import { Dialog,DialogContent} from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import productsAction from '../redux/actions/productsAction'
const NavBar = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(productsAction())
        dispatch({ type: "Auth" })
    }, [])
    const { token,regauth,logauth } = useSelector(state => state.Auth)
    const { cart } = useSelector(state => state.productReducer)
    const post = async () => {
        const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
        headers['Authorization'] = token
         await axios.put('https://reactbanshop.herokuapp.com/user/cart', { cart: cart }, { headers: headers })
    }
    useEffect(() => {
        post()
    }, [cart])


    return (
        <>
       
        <Appbar/>
       
        <Dialog open={regauth} onClose={()=>dispatch({type:"CLOSEREG"})}>
<DialogContent>
<Register/>
</DialogContent>
            </Dialog>
            <Dialog open={logauth} onClose={()=>dispatch({type:"CLOSELOG"})}>
<DialogContent>
<Login/>
</DialogContent>
            </Dialog>
        </>
    )
}

export default NavBar
