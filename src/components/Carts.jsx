import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Link } from 'react-router-dom';
import { Box,Button } from '@material-ui/core';
import { useDispatch ,useSelector} from 'react-redux';
import { deleteItem } from '../redux/actions/cartAction';
import getCartAction from '../redux/actions/cartAction'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop:theme.spacing(5),
    marginBottom:"1%"
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: "auto",
  },
  image: {
    width: 150,
    height: 150,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

export default function Carts({c}) {
  const classes = useStyles();
  const dispatch=useDispatch()
  const { token } = useSelector(state => state.Auth)
  const getcart=()=>{
    dispatch(getCartAction(token))
  }
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} style={{color:"blue"}} component={Box} boxShadow={20}>
        <Grid container spacing={1}>
          <Grid item>
            <ButtonBase className={classes.image} component={Link} to={`/detail/${c._id}`} style={{border:"2px solid blue"}}>
              <img className={classes.img} alt="complex" src={c.images} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs >
                <Typography gutterBottom variant="subtitle1" component={Link} to={`/detail/${c._id}`} style={{textDecoration:"none",fontWeight:"bold"}}>
                  {c.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                {c.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                Quantity - {c.qty}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  <Button variant="contained" color="primary" size="small" onClick={

dispatch(deleteItem(token,c._id)),
getcart

                  }>
                  Remove
                  </Button>
                </Typography>
              </Grid>
            </Grid>
            <Grid item >
              {/* <Button style={{fontSize:"15px",fontWeight:"bold"}} color="primary" variant="contained" onClick={()=>dispatch({type:"INCREMENT",payload:c._id})}  >
                +
              </Button> */}
              <Typography variant="h5" color="primary" >Price  {c.price} tk </Typography>
              {/* <Button style={{fontSize:"15px",fontWeight:"bold"}} onClick={()=>dispatch({type:"DECREMENT"})} color="primary" variant="contained">-</Button> */}
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
