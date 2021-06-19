const detailAction=(id)=>dispatch=>{
    dispatch({type:"GET_PRODUCT",id:id})
}
export default detailAction;