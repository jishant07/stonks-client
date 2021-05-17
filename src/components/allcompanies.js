import React, {useEffect, useState} from "react";
import {useParams,useHistory} from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Line } from 'recharts';
import axios from "axios";
import {Typography, Grid, Container, Divider, List, ListItem, Table, TableContainer, TableRow, TableCell} from '@material-ui/core';
import Stonks from '../images/Stonks.svg';
import Back from '../images/Back.svg';
import useStyles from './allcompstyle';
import createTypography from "@material-ui/core/styles/createTypography";


function All() {
  let { companyName} = useParams();
  const history = useHistory();
  const [pieData, setPieData] = useState(null)
  const [newsData, setNewsData] = useState(null)
  const [lineData, setLineData] = useState([])
  const [tableData, setTableData] = useState([])
  const urlPie = "https://finalyearbackend.herokuapp.com/get_sentiments/" + companyName;
  

  useEffect(() => {
    const fnPie = async () => {
      let response = await fetch(urlPie)
      response = await response.json()
      const data = response.data[0]
      setPieData(data);
    }

    fnPie()

    const fnNews = () => {
      axios.post("https://finalyearbackend.herokuapp.com/read_firebase",{
        "company":companyName
    }).then(async (res) => {
        const data=res.data.data[0].data.articles.map((news)=><h3>{news.title}</h3> )
        setNewsData(data);
      
    })
    }
       
    fnNews()

    const fnTable = () =>{
      axios.get("https://finalyearbackend.herokuapp.com/get_finance_data/" + companyName)
      .then(async (res) => {
            const responseData=res.data.company_data[0].data;
            
            const formatChart=responseData.slice(0,25);
            const formatTable=responseData.splice(0,50);
            
            const items = formatChart.map(item => (
              {  
                Date:new Date(item.date * 1000).toLocaleString('en-IN', {
                  month: '2-digit',day: '2-digit',year: 'numeric'}).slice(0,12) ,
                Close: parseFloat(item.close)
            }
          ));
           setLineData(items) ;
           
           setTableData(formatTable) ;

        
        })
    }

    fnTable()
   
}, [])

const classes = useStyles();


  return (
    <Container maxWidth='xl' className={classes.mainContainer}>
          <img src={Stonks} alt="logo" className={classes.logo} />


      <Container maxWidth='xl' className={classes.root}>

      <div direction="row" className={classes.sectionTitle}>
        <img onClick={() => {history.push("/Market")}} src={Back} alt="back" className={classes.sectionTitle} />
        <Typography style={{textTransform: 'capitalize'}} className={classes.sectionTitle}>{companyName}</Typography>
      </div>

      <div className={classes.sectionSubTitle}>
          <Typography variant="h5" >Todays Sentiments</Typography>
          <Typography variant="subtitle1">As of {new Date().toLocaleString('default', { month: 'long',day: '2-digit',year: 'numeric' }) + ''}</Typography>
      </div>

      <Container className={classes.itemContainer}>

      <Container className={classes.PieContainerStyle}>
        <Grid container spacing={5} direction='row' className={classes.PieGridStyle}>
          <Grid item>
                      <Typography variant='h6' className={classes.PieTitleStyle}>Positive</Typography>
                      <Typography variant='h5' className={classes.PiePositiveNumber}>{( parseFloat(pieData?.pos_percentage|| 0)|| '')}% </Typography>
          </Grid>
          <Grid item>
                      <Typography variant='h6' className={classes.PieTitleStyle}>Negative</Typography>
                      <Typography variant='h5' className={classes.PieNegativeNumber}>{(parseFloat(pieData?.neg_percentage || 0) ||  '')}% </Typography>
          </Grid>
          <Grid item>
                      <Typography variant='h6' className={classes.PieTitleStyle}>Neutral</Typography>
                      <Typography variant='h5' className={classes.PieNeutralNumber}>{(parseFloat(pieData?.neu_percentage || 0)|| '')}% </Typography>
          </Grid>


        </Grid>


        <div >
          { pieData && <PieChart width={1000} height={400}>  
            <Pie
                dataKey="value"
                data={[{ name: "Positive", value: parseFloat(pieData.pos_percentage) }, 
                { name: "Negative", value: parseFloat(pieData.neg_percentage) },
                {name: "Neutral", value: parseFloat(pieData.neu_percentage)}]}
                cx={180}
                cy={100}
                innerRadius={60}
                outerRadius={100}
                fill="#82ca9d"
            >
                <Cell stroke={"#4ADE80"} fill={"#4ADE80"}  strokeWidth={1}/>
                <Cell stroke={"#DE4A4A"} fill={"#DE4A4A"}  strokeWidth={1}/>
                <Cell stroke={"#BCD2EE"} fill={"#BCD2EE"}  strokeWidth={1}/>
            </Pie>
            <Tooltip  className={classes.PieTooltipStyle}/>
          </PieChart>
          }  
        </div>

        </Container>


        
        <Container className={classes.newsContainerStyle}>
               <Typography variant="h6" className={classes.newsHeadingStyle}>Sources</Typography>
               <List className={classes.newsList}>
                  {newsData}
               </List>
              
              
           </Container>

       
        </Container>
        
        <div>
        <Typography variant="h5"  className={classes.sectionSubTitle}>Past Performance</Typography>
        <ResponsiveContainer width="98%" height={400} className={classes.chartContainer}>
                <LineChart

                  data={ lineData }
                  margin={{
                    top: 40,
                    right: 80,
                    left: 0,
                    bottom: 20,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Date" stroke="#ffffff" />
                  <YAxis dataKey="Close" stroke="#ffffff" />
                  <Tooltip />
                  <Line connectNulls type="monotone" dataKey="Close" stroke="#546DA3" fill="#546DA3" strokeWidth="2px" />
                </LineChart>
              </ResponsiveContainer>
        </div>
        <TableContainer className={classes.tableMain}>
            <Table>
              <TableRow>
                  <TableCell className={classes.tableHead} align="left">Date</TableCell>
                  <TableCell className={classes.tableHead} align="left">Open</TableCell>
                  <TableCell className={classes.tableHead} align="left">High</TableCell>
                  <TableCell className={classes.tableHead} align="left">Low</TableCell>
                  <TableCell className={classes.tableHead} align="left">Close</TableCell>
                  <TableCell className={classes.tableHead} align="left">Volume</TableCell>
                </TableRow>
              {tableData.map(row =>{
              
              const unixTimestamp=row.date;
              var date = unixTimestamp * 1000;
              const dateObject = new Date(date);
              const formatDate=dateObject.toLocaleString('en-IN', {
                month: '2-digit',day: '2-digit',year: 'numeric'}).slice(0,12);

                const Open=parseFloat(row.open);
                const open=Open.toFixed(2);

                const High=parseFloat(row.high);
                const high=High.toFixed(2);

                const Low=parseFloat(row.low);
                const low=Low.toFixed(2);

                const Close=parseFloat(row.close);
                const close=Close.toFixed(2);
          
                return (<TableRow>
                  <TableCell className={classes.tableData}>{formatDate}</TableCell>
                  <TableCell className={classes.tableData}>{open}</TableCell>
                  <TableCell className={classes.tableData}>{high}</TableCell>
                  <TableCell className={classes.tableData}>{low}</TableCell>
                  <TableCell className={classes.tableData}>{close}</TableCell>
                  <TableCell className={classes.tableData}>{row.volume}</TableCell>
                </TableRow>)
              })}
            </Table>
        </TableContainer>
  </Container>
</Container>);
}

export default All;