import React from 'react'
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

export const StyledSelect = styled(Select)`
  font-size: 1.4rem;
`

export const TeamMemberCell = ({ onTeamMemberUpdate, member, day }) => {
  return (
    <Td>
      <StyledSelect
        value={member[day] ? EMOJI_OPTIONS.filter(option => option.value === member[day]) : {}}
        options={EMOJI_OPTIONS}
        isSearchable={false}
        placeholder={null}
        onChange={selectedOption => onTeamMemberUpdate(member.id, { [day]: selectedOption.value })}
      />
    </Td>
  )
}

export const Table = ({ sprint, onTeamMemberUpdate }) => (
  <StyledTable>
    <tbody>
      <Tr>
        <Th>Sprint #{sprint.number + 1}</Th>
        {SPRINT_WORKING_DAYS.map((day, index) => (
          <Th key={`${day}-${index}`}>{day}</Th>
        ))}
      </Tr>
      {sprint.team.map(member => {
        return (
          <Tr key={member.id}>
            <Td>{member.name}</Td>
            {SPRINT_WORKING_DAYS.map((day, index) => (
              <TeamMemberCell
                key={day + index}
                day={day + index}
                sprint={sprint}
                onTeamMemberUpdate={onTeamMemberUpdate}
                member={member}
              />
            ))}
          </Tr>
        )
      })}
    </tbody>
  </StyledTable>
)
