import React from 'react';
import { Container,Grid} from '@material-ui/core';
import Login from "../components/Login/login";
import Posts from '../components/Posts/posts';
import {withRouter} from 'react-router-dom'

const Home = () => {

  const bgStyle={
    backgroundColor: '#6366F1' ,
    margin: '0' ,
    width: '100vw',
    height: '100vh'
  }

  return (
      <Container style={bgStyle} maxWidth="xl">
        <Grid container justify="space-between" alignSelf="stretch" spacing={3} textAlign="center">
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={5}>
            <Login/>
          </Grid>
          
        </Grid>
      </Container>
  );
};

export default withRouter(Home);