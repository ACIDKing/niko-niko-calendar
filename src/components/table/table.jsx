import React, { useState } from 'react'
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
`

const Tr = styled.tr`
  height: 3rem;
  text-align: center;
`

const Td = styled.td`
  text-align: center;
  padding: 0.1rem;
  border: 1px solid black;
`

const StyledSelect = styled(Select)`
  font-size: 1.2rem;
`

const TableHeaderRow = ({ number }) => (
  <Tr>
    <Th>Sprint {number}</Th>
    {SPRINT_WORKING_DAYS.map((day, i) => (
      <Th key={`${day}-${i}`}>{day}</Th>
    ))}
  </Tr>
)

const TeamMemberRow = ({ member }) => {
  return (
    <Tr>
      <Td>{member.name}</Td>
      {SPRINT_WORKING_DAYS.map((day, i) => (
        <TeamMemberCell key={`${day}-${i}`} />
      ))}
    </Tr>
  )
}

const TeamMemberCell = () => {
  const [selectedOption, setSelectedOption] = useState(null)

  return (
    <Td>
      <StyledSelect
        value={selectedOption}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        options={EMOJI_OPTIONS}
        isSearchable={false}
        placeholder={null}
        onChange={selectedOption => setSelectedOption(selectedOption)}
      />
    </Td>
  )
}
export const Table = ({ sprint, sprint: { team } }) => (
  <StyledTable>
    <tbody>
      <TableHeaderRow number={sprint.number} />
      {team.map(member => {
        return <TeamMemberRow key={member.id} member={member} />
      })}
    </tbody>
  </StyledTable>
)
