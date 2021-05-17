import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import useStyles from './extraStyle';
import { Typography, Container, Table, TableContainer, TableRow, TableCell} from '@material-ui/core';
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
            axios.get("https://finalyearbackend.herokuapp.com/get_finance_data/apple"), 
            axios.get("https://finalyearbackend.herokuapp.com/get_finance_data/tesla"),
            axios.get("https://finalyearbackend.herokuapp.com/get_finance_data/nvidia"),
            axios.get("https://finalyearbackend.herokuapp.com/get_finance_data/qualcomm"),
            axios.get("https://finalyearbackend.herokuapp.com/get_finance_data/facebook"),
            
          ])
          .then(axios.spread((data1, data2, data3, data4, data5) => {
            // output of req.
            // console.log( data1, data2, data3, data4, data5);
            
            const items1 =[data1.data.company_data[0].data[0]].map(item => ({
                Open: item.open.toFixed(2),
                High: item.high.toFixed(2),
                Low: item.low.toFixed(2),
                Close: parseFloat(item.close).toFixed(2),
                Volume: item.volume.toFixed(2),
            }));

            const items2 =[data2.data.company_data[0].data[0]].map(item => ({
                Open: item.open.toFixed(2),
                High: item.high.toFixed(2),
                Low: item.low.toFixed(2),
                Close: parseFloat(item.close).toFixed(2),
                Volume: item.volume.toFixed(2),
            }));

            const items3 =[data3.data.company_data[0].data[0]].map(item => ({
                Open: item.open.toFixed(2),
                High: item.high.toFixed(2),
                Low: item.low.toFixed(2),
                Close: parseFloat(item.close).toFixed(2),
                Volume: item.volume.toFixed(2),
            }));

            const items4 =[data4.data.company_data[0].data[0]].map(item => ({
                Open: item.open.toFixed(2),
                High: item.high.toFixed(2),
                Low: item.low.toFixed(2),
                Close: parseFloat(item.close).toFixed(2),
                Volume: item.volume.toFixed(2),
            }));

            const items5 =[data5.data.company_data[0].data[0]].map(item => ({
                Open: item.open.toFixed(2),
                High: item.high.toFixed(2),
                Low: item.low.toFixed(2),
                Close: parseFloat(item.close).toFixed(2),
                Volume: item.volume.toFixed(2),
            }));

            setApple(items1[0]);
            setTesla(items2[0]);
            setNvidia(items3[0]);
            setQcom(items4[0]);
            setFb(items5[0]);
            
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
                                <TableCell className={classes.tableHead} align="right">Open</TableCell>
                                <TableCell className={classes.tableHead} align="right">High</TableCell>
                                <TableCell className={classes.tableHead} align="right">Low</TableCell>
                                <TableCell className={classes.tableHead} align="right">Close</TableCell>
                                <TableCell className={classes.tableHead} align="right">Volume</TableCell>

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