import React from 'react';
import { Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import memories from '../../images/memories.jpg';
import useStyles from './styles';



const Posts = () => {
  const classes = useStyles();
  
 

  return (
    
    <Paper className={classes.root}>
    <h1>Stonks</h1>
    <img src={memories} alt="icon" height="300" />
    <Typography variant="h4">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit elementum."
    </Typography>
    <Typography variant="h6">{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ullamcorper nulla aliquam ultrices metus, nibh. Orci vitae dui elementum sapien hac proin risusenim in quam."}
    </Typography>
    <Button component={Link} to="/about" variant="text" color="primary">About Us</Button>
    <Button component={Link} to="/team" variant="text" color="primary">Team</Button>
    <Button component={Link} to="/connect" variant="text" color="primary">Connect</Button>
    

    </Paper>
    
  );
};

export default Posts;