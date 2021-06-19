import axios from "axios"
const productsAction=()=>async(dispatch)=>{
    try {
        
        const {data}=await axios.get('https://reactbanshop.herokuapp.com/product/all')
       
        dispatch({type:"GET_PRODUCTS",payload:data.products})
    } catch (error) {
        console.log(error.message)
        
    }

}
export default productsAction