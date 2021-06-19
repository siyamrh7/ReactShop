import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { Paper,Box,Button,TextField } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { Typography } from '@material-ui/core'
import { useEffect } from 'react';
const Register = () => {
    const [data,setData]=useState({name:"",email:"",password:""})
    const [RES,setRes]=useState("Register Here")
    const dispatch=useDispatch()
    const handler=(e)=>{
      
        setData({...data,[e.target.name]:e.target.value})
    }
    const post=(e)=>{
        
e.preventDefault()
axios.post('https://reactbanshop.herokuapp.com/user/register',data).then(res=>setRes(res.data)).catch(err=>console.log(err))
    }
   useEffect(()=>{
       const {msg,user}=RES
       if(user){
           dispatch({type:"CLOSEREG"})
           dispatch({type:"LOGIN"})}
toast.error(msg)
   },[RES])
    return (
        <div>
<Paper component={Box} width={500}>
    <Box px={10} component="form" onSubmit={post} >
        <Typography variant="h6" style={{fontWeight:"bold"}} color="primary"> REGISTER </Typography>
<TextField fullWidth margin="normal" label="Name" type="text" name="name" onChange={handler}/>


<TextField fullWidth margin="normal" label="Email" type="text" name="email"  onChange={handler}/>
    

<TextField fullWidth margin="normal" label="Password" type="text" name="password" onChange={handler}/>

<Button  type="submit" my={5} margin="normal" variant="contained" color="primary"> Submit</Button>
<Button component={Box} my={5}margin="normal"  onClick={()=>dispatch({type:"CLOSEREG"})}> Cancel</Button>
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

export default Register
