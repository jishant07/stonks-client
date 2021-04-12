import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader'

class Test extends Component {
    state = { data:[] ,loaded:false }
    async componentDidMount() {
        axios.post("https://finalyearbackend.herokuapp.com/get_file",{
            "file_location":"https://uploads-jottit.s3.ap-south-1.amazonaws.com/aapl.csv"
        }).then(async (res) => {
            await this.setState(res.data)
            console.log(res.data)
            this.setState({loaded:true})
        })
    }
    render() {
        var table = this.state.data.map(row =>{
          return <tr>
            <td>{row.Date}</td>
            <td>{row.Open}</td>
            <td>{row.High}</td>
            <td>{row.Low}</td>
            <td>{row.Close}</td>
            <td>{row.OpenInt}</td>
            <td>{row.Volume}</td>
          </tr>
        })
        return (
          <Loader loaded={this.state.loaded}> 
        <div>
           <table>
            <th>Date</th>
            <th>Open</th>
            <th>High</th>
            <th>Low</th>
            <th>Close</th>
            <th>OpenInt</th>
            <th>Volume</th>
            {table}
           </table> 
        </div>
        </Loader>  );
    }
}
 
export default Test;