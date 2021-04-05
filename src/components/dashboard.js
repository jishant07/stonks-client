import React, { Component } from 'react';
import auth from '../services/auth';

class DashBoard extends Component {
    state = { loggedIn : true }
    render() { 
        return ( <button onClick={() => {
            auth.logout()
            this.props.history.push("/")
        }}>Logout</button> );
    }
}
 
export default DashBoard;