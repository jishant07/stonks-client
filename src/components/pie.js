import React, { useState, useEffect } from 'react';
import { PieChart, Pie,  Cell,  Tooltip } from 'recharts';
import { Container, Grid, Typography} from '@material-ui/core';


function PieSentiments() {

    const [positiveAverage, setPositiveAverage] = useState(null);
    const [negativeAverage, setNegativeAverage] = useState(null);
    const [neutralAverage, setNeutralAverage] = useState(null);

    // useEffect(() => {
    //     const urls = ["https://finalyearbackend.herokuapp.com/get_sentiments/apple", "https://finalyearbackend.herokuapp.com/get_sentiments/tesla", "https://finalyearbackend.herokuapp.com/get_sentiments/qualcomm", "https://finalyearbackend.herokuapp.com/get_sentiments/facebook", "https://finalyearbackend.herokuapp.com/get_sentiments/nvidia"]

    //     Promise.all(urls.map(url => fetch(url)))
    //         .then(resp => Promise.all(resp.map(r => r.json())))
    //         .then(result => {
    //             // ...
    //             console.log(result)
    //             let positiveTotal = 0;
    //             let negativeTotal = 0;
    //             let neutralTotal = 0;
    //             let numberOfItems = 0;
    //             const data = result.map(item => {
    //                 const arr = item.data;
    //                 arr.forEach(a => {
    //                     positiveTotal += a.pos_percentage;
    //                     negativeTotal += a.neg_percentage;
    //                     neutralTotal += a.neu_percentage;
    //                     numberOfItems++;
    //                 })
    //             })

    //             const positiveAverage = (positiveTotal / numberOfItems)* 100;
    //             const negativeAverage = (negativeTotal / numberOfItems)* 100;
    //             const neutralAverage = (neutralTotal / numberOfItems);
    //             console.log(positiveAverage, negativeAverage, neutralAverage);
    //             setPositiveAverage(positiveAverage);
    //             setNegativeAverage(negativeAverage);
    //             setNeutralAverage(neutralAverage)
    //         });
    // }, [])


    const data01 = [
        { name: 'Positive', value: 400 }, { name: 'Negative', value: 300 },
        { name: 'Neutral', value: 200 },
      ];

    const containerStyle={
        background: '#2A3752',
        borderRadius: '4px',
        color: '#ffffff',
        height: '360px',
        width: '368px',
        marginRight: '32px',
      
        padding: '0px'



    }

    const boxStyle={
        
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

    const numberStyle={
        fontSize: '20px',
        lineHeight: '24px',
        fontFamily: 'Inter',
        fontWeight: 'bold',
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
            {<PieChart width={368} height={240}>
            {/* {negativeAverage && positiveAverage && neutralAverage && <PieChart width={1000} height={400}> */}

            <Pie
                dataKey="value"
                data={data01}
                cx={180}
                cy={100}
                innerRadius={60}
                outerRadius={100}
                fill="#82ca9d"
            >
            <Cell stroke={"##4ADE80"} fill={"#4ADE80"}  strokeWidth={1}/>
            <Cell stroke={"#DE4A4A"} fill={"#DE4A4A"}  strokeWidth={1}/>
            <Cell stroke={"#BCD2EE"} fill={"#BCD2EE"}  strokeWidth={1}/>
            </Pie>
            <Tooltip wrapperStyle={tooltipStyle} />
            </PieChart>}
        </Container>

    );
}

export default PieSentiments;
