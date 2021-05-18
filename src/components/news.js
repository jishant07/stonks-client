import React, { Component } from 'react';
import axios from 'axios';
import { Container, Typography, List, Divider } from '@material-ui/core';

class News extends Component {

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
            height: '360px',
            overflow: 'auto',
            width: '640px'
        }

        const headingStyle={
            fontFamily: 'Inter',
            fontWeight: '600',
            fontSize: '16px',
            lineHeight: '20px',
            opacity: '0.75',
            marginBottom: '16px'
        }

        const dividerStyle={
            background: '#546DA3',
            marginTop: '8px'
        }

        return (
           <Container style={containerStyle}>
               <Typography variant="h6" style={headingStyle} >Sources</Typography>
               {this.state.data.map(item=>{
                   return <List>
                       {item.title}
                       <Divider  light style={dividerStyle} />
                   </List>
               })}
           </Container>
        
            );
    }
}
 
export default News;