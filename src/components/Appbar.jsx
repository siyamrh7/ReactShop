import React ,{useState}from 'react'
import { Link } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import AddToPhotosIcon from '@material-ui/icons/AddToPhotos';
import jwt from 'jsonwebtoken'
import { AppBar, Toolbar, Button,TextField, IconButton, Box } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useEffect } from 'react';
const Appbar = () => {
    const logout = () => {
        localStorage.removeItem("token")
        window.location.href=("/")
    }
    const [search,setSearch]=useState("")
    const [user,setUser]=useState({})

    const { token} = useSelector(state => state.Auth)
    const dispatch=useDispatch()
  useEffect(()=>{
      dispatch({type:"SEARCH",payload:search}) 
  },[search])
  useEffect(()=>{
    if(token){
    jwt.verify(token, 'SIYAM', function (err, decoded) {
      if (err) throw err;
      setUser(decoded.user)
      });}
  },[token])
if(token===null){
    return(
        <AppBar position="static" color="primary" className="nav">
        <Toolbar component={Box}
            justifyContent="space-around" boxShadow={10} >
           <IconButton color="inherit" component={Link} to="/" style={{marginLeft:"1rem",marginRight:"1rem"}}><HomeIcon/> BanShop </IconButton>
            {/* <Button color="inherit" component={Link} to="/">Home</Button> */}
            <TextField variant="outlined" fullWidth
                    margin="normal" size="small" 
                    onChange={event=>setSearch(event.target.value)}
                    id="outlined-basic" placeholder="Search"
                    style={{
                        border: '1px solid #e2e2e1',
                        overflow: 'hidden',
                        borderRadius: 4,
                        backgroundColor: '#F5F5F5',
                        // transition: theme.transitions.create(['border-color', 'box-shadow']),
                        '&:hover': {
                          backgroundColor: '#F5F5F5',
                        },
                        '&$focused': {
                          backgroundColor: '#F5F5F5',
                        //   boxShadow:  ,
                        //   borderColor: theme.palette.primary.main,
                        },
                      }}
                    />

                    <Button className="search"style={{position:"absolute",right:"17.9%",top:"29%"}} variant="contained" color="primary" >Search</Button>
            <Button color="inherit" onClick={()=>dispatch({type:"REGISTER"})} style={{marginLeft:"2rem",marginRight:"1rem"}}>register</Button><Button color="inherit" onClick={()=>dispatch({type:"LOGIN"})}style={{marginLeft:"1rem",marginRight:"1rem"}}>login</Button>
            
            
        
            
        </Toolbar>
    </AppBar>
    )
}else if(user.role==="admin"){
    return (

        <AppBar position="static" color="primary" className="nav">
            <Toolbar component={Box}
                justifyContent="space-around" boxShadow={10}>
               
                <IconButton color="inherit" component={Link} to="/" style={{marginLeft:"1rem",marginRight:"1rem"}}><HomeIcon/> BanShop </IconButton>
                    
                    {/* <Button color="inherit" component={Link} to="/">Home</Button> */}
                    <TextField variant="outlined" fullWidth
                    margin="normal" size="small" 
                    onChange={event=>setSearch(event.target.value)}
                    id="outlined-basic" placeholder="Search"
                    style={{
                        border: '1px solid #e2e2e1',
                        overflow: 'hidden',
                        borderRadius: 4,
                        backgroundColor: '#F5F5F5',
                        // transition: theme.transitions.create(['border-color', 'box-shadow']),
                        '&:hover': {
                          backgroundColor: '#F5F5F5',
                        },
                        '&$focused': {
                          backgroundColor: '#F5F5F5',
                        //   boxShadow:  ,
                        //   borderColor: theme.palette.primary.main,
                        },
                      }}
                    />
                     <Button className="search" style={{position:"absolute",right:"25.5%",top:"29%"}} variant="contained" color="primary" >Search</Button>
                <Button color="inherit" component={Link} to="/product/create" startIcon={<AddToPhotosIcon/>} style={{marginLeft:"2rem",marginRight:"1rem"}}>Product</Button>
                <Button color="inherit" component={Link} to="/order" style={{marginLeft:"1rem",marginRight:"1rem"}}>Orders</Button>
                <Button onClick={logout} color="inherit" size="small" startIcon={<ExitToAppIcon />} style={{marginLeft:"1rem",marginRight:"1rem"}} >
                    
                    logout</Button>

            </Toolbar>
        </AppBar>

    )}
    return(
      <AppBar position="static" color="primary" className="nav">
            <Toolbar component={Box}
                justifyContent="space-around" boxShadow={10}>
               
                <IconButton color="inherit" component={Link} to="/" style={{marginLeft:"1rem",marginRight:"1rem"}}><HomeIcon/> BanShop </IconButton>
                    
                    {/* <Button color="inherit" component={Link} to="/">Home</Button> */}
                    <TextField variant="outlined" fullWidth
                    margin="normal" size="small" 
                    onChange={event=>setSearch(event.target.value)}
                    id="outlined-basic" placeholder="Search"
                    style={{
                        border: '1px solid #e2e2e1',
                        overflow: 'hidden',
                        borderRadius: 4,
                        backgroundColor: '#F5F5F5',
                        // transition: theme.transitions.create(['border-color', 'box-shadow']),
                        '&:hover': {
                          backgroundColor: '#F5F5F5',
                        },
                        '&$focused': {
                          backgroundColor: '#F5F5F5',
                        //   boxShadow:  ,
                        //   borderColor: theme.palette.primary.main,
                        },
                      }}
                    />
                     <Button className="search" style={{position:"absolute",right:"23.15%",top:"29%"}} variant="contained" color="primary" >Search</Button>
                <Button color="inherit"  component={Link} to="/cart" style={{marginLeft:"1rem",marginRight:"1rem"}} startIcon={<ShoppingCartIcon />}>Cart</Button>
                <Button color="inherit"  component={Link} to="/history" style={{marginLeft:"1rem",marginRight:"1rem"}} >History</Button>
                <Button onClick={logout} color="inherit" size="small" startIcon={<ExitToAppIcon />} style={{marginLeft:"1rem",marginRight:"1rem"}} >
                    
                    logout</Button>

            </Toolbar>
        </AppBar>
    )
}

export default Appbar
