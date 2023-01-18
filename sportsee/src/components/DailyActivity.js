import React from "react";
import { BarChart, Bar,  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import '../styles/dailyActivity.css'
import PropTypes from 'prop-types'

/**
 * DailyActivity graph
 * Props sessionData is an array 
 */

// To custom de Tooltip, see Rechart doc
const CustomTooltip = ({ active, payload }) => {
  
  if (active && payload && payload.length) {
    return (
      <div className='custom-tooltip-activity'>
        <p> {`${payload[0].value}kg`}</p>
        <p> {`${payload[1].value}Kcal`}</p>
      </div>
    )
  }
  return null
}

//The component
function DailyActivity({sessionData}) {

  const data = sessionData

    return <div className="daily-activity-container">
      <h2>Activité quotidienne</h2>
        <ResponsiveContainer width="100%" aspect={3.8}>
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis />
            <YAxis orientation="right" axisLine={false} tickCount="3" dataKey="kilogram" domain={/* ['dataMin - 1', 'dataMax + 1'] */['dataMin - 1', 'auto']} />
            <YAxis orientation="left" axisLine={false} tickCount="3" dataKey="calories" type="number" domain={['dataMin - 50', 'dataMax + 50']} yAxisId="1" hide/>
            <Tooltip separator="" content={<CustomTooltip />} />
            <Legend verticalAlign="top" align="right" iconType={"circle"} height="50px" formatter={(value) => <span className='text-color'>{value}</span>}/>
            <Bar name='Poids (kg)' dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} barSize={10}/>
            <Bar name='Calories brûlées (kCal)' dataKey="calories" yAxisId="1" fill="#E60000" radius={[10, 10, 0, 0]} barSize={10}/>
            </BarChart>
        </ResponsiveContainer>
    </div>
}

export default DailyActivity

DailyActivity.propTypes = {
  sessionData: PropTypes.array
}