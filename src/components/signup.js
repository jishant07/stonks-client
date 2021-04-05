import axios from 'axios';
import React, { Component } from 'react';
import DataProvider from '../services/data';

class SignUp extends Component {
    state = { firstname:"",lastname:"",email:"",password:"" }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post(DataProvider.baseURL+"/signup",{
            ...this.state
        }).then(response => {
            if(response.data.status === "success")
            {
                alert(response.data.msg)
                DataProvider.cookies.set("authenticated", true, {
                    path: "/",
                    maxAge: 2 * 60 * 60,
                  });
                this.props.history.push("/dashboard")
            }
            else{
                alert(response.data.msg)
            }
        })
    }
    render() { 
        return ( 
        <div>
            <h1>SIGNUP PAGE</h1>
            <form onSubmit={this.handleSubmit}>
                <input name="firstname" required type="text" placeholder="First Name" onChange={this.handleChange}></input>
                <input name="lastname" required type="text" placeholder="Last Name" onChange={this.handleChange}></input>
                <input name="email" required type="email" placeholder="Enter Email" onChange={this.handleChange}></input>
                <input name="password" required type="password" placeholder="Enter Password" onChange={this.handleChange}></input>
                <button>Submit</button>
            </form>
        </div> );
    }
}
 
export default SignUp;