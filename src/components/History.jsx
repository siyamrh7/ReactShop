import { useEffect ,useState} from "react"
import React from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import moment from "moment"
import { Table,TableHead,Paper,Button,TableContainer,Box,TableBody,TableCell,TableRow } from "@material-ui/core"
import { useSelector } from "react-redux"
const History = () => {
    const [orders,setOrders]=useState([])
    const [user,setUser]=useState([])
    const [date,setDate]=useState([])
    const { token } = useSelector(state => state.Auth)

    const fetch=async()=>{
        const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
        headers['Authorization'] = token
const {data}=await axios.get('https://reactbanshop.herokuapp.com/user/history',{headers:headers})
const set=()=>{
    setOrders(data.orders)
    setUser(data.user)
    setDate(data.date)
   
}
if(data){
set()
}
    }
    useEffect(()=>{
      if(token){
        fetch()
      }
    },[token])
    if(user && orders.length===0){return <h1>No order history</h1>}
    if(!user){return null}
    return (
        <Box justifyContent="center">
            <h1>Orders History Of {user.name}</h1>
        <TableContainer component={Paper}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((row) => (
              <TableRow key={orders.indexOf(row)}>
                <TableCell component={Link} to={`/detail/${row._id}`} style={{textDecoration:"none"}} scope="row">
                <Button variant="outlined" >{row.title}</Button>  
                </TableCell>
            
                <TableCell align="right">{row.price}</TableCell>
                <TableCell align="right">{row.qty}</TableCell>
                        
                        <TableCell align="right">{moment(date).format('YYYY-MM-DD')}</TableCell>
                    
                
              </TableRow>
                        ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
    )
}

export default History
