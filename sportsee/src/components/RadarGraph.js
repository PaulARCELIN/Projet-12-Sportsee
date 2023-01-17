import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import '../styles/radargraph.css'
import PropTypes from 'prop-types'

/**
 * RadarGraph component
 * Object "translation" to set the names of each kind in french
 * "formatPerformanceData" to format the dats with the translation
 */


//Object to translate "kind" with the french names
const translation = {
  intensity: 'Intensité',
  speed: 'Vitesse',
  strength: 'Force',
  endurance: 'Endurance',
  energy: 'Energie',
  cardio: 'Cardio',
}

//To get formated data 
function formatPerformanceData (dataOriginal) {
  const { data, kind } = dataOriginal
  const newData = []
  
  data.forEach(perf => {
    newData.push({
      value: perf.value,
      kind: translation[kind[perf.kind]]
    })
  })
  newData.reverse()
  return newData
}

//Component 
function RadarGraph({perfData}) {
    
    const data = formatPerformanceData(perfData)
    
    return <div className="radar-graph small">
      <div className="radar-container">
        <ResponsiveContainer width='100%' aspect={1}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="kind" stroke='#FFFFFF' fontSize={14} tickLine={false} />
            <Radar dataKey="value" stroke='#E60000' fill="#E60000" fillOpacity={0.7} />
            </RadarChart>   
        </ResponsiveContainer>
      </div>
    </div>
}

export default RadarGraph

RadarGraph.propTypes = {
  sessionData: PropTypes.object
}