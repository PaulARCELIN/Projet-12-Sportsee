import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import '../styles/score.css'

/* const data = [
  {
    name: 'score',
    score: 12,
  },
]; */



function ScoreGraph({scoreData}) {

  const data = [
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
						dy="50%"
						dx="50%"
						textAnchor="middle"
						fill='#282D30'
						style={{ fontSize: "2.2vw" }}
					>
						{data[1].score}%
					</text>
          <text
						dy="60%"
						dx="50%"
						textAnchor="middle"
						fill='#74798C'
					>
						de votre
					</text>
					<text
						dy="70%"
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