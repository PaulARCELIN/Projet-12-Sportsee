import React from 'react';
import { RadialBarChart, RadialBar, ResponsiveContainer } from 'recharts';
import '../styles/score.css'
import PropTypes from 'prop-types'

/**
 * ScoreGraph component
 * We had an other data (with 100 score) to adjust the real score
 */

function ScoreGraph({scoreData}) {

  
  const data = [
    // here we had the 100 score data
    {
      name: 'transparent',
      score: 100,
      opacity : 0
    },
    {
      name: 'score',
      score: scoreData*100,
      opacity : 1
    },
    
  ];

    return <div className="score-graph small">
        <h2>Score</h2>
        
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart startAngle={140} endAngle={500} cx="50%" cy="50%" innerRadius={70} outerRadius={120} barSize={10} data={data}>
          <text
						dy="45%"
						dx="50%"
						textAnchor="middle"
						fill='#282D30'
						style={{ fontSize: "2.2vw" }}
					>
						{data[1].score}%
					</text>
          <text
						dy="55%"
						dx="50%"
						textAnchor="middle"
						fill='#74798C'
					>
						de votre
					</text>
					<text
						dy="65%"
						dx="50%"
						textAnchor="middle"
						fill='#74798C'
					>
						objectif
					</text>
            <RadialBar cornerRadius='50%' fill='#E60000' dataKey="score" />
          </RadialBarChart>
      </ResponsiveContainer>
    </div>
}

export default ScoreGraph

ScoreGraph.propTypes = {
  sessionData: PropTypes.number
}