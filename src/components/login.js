import React, { Component } from 'react';
import DataProvider from '../services/data';
import axios from 'axios';

class Login extends Component {
    state = { email:"",password:"" }

    handleSubmit = async (e) => {
        e.preventDefault();
        axios.post(DataProvider.baseURL+"/login",{
            "email":this.state.email,
            "password":this.state.password
        }).then(res => {
            console.log(res.data)
            if(res.data.status === "success")
            {
                DataProvider.cookies.set("authenticated", true, {
                    path: "/",
                    maxAge: 2 * 60 * 60,
                  });
                alert(res.data.msg)
                this.props.history.push("/dashboard")
            }
            else if(res.data.status === "fail"){
                this.setState({email:"",password:""})
                alert(res.data.msg)
            }
        })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() { 
        return ( 
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="email" placeholder="Enter email" name="email" required onChange={this.handleChange}></input>
                    <input type="password" placeholder="Enter Password" name="password" required onChange={this.handleChange}></input>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
 
export default Login;