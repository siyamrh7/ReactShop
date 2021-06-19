import React from 'react'
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux'
import { getOrder } from '../redux/actions/orderAction';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { Link } from 'react-router-dom';
import { Button,Table,TableContainer,TableBody,TableCell,TableHead,TableRow } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: "1px solid blue",
    marginTop:theme.spacing(5),
    marginBottom:"5%"
  },
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    
  },
  paper: {
    padding: theme.spacing(1),
    margin: 'auto',
    maxWidth: "auto",
  },
  image: {
    width: 100,
    height: 100,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));
const Orders = () => {
const dispatch=useDispatch();
const {token}= useSelector((state)=> state.Auth)
const {orders}= useSelector((state)=> state.Orders)
useEffect(()=>{
dispatch(getOrder(token))
},[token])

const classes = useStyles();
if(orders.length===0)return <h1>No Order Found</h1>
    return (
      <TableContainer component={Paper} className={classes.paper}>
      <Table aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell> Email</TableCell>
            <TableCell align="right">Total price</TableCell>
            {/* <TableCell align="right">products...</TableCell> */}
            {/* <TableCell align="right">product-2</TableCell> */}
            {/* <TableCell align="right">product-3</TableCell>
            <TableCell align="right">product-4</TableCell>
            <TableCell align="right">product-5</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.user.email}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              {
                row.products.map((product)=>(
                  <TableCell align="right" key={product._id} component={Link} to={`/detail/${product._id}`} style={{textDecoration:"none"}}>
               <Button variant="contained">
               {product.title}
                 </Button>     
                    </TableCell>
                  ))
                }
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}



export default Orders
