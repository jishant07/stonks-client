import React, { Component } from 'react';
import axios from 'axios';
import { LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line } from 'recharts';


class LineData extends Component {
    state = { data:[] ,loaded:false }
    async componentDidMount() {
        axios.post("https://finalyearbackend.herokuapp.com/get_file",{
            "file_location":"https://uploads-jottit.s3.ap-south-1.amazonaws.com/aapl.csv"
        }).then(async (res) => {
            console.log(res.data);
            const items = res.data.data.map(item => ({
                Date: item.Date,
                Close: parseFloat(item.Close)
            }));
            this.setState({data: items})
            this.setState({loaded:true})
        })
    }
   
    
    render() {

        if(!this.state.data){
            return <p>loading...</p>
        }
        
       return (
        <div style={{ width: '100%' }}>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={this.state.data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Date" />
            <YAxis dataKey="Close" />
            <Tooltip />
            <Line connectNulls type="monotone" dataKey="Close" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      );
    }
}
 
export default LineData;