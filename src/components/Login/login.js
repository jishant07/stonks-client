import React, { Component } from 'react';
import DataProvider from '../../services/data';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import { Grid, Paper, Button, Link, Typography } from '@material-ui/core';


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
                console.log(this.props)
                this.props.history.push("/Market")
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

        const paperStyle={
            padding: 20,
            height: '80vh',
            width: '72%',
            padding: '48px',
            margin: '20px',
            background: '#1E293B'

        }

        const headingStyle={
            color: '#F1F5F9',
            fontWeight: '600',
            fontFamily: 'Inter',
            marginBottom: '16px'
        }

        const inputStyle={
            display: 'block' ,
            width: '80%',
            padding: '12px 16px',
            marginBottom: '16px',
            marginTop: '8px',
            background: '#475569',
            color: '#fff',
            borderRadius: '8px',
            border: 'none'

        }

        const titleStyle={
            fontFamily: 'Inter',
            
            color: '#fff',
        }

        const submitButton={
            color: '#fff',
            background: '#4ADE80',
            width: '50%',
            padding: '16px 24px',
            fontFamily: 'Inter',
            marginBottom: '32px',
            borderRadius: '8px',
            border: 'none',
            fontWeight: 'bold'
        }

        const linkStyle={
            fontFamily: 'Inter',
            fontWeight: '600',
            color: '#85B3FF',
        }

        return ( 
            <Grid>
            <Paper elevation={0} style={paperStyle}>
                <form onSubmit={this.handleSubmit}>
                    <Typography variant="h4" style={headingStyle}>Log In</Typography>
                    <Typography variant="p" style={titleStyle}>Enter your email</Typography>
                    <input style={inputStyle} type="email" placeholder="myemail@example.com" name="email" required onChange={this.handleChange}></input>
                    <Typography variant="p" style={titleStyle}>Enter your password</Typography>
                    <input style={inputStyle} type="password" placeholder="It's a secret" name="password" required onChange={this.handleChange}></input>
                    <button style={submitButton}>Submit</button>
                </form>
                <Typography variant="p" style={titleStyle}>Don't have an account?</Typography>
                <Link href="/signup" style={linkStyle}> Signup</Link>

            </Paper>
            </Grid>
        );
    }
}
 
export default withRouter(Login);