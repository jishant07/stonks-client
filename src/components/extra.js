import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';


function Extra() {
    const history = useHistory();
    const [apple, setApple] = useState([]);
    const [tesla, setTesla] = useState([]);
    const [nvidia, setNvidia] = useState([]);
    const [qcomm, setQcom] = useState([]);
    const [fb, setFb] = useState([]);
    
    useEffect(() => {
        axios.all([
            axios.post("https://finalyearbackend.herokuapp.com/get_file", {
                "file_location":"https://uploads-jottit.s3.ap-south-1.amazonaws.com/aapl.csv"
            }), 
            axios.post("https://finalyearbackend.herokuapp.com/get_file", {
                "file_location":"https://uploads-jottit.s3.ap-south-1.amazonaws.com/tsla.csv"
            }),
            axios.post("https://finalyearbackend.herokuapp.com/get_file", {
                "file_location":"https://uploads-jottit.s3.ap-south-1.amazonaws.com/nvda.csv"
            }),
            axios.post("https://finalyearbackend.herokuapp.com/get_file", {
                "file_location":"https://uploads-jottit.s3.ap-south-1.amazonaws.com/qcom.csv"
            }),
            axios.post("https://finalyearbackend.herokuapp.com/get_file", {
                "file_location":"https://uploads-jottit.s3.ap-south-1.amazonaws.com/fb.csv"
            })
          ])
          .then(axios.spread((data1, data2, data3, data4, data5) => {
            // output of req.
            console.log( data1.data.data, data2, data3, data4, data5)

            setApple(data1.data.data[0]);
            setTesla(data2.data.data[0]);
            setNvidia(data3.data.data[0]);
            setQcom(data4.data.data[0]);
            setFb(data5.data.data[0]);
            
          }));
    })
    
       
        return (
          
        <div>
            <div>
                <h4>Today's Performance</h4>
                <h6>As of {new Date().toLocaleString('default', { month: 'long',day: '2-digit',year: 'numeric' }) + ''}</h6>
            </div>
            <table>
                <tr>
                    <th>Company</th>
                    <th>Date</th>
                    <th>Open</th>
                    <th>High</th>
                    <th>Low</th>
                    <th>Close</th>
                    <th>Volume</th>

                </tr>
                <tr onClick= {()=>history.push("/allcompanies/apple")}>
                    <td>Apple</td>
                    {Object.keys(apple).map(key=><td>{apple[key]}</td>)}
                </tr>
                <tr onClick= {()=>history.push("/allcompanies/tesla")}>
                    <td>Tesla</td>
                    {Object.keys(tesla).map(key=><td>{tesla[key]}</td>)}
                </tr>
                <tr onClick= {()=>history.push("/allcompanies/nvidia")}>
                    <td>Nvidia</td>
                    {Object.keys(nvidia).map(key=><td>{nvidia[key]}</td>)}
                </tr>
                <tr onClick= {()=>history.push("/allcompanies/qualcomm")}>
                    <td>Qualcomm</td>
                    {Object.keys(qcomm).map(key=><td>{qcomm[key]}</td>)}
                </tr>
                <tr onClick= {()=>history.push("/allcompanies/facebook")}>
                    <td>Facebook</td>
                    {Object.keys(fb).map(key=><td>{fb[key]}</td>)}
                </tr>
            </table>
         
        </div>
        );
    }

 
export default Extra;