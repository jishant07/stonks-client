import React, { useState, useEffect } from 'react';
import { PieChart, Pie,  Cell,  Tooltip } from 'recharts';
import { Container, Grid, Typography} from '@material-ui/core';
const axios = require("axios");

function PieSentiments() {

    const [positiveAverage, setPositiveAverage] = useState(null);
    const [negativeAverage, setNegativeAverage] = useState(null);
    const [neutralAverage, setNeutralAverage] = useState(null);

    useEffect(() => {
        var apple = "https://finalyearbackend.herokuapp.com/get_sentiments/apple";
        var tesla = "https://finalyearbackend.herokuapp.com/get_sentiments/tesla";
        var qcom = "https://finalyearbackend.herokuapp.com/get_sentiments/qualcomm";
        var nvidia = "https://finalyearbackend.herokuapp.com/get_sentiments/nvidia";
        var facebook = "https://finalyearbackend.herokuapp.com/get_sentiments/facebook";
        var headlines ="https://finalyearbackend.herokuapp.com/get_sentiments/headlines";

    axios
    .all([
        axios.get(apple),
        axios.get(tesla),
        axios.get(qcom),
        axios.get(nvidia),
        axios.get(facebook),
        axios.get(headlines),
    ])
    .then(
    axios.spread((...results) => {
      var neu_avg = 0;
      var neg_avg = 0;
      var pos_avg = 0;
      results.forEach((result) => {
        neu_avg = neu_avg + parseInt(result.data.data[0].neu_percentage);
        neg_avg = neg_avg + parseInt(result.data.data[0].neg_percentage);
        pos_avg = pos_avg + parseInt(result.data.data[0].pos_percentage);
      });
      console.log(parseInt(neu_avg / results.length));
      console.log(parseInt(neg_avg / results.length));
      console.log(parseInt(pos_avg / results.length));

      setPositiveAverage(parseInt(pos_avg / results.length));
      setNegativeAverage(parseInt(neg_avg / results.length));
      setNeutralAverage(parseInt(neu_avg / results.length))
    })
  );
    }, [])

    const containerStyle={
        background: '#2A3752',
        borderRadius: '4px',
        color: '#ffffff',
        height: '360px',
        width: '368px',
        marginRight: '32px',   
        padding: '0px'
    }

    const gridStyle={
        margin: '8px 0px',
        width: '368px',
        padding: '0px'
    }

    const titleStyle={
        fontSize: '18px',
        lineHeight: '20px',
        fontFamily: 'Inter',
        color: '#F1F5F9',
        marginBottom: '4px'
    }

   
    const positiveNumber={
        color:'#4ADE80',
        fontSize: '20px',
        lineHeight: '24px',
        fontFamily: 'Inter',
        fontWeight: 'bold',
    }

    const negativeNumber={
        color:'#DE4A4A',
        fontSize: '20px',
        lineHeight: '24px',
        fontFamily: 'Inter',
        fontWeight: 'bold',
    }

    const neutralNumber={
        color:'#BCD2EE',
        fontSize: '20px',
        lineHeight: '24px',
        fontFamily: 'Inter',
        fontWeight: 'bold',
    }

    const tooltipStyle={
        background: '#1E293B',
        fomtFamily: 'Inter',
        fontWeight: '600',    
    }

    return (

        <Container style={containerStyle}>
            <Grid container spacing={5} direction='row' style={gridStyle}>
                <Grid item>
                    <Typography variant='h6' style={titleStyle}>Positive</Typography>
                    <Typography variant='h5' style={positiveNumber}>{JSON.stringify(positiveAverage|| 80 )}% </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6' style={titleStyle}>Negative</Typography>
                    <Typography variant='h5'style={negativeNumber}>{JSON.stringify(negativeAverage|| 40)}% </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h6' style={titleStyle}>Neutral</Typography>
                    <Typography variant='h5'style={neutralNumber}>{JSON.stringify(neutralAverage|| 32 )}% </Typography>
                </Grid>
            </Grid>
            
            {negativeAverage && positiveAverage && neutralAverage && <PieChart width={1000} height={400}>

            <Pie
                dataKey="value"
                data={[{ name: "Positive", value: positiveAverage , fill:"#00ff00" }, { name: "Negative", value: negativeAverage }, {name: "Neutral", value: neutralAverage}]}
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
            <Tooltip wrapperStyle={tooltipStyle} />
            </PieChart>}
        </Container>

    );
}

export default PieSentiments;
