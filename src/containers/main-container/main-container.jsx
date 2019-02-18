import React, { useState } from 'react'
import { Flex } from '@rebass/grid'
import uniqid from 'uniqid'

import { Table, LineChart } from '../../components'

const fakeSprints = [
  {
    id: uniqid(),
    number: 1,
    team: [{ id: uniqid(), name: 'Tom' }, { id: uniqid(), name: 'Jerry' }, { id: uniqid(), name: 'Spike' }],
  },
]
export const MainContainer = () => {
  const [sprints, setSprints] = useState(fakeSprints)
  const [currentSprint, setCurrentSprint] = useState(fakeSprints[0])

  return (
    <Flex justifyContent="center">
      <Flex flexDirection="column" width={3 / 4}>
        <Table sprint={currentSprint} setCurrentSprint={setCurrentSprint} />
        <LineChart currentSprint={currentSprint} />
      </Flex>
    </Flex>
  )
}
