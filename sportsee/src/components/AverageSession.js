import React from "react";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, YAxis } from 'recharts';
import '../styles/averageSessions.css'

/* const data = [
  {
    name: 'L',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'M',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
]; */

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip-average'>
        <p> {`${payload[0].value} min`}</p>
      </div>
    )
  }
  return null
}

function AverageSession({sessionData}) {

  const data = sessionData

    return (
        <div className="average-session-graph small">
            <h2>Durée moyenne des sessions</h2>
            <ResponsiveContainer width='100%' height='100%'>
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                    top: 100,
                    right: 30,
                    left: 30,
                    bottom: 5,
                    }}
                >
                    <XAxis dataKey="day" axisLine={false} tickLine={false} padding={{ left: 0, right: 0 }} stroke='#FFFFFF' />                   
                    <Tooltip content={<CustomTooltip />}/>
                    <YAxis hide domain={['dataMin - 10', 'dataMax']}/>
                    <Line type="natural" dataKey="sessionLength" stroke="#FFFFFF"  dot={false} strokeWidth={2}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
      );
}

export default AverageSession