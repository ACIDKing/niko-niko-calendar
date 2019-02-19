import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Select from 'react-select'

import { SPRINT_WORKING_DAYS, EMOJI_OPTIONS } from '../../utils'

const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;
  word-break: break-word;
  table-layout: fixed;
`

const Th = styled.th`
  border: 1px solid black;
  background-color: lightgray;
`

const Tr = styled.tr`
  height: 3rem;
  text-align: center;
`

const Td = styled.td`
  padding: 0.1rem;
  border: 1px solid black;
`

const StyledSelect = styled(Select)`
  font-size: 2rem;
`

const TeamMemberCell = ({ sprint, setCurrentSprint, member, day }) => {
  const [selectedOption, setSelectedOption] = useState(
    member[day] ? EMOJI_OPTIONS.filter(option => option.value === member[day]) : {},
  )

  useEffect(() => {
    setCurrentSprint({
      ...sprint,
      team: sprint.team.map(m =>
        m.id === member.id && selectedOption.value !== '' ? { ...m, [day]: selectedOption.value } : m,
      ),
    })
  }, [selectedOption.value])

  return (
    <Td>
      <StyledSelect
        value={selectedOption}
        options={EMOJI_OPTIONS}
        isSearchable={false}
        placeholder={null}
        onChange={selectedOption => setSelectedOption(selectedOption)}
      />
    </Td>
  )
}

export const Table = ({ sprint, setCurrentSprint, sprint: { team } }) => (
  <StyledTable>
    <tbody>
      <Tr>
        <Th>Sprint {sprint.number}</Th>
        {SPRINT_WORKING_DAYS.map((day, index) => (
          <Th key={`${day}-${index}`}>{day}</Th>
        ))}
      </Tr>
      {team.map(member => {
        return (
          <Tr key={member.id}>
            <Td>{member.name}</Td>
            {SPRINT_WORKING_DAYS.map((day, index) => (
              <TeamMemberCell
                key={day + index}
                day={day + index}
                sprint={sprint}
                setCurrentSprint={setCurrentSprint}
                member={member}
              />
            ))}
          </Tr>
        )
      })}
    </tbody>
  </StyledTable>
)
