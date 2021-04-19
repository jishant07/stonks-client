import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { LineChart, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Line } from 'recharts';
import axios from "axios";

function All() {
  let { companyName} = useParams();
  const [pieData, setPieData] = useState(null)
  const [newsData, setNewsData] = useState(null)
  const [lineData, setLineData] = useState([])
  const urlPie = "https://finalyearbackend.herokuapp.com/get_sentiments/" + companyName;
  const urlTable={
    apple:"aapl",
    tesla:"tsla",
    facebook:"fb",
    nvidia:"nvda",
    qualcomm:"qcom",
  }
  
  
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
      axios.post("https://finalyearbackend.herokuapp.com/get_file",{
            "file_location":"https://uploads-jottit.s3.ap-south-1.amazonaws.com/" + urlTable[companyName] +".csv"
        }).then(async (res) => {
            const tableItems=res.data.data
            const items = res.data.data.map(item => ({
                Date: item.Date,
                Open: item.Open,
                High: item.High,
                Low: item.Low,
                Volume: item.Volume,
                OpenInt: item.OpenInt,
                Close: parseFloat(item.Close)
            }));
           setLineData(items) ; 
        })
    }

    fnTable()
   
}, [])

  return (<div>
  <h3>{companyName}</h3>
  
  <div>
    <h4>Today's Performance</h4>
    <h6>As of {new Date().toLocaleString('default', { month: 'long',day: '2-digit',year: 'numeric' }) + ''}</h6>
  </div>
  <div>
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
  </div>
  
  <div>
    <h4>Sources</h4>
    {newsData}
  </div>
  
  <div>
  <h3>Past Performance</h3>
  <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={lineData}
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
            <th>OpenInt</th>
            <th>Volume</th>
            </tr>
        {lineData.map(row =>{
           return (<tr>
            <td>{row.Date}</td>
            <td>{row.Open}</td>
            <td>{row.High}</td>
            <td>{row.Low}</td>
            <td>{row.Close}</td>
            <td>{row.OpenInt}</td>
            <td>{row.Volume}</td>
          </tr>)
        })}
      </table>
  </div>
</div>);
}

export default All;