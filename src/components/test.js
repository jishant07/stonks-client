import React, { Component } from 'react';
import axios from 'axios';
import Loader from 'react-loader'

class Test extends Component {
    state = { data:[] ,loaded:false}
    async componentDidMount() {
        axios.post("https://finalyearbackend.herokuapp.com/get_file",{
            "file_location":"https://uploads-jottit.s3.ap-south-1.amazonaws.com/aapl.csv"
        }).then(async (res) => {
            await this.setState(res.data)
            console.log(this.state.data)
            this.setState({loaded:true})
        })
    }
    render() {
        var i = 0;
        var mappedData = this.state.data.map(row => {
            return (
                <div key={i++}>
                    <p>{row.Date}</p> <p>{row.Open}</p>
                </div>
            )
        })
        return ( 
            <Loader loaded={this.state.loaded}>
        <div>
            {mappedData}
        </div></Loader> );
    }
}
 
export default Test;