import React, {useEffect, useState} from "react";
import {useParams,useHistory} from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Line } from 'recharts';
import axios from "axios";
import {Typography, Box, Container, Divider, List, ListItem} from '@material-ui/core';
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
    // const fnPie = async () => {
    //   let response = await fetch(urlPie)
    //   response = await response.json()
    //   const data = response.data[0]
    //   setPieData(data);
    // }

    // fnPie()

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


        {/* <div>
          <h6>Positive: {( parseFloat(pieData?.pos_percentage|| 0)|| '')}%</h6>
          <h6>Negative: {(parseFloat(pieData?.neg_percentage || 0) ||  '')}%</h6>
          <h6>Neutral: {(parseFloat(pieData?.neu_percentage || 0)|| '')}%</h6>
        </div>
        <div >
          { pieData && <PieChart width={1000} height={400}>  
            <Pie
                dataKey="value"
                data={[{ name: "Positive", value: parseFloat(pieData.pos_percentage) }, 
                { name: "Negative", value: parseFloat(pieData.neg_percentage) },
                {name: "Neutral", value: parseFloat(pieData.neu_percentage)}]}
                cx={500}
                cy={200}
                innerRadius={40}
                outerRadius={80}
                fill="#82ca9d"
            >
                <Cell stroke={"#00ff00"} fill={"#00ff00"}  strokeWidth={1}/>
                <Cell stroke={"#ff0000"} fill={"#ff0000"}  strokeWidth={1}/>
                <Cell stroke={"#0000ff"} fill={"#0000ff"}  strokeWidth={1}/>
            </Pie>
            <Tooltip />
          </PieChart>
          }  
        </div> */}
        
        <Container className={classes.newsContainerStyle}>
               <Typography variant="h6" className={classes.newsHeadingStyle}>Sources</Typography>
               <List className={classes.newsList}>
                  {newsData}
               </List>
              
              
           </Container>

       
        </Container>
        
        <div>
        <h3>Past Performance</h3>
        <ResponsiveContainer width="100%" height={200}>
                <LineChart
                  width={500}
                  height={200}
                  data={ lineData }
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
        <div>
            <table>
            <tr>
                  <th>Date</th>
                  <th>Open</th>
                  <th>High</th>
                  <th>Low</th>
                  <th>Close</th>
                  <th>Volume</th>
                  </tr>
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
          
                return (<tr>
                  <td>{formatDate}</td>
                  <td>{open}</td>
                  <td>{high}</td>
                  <td>{low}</td>
                  <td>{close}</td>
                  <td>{row.volume}</td>
                </tr>)
              })}
            </table>
        </div>
  </Container>
</Container>);
}

export default All;