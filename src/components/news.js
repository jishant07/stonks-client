import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader'
import { Container, Typography, List } from '@material-ui/core';

class News extends Component {
    state = { data:[] ,loaded:false }
    async componentDidMount() {
        axios.post("https://finalyearbackend.herokuapp.com/read_firebase",{
            "company":"headlines"
        }).then(async (res) => {
            console.log(res.data);
            const data=res.data.data[0].data.articles
            console.log(data)
            this.setState({data})
            this.setState({loaded:true})
        })
    }
    render() {

        const containerStyle={
            background: '#2A3752',
            padding: '16px',
            borderRadius: '4px',
            color: '#ffffff',
            maxHeight: '360px',
            overflow: 'auto',
            width: '560px'
        }

        const headingStyle={
            fontFamily: 'Inter',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '20px',
            opacity: '0.5',
            marginBottom: '16px'
        }



        
        return (
           <Container style={containerStyle}>
               <Typography variant="h6" style={headingStyle} >Sources</Typography>
               {this.state.data.map(item=>{
                   return <List>
                       {item.title}
                   </List>
               })}
           </Container>
        
            );
    }
}
 
export default News;