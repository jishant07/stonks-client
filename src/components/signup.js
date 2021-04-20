import axios from 'axios';
import React, { Component } from 'react';
import DataProvider from '../services/data';
import { Grid, Paper, Button, Link, Typography } from '@material-ui/core';
import Stonks from '../images/Stonks.svg';



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
                this.props.history.push("/")
            }
            else{
                alert(response.data.msg)
            }
        })
    }
    render() { 

        const logoStyle={
            marginBottom: '16px',
            height: '32px'
        }

        const gridStyle={
            background: '#6366F1',
            padding: '48px'
        }

        const paperStyle={
            padding: 20,
            height: '72vh',
            width: '320px',
            padding: '48px',
            margin: '20px auto',
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
            border: 'none',
            placeholder: '#000000'

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
            marginBottom: '32px'
        }

        const linkStyle={
            fontFamily: 'Inter',
            fontWeight: '600',
            color: '#3B82F6',
        }
        return ( 


        <Grid style={gridStyle}>
        <Paper elevation={0} style={paperStyle}>
            <form onSubmit={this.handleSubmit}>
                
                <img src={Stonks} alt="logo" style={logoStyle} />

                <Typography variant="h4" style={headingStyle}>Sign Up</Typography>

                <Typography variant="p" style={titleStyle}>Enter your first name</Typography>
                <input style={inputStyle} type="text" placeholder="eg: Harshad" name="firstname" required onChange={this.handleChange}></input>
                <Typography variant="p" style={titleStyle}>Enter your last name</Typography>
                <input style={inputStyle} type="text" placeholder="eg: Mehta" name="lastname" required onChange={this.handleChange}></input>
                <Typography variant="p" style={titleStyle}>Enter your email</Typography>
                <input style={inputStyle} type="email" placeholder="myemail@example.com" name="email" required onChange={this.handleChange}></input>
                <Typography variant="p" style={titleStyle}>Enter your password</Typography>
                <input style={inputStyle} type="password" placeholder="It's a secret" name="password" required onChange={this.handleChange}></input>
                <button style={submitButton}>Submit</button>
            </form>
            <Typography variant="p" style={titleStyle}>Already have an account?</Typography>
            <Link href="/" style={linkStyle}> Login</Link>

        </Paper>
        </Grid>

        
        );
    }
}
 
export default SignUp;