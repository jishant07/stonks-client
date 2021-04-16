import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

function PieSentiments() {

    const [positiveAverage, setPositiveAverage] = useState(null);
    const [negativeAverage, setNegativeAverage] = useState(null);
    const [neutralAverage, setNeutralAverage] = useState(null);

    useEffect(() => {
        const urls = ["https://finalyearbackend.herokuapp.com/get_sentiments/apple", "https://finalyearbackend.herokuapp.com/get_sentiments/tesla", "https://finalyearbackend.herokuapp.com/get_sentiments/qualcomm", "https://finalyearbackend.herokuapp.com/get_sentiments/facebook", "https://finalyearbackend.herokuapp.com/get_sentiments/nvidia"]

        Promise.all(urls.map(url => fetch(url)))
            .then(resp => Promise.all(resp.map(r => r.json())))
            .then(result => {
                // ...
                console.log(result)
                let positiveTotal = 0;
                let negativeTotal = 0;
                let neutralTotal = 0;
                let numberOfItems = 0;
                const data = result.map(item => {
                    const arr = item.data;
                    arr.forEach(a => {
                        positiveTotal += a.pos_percentage;
                        negativeTotal += a.neg_percentage;
                        neutralTotal += a.neu_percentage;
                        numberOfItems++;
                    })
                })

                const positiveAverage = (positiveTotal / numberOfItems)* 100;
                const negativeAverage = (negativeTotal / numberOfItems)* 100;
                const neutralAverage = (neutralTotal / numberOfItems);
                console.log(positiveAverage, negativeAverage, neutralAverage);
                setPositiveAverage(positiveAverage);
                setNegativeAverage(negativeAverage);
                setNeutralAverage(neutralAverage)
            });
    }, [])





    return (

        <div >
            <h6>Positive: {JSON.stringify(positiveAverage|| '' )}</h6>
            <h6>Negative: {JSON.stringify(negativeAverage|| '' )}</h6>
            <h6>Neutral: {JSON.stringify(neutralAverage|| '' )}</h6>
            {negativeAverage && positiveAverage && neutralAverage && <PieChart width={1000} height={400}>

<Pie
    dataKey="value"
    data={[{ name: "Positive", value: positiveAverage , fill:"#00ff00" }, { name: "Negative", value: negativeAverage }, {name: "Neutral", value: neutralAverage}]}
    cx={500}
    cy={200}
    innerRadius={40}
    outerRadius={80}
    fill="#82ca9d"
>
<Cell stroke={"#0000ff"} fill={"#0000ff"}  strokeWidth={1}/>
<Cell stroke={"#ff0000"} fill={"#ff0000"}  strokeWidth={1}/>
<Cell stroke={"#00ff00"} fill={"#00ff00"}  strokeWidth={1}/>
</Pie>
<Tooltip />
</PieChart>}
        </div>

    );
}

export default PieSentiments;
