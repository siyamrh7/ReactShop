import React from 'react'
import { Link } from 'react-router-dom';
import { useDispatch ,useSelector} from 'react-redux';
import { Button, Container, Grid, Card, Box, Typography, CardMedia, CardActionArea, CardActions, CardContent } from '@material-ui/core'
const Item = ({ product }) => {
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.Auth)
   const cartadder=()=>{
       if(!token){dispatch({type:"REGISTER"})}
       dispatch({ type: "ADD_CART", id: product._id })
    }
    return (

        <Grid item xs={12} sm={3} key={product._id} >
            <Card component={Box} boxShadow={10}>
                <CardActionArea>
                    <CardMedia component="img" image={product.images}></CardMedia>
                    <CardContent><Typography variant="h5">{product.title}</Typography><Typography variant="subtitle1">{product.price}</Typography></CardContent>
                </CardActionArea>
                <CardActions>
                    <Button variant="contained" style={{ flexGrow: 1 }} color="primary" component={Link} to={`/detail/${product._id}`}>View</Button>
                    <Button variant="contained" color="primary" onClick={cartadder}>ADD Cart</Button>
                </CardActions>
            </Card>
        </Grid>

    )
}

export default Item
