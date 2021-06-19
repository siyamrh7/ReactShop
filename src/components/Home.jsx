import { useSelector } from 'react-redux'
import Item from './Item'

import React from 'react'
import { Grid,Container ,Box } from '@material-ui/core'
const Home = () => {
    const {products,search}=useSelector(state=>state.productReducer)
    return (
        <Container component={Box} mt={5}>
            <Grid container justify="flex-start" spacing={5}
  alignItems="center">{
            products.filter((product)=>{if(search===""){
                return product
            }else if(product.title.toLowerCase().includes(search.toLowerCase())){return product}}).map(product=>(
               
           <Item key={product._id} product={product}/>
               
            ))
                        }
            </Grid>
            
        </Container>
    )
}

export default Home
