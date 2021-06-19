import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useDispatch,useSelector } from 'react-redux';
import { Button, Typography } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(5)
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: "auto",
    },
    image: {
        [theme.breakpoints.up('sm')]: {
            width: 495,
            height: 495,
        },
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function Details({ product }) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const { token } = useSelector(state => state.Auth)

    const cartadder=()=>{
        if(!token){dispatch({type:"REGISTER"})}
        dispatch({ type: "ADD_CART", id: product._id })
     }
    return (
        <div className={classes.root} key={product._id}>
            <Paper className={classes.paper}>
                <Grid container spacing={2}>
                    <Grid item>
                        <ButtonBase className={classes.image}>
                            <img className={classes.img} alt="complex" src={product.images} />
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={2}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h4">
                                    {product.title}
                                </Typography>
                                <Typography variant="subtitle1" gutterBottom>
                                    <span style={{ fontWeight: "bold" }}>
                                        Description:
                                    </span> <br />
                                    {product.description}
                                </Typography>
                                <br />
                                
                                <Typography variant="subtitle1" gutterBottom>
                                    <span style={{ fontWeight: "bold" }}>
                                        Content:
                                    </span> <br />
                                    {product.content}
                                </Typography>
                                <br />
                                
                                <Typography variant="subtitle1" color="primary">
                                    <span style={{ fontWeight: "bold", color: "primary" }}>
                                        Sold -
                                    </span>
                                    <span style={{ fontWeight: "bold", color: "black", marginLeft: "5px" }}>
                                        {product.sold}
                                    </span>
                                </Typography>

                                <Typography variant="subtitle1" color="primary">
                                    <span style={{ fontWeight: "bold", color: "primary" }}>
                                        InStock -
                                    </span>
                                    <span style={{ fontWeight: "bold", color: "black", marginLeft: "5px" }}>
                                        {product.qty}
                                    </span>
                                </Typography>
                            </Grid>

                            <Grid item>
                                <Button fullWidth variant="contained" size="large" color="primary" onClick={cartadder} startIcon={<ShoppingCartRoundedIcon />}>
                                    ADD CART
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography variant="h6">Price {product.price}tk</Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}
