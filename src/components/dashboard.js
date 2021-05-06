import React, { Component } from 'react';
import auth from '../services/auth';
import {withRouter} from 'react-router-dom'
import { Button, Container, Typography } from '@material-ui/core';



class DashBoard extends Component {
    state = { loggedIn : true }
    render() { 

        const buttonStyle={
            color: '#ffffff',
            background: '#DE4A4A',
            height: '40px',
            width: '120px',
            marginTop: 'auto',
            fontFamily: 'Inter',
            fontWeight: 'bold'
        }

        const textStyle={
            color: '#ffffff',
            fontFamily: 'Inter',
            fontSize: '24px',
            marginBottom: '16px',
            marginTop: '16px'
        }
        
        return ( 
        
        

        <Container>
            <Typography style={textStyle}>Log Out?</Typography>
        <Button style={buttonStyle}  onClick={() => {
            auth.logout()
            this.props.history.push("/")
        }}>Logout</Button> 
        </Container>
        );
    }
}
 
export default withRouter( DashBoard);