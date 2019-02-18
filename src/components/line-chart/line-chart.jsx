import React from 'react'
import { LineChart as LC, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

import { SPRINT_WORKING_DAYS } from '../../utils'

export const LineChart = ({ currentSprint }) => {
  const data = SPRINT_WORKING_DAYS.map((day, index) => ({ day, avg: Math.random() * 1000 }))

  return (
    <>
      <ResponsiveContainer width="100%" aspect={2.0}>
        <LC
          data={data}
          margin={{
            top: 55,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="avg" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LC>
      </ResponsiveContainer>
      <h2>
        <code>{JSON.stringify(currentSprint)}</code>
      </h2>
    </>
  )
}
