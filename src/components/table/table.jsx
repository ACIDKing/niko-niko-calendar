import React from 'react'
import styled from 'styled-components'

import { SPRINT_WORKING_DAYS } from '../../utils'

const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
`

const Th = styled.th`
  border: 1px solid black;
  width: 8%;
`

const Tr = styled.tr`
  height: 3rem;
`

const TableHeaderRow = () => (
  <Tr>
    <Th>Sprint 1</Th>
    {SPRINT_WORKING_DAYS.map((day, i) => (
      <Th key={`${day}-${i}`}>{day}</Th>
    ))}
  </Tr>
)

const UserRow = () => {}

export const Table = () => (
  <StyledTable>
    <tbody>
      <TableHeaderRow />
    </tbody>
  </StyledTable>
)
