import React from "react";
import {Container, Typography} from '@material-ui/core';


const About = () => {

    const sectionTitle={
        color: '#fff',
        fontSize: '32px',
        fontFamily: 'Inter',
        fontWeight: '600',
    }

    const pStyle={
        color: '#fff',
        fontSize: '16px',
        fontFamily: 'Inter',
        fontWeight: '400',
        width: '50%',
        marginTop: '16px'
    }


    return (

<Container style={{padding: '16px'}}>
    <Typography style={sectionTitle}>About Us</Typography>
    <Typography style={pStyle}>We the students of Atharva College of Engineering proudly present to you, Stonks! - A Stock Market Predictor. Stonks is a website that uses a combination of time series analysis and news sentiment analysis to accurately predict future changes in stock prices. With the power of machine learning, we bring to you one of the most reliable stock predicting services. So wise up and invest smartly. </Typography>
</Container>
    );
}

export default About;