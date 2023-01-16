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

//I add a "formatedDay" propertie to each object to set the ticks on the chart
function formatedSessionsData(originalData) {
  const ticks = ['L','M','M','J','V','S','D']
  originalData.forEach(element => {
    let x = element.day
    Object.defineProperty(element, 'formatedDay', {
      value: ticks[x-1],
      writable: true
    })  
  });
  return originalData
}

function AverageSession({sessionData}) {

  const data = formatedSessionsData(sessionData)
  
    return (
        <div className="average-session-graph small">
            <h2 className="average-session-title">Durée moyenne des sessions</h2>
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
                    <XAxis interval="preserveStartEnd" dataKey="formatedDay" axisLine={false} tickLine={false} padding={{ left: 0, right: 0 }} stroke='#FFFFFF' opacity={0.5} />                   
                    <Tooltip content={<CustomTooltip />}/>
                    <YAxis hide domain={['dataMin - 10', 'dataMax']}/>
                    <Line type="natural" dataKey="sessionLength" stroke="#FFFFFF"  dot={false} strokeWidth={2}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
      );
}

export default AverageSession