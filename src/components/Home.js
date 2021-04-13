import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Container, Grow, Grid,Button} from '@material-ui/core';
import Login from "../components/Login/login";
import Posts from '../components/Posts/posts';
import {withRouter} from 'react-router-dom'

const Home = () => {

  const bgStyle={
    backgroundColor: '#6366F1' ,
    margin: '0' ,
    width: '100%',
    height: '100vh'
  }

  return (
    <Grow in>
      <Container style={bgStyle} maxWidth="xl">
        <Grid container justify="space-between" alignSelf="stretch" spacing={3} textAlign="center">
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Login/>
            <Button component={Link} to="/signup" variant="text" color="primary">Signup</Button>
          </Grid>
          
        </Grid>
      </Container>
    </Grow>
  );
};

export default withRouter(Home);