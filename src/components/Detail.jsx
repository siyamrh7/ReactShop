import React, { useEffect } from 'react'
import { useParams } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { Grid ,Box, Paper} from '@material-ui/core'
import Item from './Item'
import detailAction from '../redux/actions/detailAction'
import Details from './Details'
import { useState } from 'react'
const Detail = () => {
    const dispatch = useDispatch()
    const [related, setrelated] = useState([])
    const { products, product } = useSelector(state => state.productReducer)
    const { id } = useParams()
    useEffect(() => {
        if(products.length!=0){
            dispatch(detailAction(id))
        }
    }, [products,id])
    useEffect(() => {
      
            const prods = products.filter(p => (p.category === product.category))
            setrelated(prods)
        
    }, [product])
    if (!product) { return null }
    return (
        <div>
            <Details product={product} />
            <Box mt={10} boxShadow={3} component={Paper}>

            <Grid container spacing={6} justifyContent="flex-start"
  alignItems="flex-start" component={Box} px={10}>
            {related.map((product) => (
               <Item product={product} key={product._id}/>
            ))}
            </Grid>
            </Box>
        </div>
    )
}

export default Detail
