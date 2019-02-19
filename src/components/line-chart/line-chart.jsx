import React from 'react'
import { LineChart as LC, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Flex } from '@rebass/grid'
import { SPRINT_WORKING_DAYS, getAvgTeamMood, MoodLabelMap } from '../../utils'

const CustomTooltip = ({ payload, label, active }) => {
  if (active && payload[0]) {
    return (
      <div className="custom-tooltip">
        <p className="label">
          <b>Average mood on {`${label}`}:</b>
        </p>
        <Flex fontSize="2rem" justifyContent="center">{`<< ${MoodLabelMap[payload[0].payload.avg]} >>`}</Flex>
      </div>
    )
  }

  return null
}

export const LineChart = ({ currentSprint }) => {
  const data = SPRINT_WORKING_DAYS.map((day, index) => ({
    avg: getAvgTeamMood(day + index, currentSprint.team),
    day,
  }))

  return (
    <>
      <ResponsiveContainer width="100%" aspect={4.0}>
        <LC
          data={data}
          margin={{
            top: 55,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="day" axisLine={false} />

          <YAxis dataKey="a" domain={[1, 3]} interval={1} axisLine={false} />

          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line
            connectNulls
            name="Team average mood"
            type="monotone"
            dataKey="avg"
            stroke="#8884d8"
            activeDot={{ r: 9 }}
            isAnimationActive={false}
          />
        </LC>
      </ResponsiveContainer>
      <h2>
        <code>{JSON.stringify(currentSprint)}</code>
      </h2>
    </>
  )
}
