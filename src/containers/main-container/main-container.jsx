import React from 'react'
import { Flex, Box } from '@rebass/grid'

import { Table, LineChart } from '../../components'

export const MainContainer = () => (
  <Flex flexDirection="column">
    <Table />
    <LineChart />
  </Flex>
)
