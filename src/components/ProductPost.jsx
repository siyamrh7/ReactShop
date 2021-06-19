import React, { useState ,useEffect} from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux';
import { TextField, Button, Paper, Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",

    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),

        width: '25ch',
    },
    paper: {
        marginTop: theme.spacing(5)
    }
}));
const ProductPost = () => {
    const [data, setData] = useState({
        title: "", images: "", description: "", price: null, content: "", category: "", qty: null, sold: null
    })
    const [msg, setmsg] = useState("Wellcome to Create Product")
    const onchangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const { token } = useSelector(state => state.Auth)

    const submitHandler = async (e) => {
        e.preventDefault();
        const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json' }
        headers['Authorization'] = token
        const dat = await axios.post('/product/create', data,{headers:headers})
        setmsg(dat.data.msg)
    }
   useEffect(() => {
    toast.error(msg)
   }, [msg])
        
    
    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation={20} component={Box}>

            <div className={classes.root}>
                <Box component="form" onSubmit={submitHandler} px={3} pb={3}>
                    <TextField
                        id="standard-full-width"
                        label="Enter The Product Name"
                        style={{ margin: 8, marginTop: 50 }}
                        placeholder="Product Name"
                        helperText="Every product name should be unique"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        variant="outlined"
                        type="text" onChange={onchangeHandler} name="title"
                    />
                    <Grid container>
                        <Grid item xs={12} sm={3}>

                            <TextField
                                label="Category"
                                id="margin-dense"

                                className={classes.textField}
                                helperText="Category name can be similar"
                                margin="normal"
                                variant="filled"
                                size="small"
                                type="text" onChange={onchangeHandler} name="category"
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>

                            <TextField
                                label="Price"
                                margin="normal"
                                id="margin-none"
                                size="small"
                                variant="filled"
                               
                                className={classes.textField}
                                helperText="Enter the product price"
                                type="number" onChange={onchangeHandler} name="price"
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>

                            <TextField
                                label="Quantity"
                                id="margin-dense"
                                
                                className={classes.textField}
                                helperText="How much product have in your stock"
                                margin="normal"
                                variant="filled"
                                size="small"
                                type="number" onChange={onchangeHandler} name="qty"
                            />
                        </Grid>
                        <Grid item xs={12} sm={3}>

                            <TextField
                                label="Solded"
                                variant="filled"
                                id="margin-dense"
                                size="small"
                               
                                className={classes.textField}
                                helperText="How much products solded"
                                margin="normal"
                                type="number" onChange={onchangeHandler} name="sold"
                            />
                        </Grid>

                    </Grid>

                    <TextField
                        id="filled-full-width"
                        label="Enter a image URL,image width or height should be similar example width 500,height 500"
                        style={{ margin: 8 }}
                        placeholder="Image"
                        helperText="Example:- https://www.tasteofhome.com/wp-content/uploads/2020/03/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type="text" onChange={onchangeHandler} name="images"
                        variant="outlined"
                    />


                    <TextField
                        id="outlined-full-width"
                        label="Description"
                        style={{ margin: 8 }}
                        
                        helperText="This should be anything important!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type="text" onChange={onchangeHandler} name="description"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-full-width"
                        label="Content"
                        style={{ margin: 8 }}
                       
                        helperText="Something related with product!"
                        fullWidth
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        type="text" onChange={onchangeHandler} name="content"
                        variant="outlined"
                    />
                    <Button fullWidth type="submit" variant="contained" color="primary">Create Product</Button>

                </Box>

            </div>
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
        </Paper>
    )
}

export default ProductPost
