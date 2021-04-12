import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader'

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
        
        return (
           <div>
               <h1>Check</h1>
               {this.state.data.map(item=>{
                   return <div>
                       {item.content}
                   </div>
               })}
           </div>
        
            );
    }
}
 
export default News;