import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import useStyles from './extraStyle';
import {Tabs, Tab, Typography, Box, Container, Table, TableContainer, TableHead, TableRow, TableCell} from '@material-ui/core';
import Companies from '../images/Companies.svg';


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
    const classes = useStyles();
       
        return (
            

          
        <Container style={{marginTop: '32px'}}>
            <div direction="row" className={classes.sectionTitle}>
                <img src={Companies} alt="logo" className={classes.sectionTitle} />
                <Typography className={classes.sectionTitle}>All Companies</Typography>
            </div>

            <div className={classes.sectionSubTitle}>
                <Typography variant="h5" >Todays Sentiments</Typography>
                <Typography variant="subtitle1">As of {new Date().toLocaleString('default', { month: 'long',day: '2-digit',year: 'numeric' }) + ''}</Typography>
            </div>
                <TableContainer  className={classes.tableMain}>
                    <Table>
                            <TableRow>
                                <TableCell className={classes.tableHead} align="left">Company</TableCell>
                                <TableCell className={classes.tableHead} align="right">Date</TableCell>
                                <TableCell className={classes.tableHead} align="right">Open</TableCell>
                                <TableCell className={classes.tableHead} align="right">High</TableCell>
                                <TableCell className={classes.tableHead} align="right">Low</TableCell>
                                <TableCell className={classes.tableHead} align="right">Close</TableCell>
                                <TableCell className={classes.tableHead} align="right">Volume</TableCell>
                                <TableCell className={classes.tableHead} align="right">Open Int</TableCell>

                            </TableRow>
                                <TableRow onClick= {()=>history.push("/allcompanies/apple")}>
                                    <TableCell className={classes.tableData} align="left">Apple</TableCell>
                                    {Object.keys(apple).map(key=><TableCell className={classes.tableData} align="right">{apple[key]}</TableCell>)}
                                </TableRow>
                                <TableRow onClick= {()=>history.push("/allcompanies/tesla")}>
                                    <TableCell className={classes.tableData} align="left">Tesla</TableCell>
                                    {Object.keys(tesla).map(key=><TableCell className={classes.tableData} align="right">{tesla[key]}</TableCell>)}
                                </TableRow>
                                <TableRow onClick= {()=>history.push("/allcompanies/nvidia")}>
                                    <TableCell className={classes.tableData} align="left">Nvidia</TableCell>
                                    {Object.keys(nvidia).map(key=><TableCell className={classes.tableData} align="right">{nvidia[key]}</TableCell>)}
                                </TableRow>
                                <TableRow onClick= {()=>history.push("/allcompanies/qualcomm")}>
                                    <TableCell className={classes.tableData} align="left">Qualcomm</TableCell>
                                    {Object.keys(qcomm).map(key=><TableCell className={classes.tableData} align="right">{qcomm[key]}</TableCell>)}
                                </TableRow>
                                <TableRow onClick= {()=>history.push("/allcompanies/facebook")}>
                                    <TableCell className={classes.tableData} align="left"> Facebook</TableCell>
                                    {Object.keys(fb).map(key=><TableCell className={classes.tableData} align="right">{fb[key]}</TableCell>)}
                                </TableRow>
                    </Table>
                </TableContainer>
         
        </Container>
        );
    }

 
export default Extra;