import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
    state = { data:[] }
    async componentDidMount() {
        axios.post("https://finalyearbackend.herokuapp.com/get_file",{
            "file_location":"https://uploads-jottit.s3.ap-south-1.amazonaws.com/ASIANPAINT.BO.csv"
        }).then(async (res) => {
            await this.setState(res.data)
        })
    }
    render() {
        var mappedData = this.state.data.map(row => {
            return <p>{row.date}</p>
        })
        return ( <div>
            {mappedData}
        </div> );
    }
}
 
export default Test;