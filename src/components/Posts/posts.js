import React from 'react';
import { Button, Paper, Grid, Typography, Container, Avatar, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import doodle from '../../images/doodle.png';
import Stonks from '../../images/Stonks.svg';
import useStyles from './styles';




const Posts = () => {
  const classes = useStyles();
 

  return (
    <Paper className={classes.root} elevation={0}>

   
     <img src={Stonks} alt="logo" className={classes.logo} />
    <img src={doodle} alt="icon" height="320" />
    <Typography variant="h3" className={classes.heading}>
        We predict stock market sentiment
    </Typography>
    <Typography variant="h6" className={classes.subheading}>{"Stocks are hard to predict. Based on news from a company, Stonks predicts whether its stock will rise or not. It achieves this using Natural language processing and time series analysis techniques."}
    </Typography>
    <Button component={Link} to="/about" variant="text"  className={classes.heading}>About Us</Button>
    

    </Container>
    
  );
};

export default Posts;