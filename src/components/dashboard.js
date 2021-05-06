import React, { Component } from 'react';
import auth from '../services/auth';
import {withRouter} from 'react-router-dom'


class DashBoard extends Component {
    state = { loggedIn : true }
    render() { 
        return ( <button onClick={() => {
            auth.logout()
            this.props.history.push("/")
        }}>Exit</button> );
    }
}
 
export default withRouter( DashBoard);