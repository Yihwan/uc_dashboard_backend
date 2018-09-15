import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, LabelList } from 'recharts';

const data = [
  { name: "Operator", "Julia": 10, "Jacqueline": 2, "Joe": 2, total: 14 },
];

const HorizontalBar = () => {

  return(
    <div className="card horizontal-bar">
      <div className="title">TITLE</div>
      <BarChart
        width={730}
        height={100}
        data={data}
        layout="vertical"
        >
        <Tooltip /> 

        <Bar dataKey="Julia" stackId="a" fill="#37ABF8">
          <LabelList datakey="Julia" position="center"/>
        </Bar>
        <Bar dataKey="Jacqueline" stackId="a" fill="#85BD59"></Bar>
        <Bar dataKey="Joe" stackId="a" fill="#DF4846"></Bar>
        <XAxis type="number" hide />
        <YAxis type="category" dataKey="name" hide/>
      </BarChart>
    </div>
  );
};

export default HorizontalBar;
