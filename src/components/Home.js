import React from 'react';
import {Link} from 'react-router-dom';
import { Container, Grow, Grid,Button} from '@material-ui/core';
import Login from "./login";
import Posts from '../components/Posts/posts';
import {withRouter} from 'react-router-dom'

const Home = () => {

  return (
    <Grow in>
      <Container>
        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
          <Grid item xs={12} sm={7}>
            <Posts />
          </Grid>
          <Grid item xs={12} sm={3}>
            <Login/>
            <Button component={Link} to="/signup" variant="text" color="primary">Signup</Button>
          </Grid>
          
        </Grid>
      </Container>
    </Grow>
  );
};

export default withRouter(Home);