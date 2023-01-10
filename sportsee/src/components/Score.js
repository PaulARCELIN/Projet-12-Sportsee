import React from 'react';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';
import '../styles/score.css'

/* const data = [
  {
    name: 'score',
    score: 12,
  },
]; */

const style = {
  top: '50%',
  right: 0,
  transform: 'translate(0, -50%)',
  lineHeight: '24px',
};

function ScoreGraph({scoreData}) {

  const data = [
    {
      name: 'score',
      score: scoreData*100,
    },
  ];

  console.log(data) 

    return <div className="score-graph small">
        <h2>Score</h2>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart startAngle={140} endAngle={500} cx="50%" cy="50%" innerRadius={70} outerRadius={120} barSize={10} data={data}>
            <RadialBar cornerRadius='50%' fill='#E60000' dataKey="score" />
            <Legend />
          </RadialBarChart>
      </ResponsiveContainer>
    </div>
}

export default ScoreGraph