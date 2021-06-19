import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Paper,Box,Button,TextField ,Typography} from '@material-ui/core'

import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
    const dispatch = useDispatch()

    const [data,setData]=useState({email:"",password:""})
    const [RES,setRes]=useState()
    const history=useHistory()
    const [msg,setmsg]=useState("Login Here")
    const handler=(e)=>{
      
        setData({...data,[e.target.name]:e.target.value})
    }
    const post=(e)=>{
e.preventDefault()
axios.post('https://reactbanshop.herokuapp.com/user/login',data).then(res=>setRes(res.data)).catch(err=>console.log(err))
    }
    useEffect(()=>{
        if(RES){
const{token,msg}=RES
if(token){
    localStorage.setItem("token",token)
    dispatch({ type: "Auth" })
    dispatch({ type: "CLOSELOG" })
}
if(msg){setmsg(msg)}
}
    },[RES])
    useEffect(()=>{
toast.success(msg)
    },[msg])
    return (
        <div>


<Paper component={Box} width={500} onSubmit={post}>
    <Box px={10} component="form">
        <Typography variant="h6" style={{fontWeight:"bold"}} color="primary"> LOGIN</Typography>

<TextField fullWidth margin="normal" label="Email" type="text" name="email" value={data.email} onChange={handler}>
    
</TextField >
<TextField fullWidth margin="normal" label="Password" type="text" name="password" value={data.password} onChange={handler}>
</TextField>
<Button type="submit" display="inline-block" my={5} margin="normal" variant="contained" color="primary"> Submit</Button>
<Button component={Box} my={5}margin="normal" onClick={()=>dispatch({type:"CLOSELOG"})}> Cancel</Button>
    </Box>

</Paper>
<ToastContainer
position="top-center"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
        </div>
    )
}

export default Login
