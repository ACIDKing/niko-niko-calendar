import * as React from 'react'
import { shallow } from 'enzyme'

import { LineChart } from '../line-chart'

describe('line-chart.jsx', () => {
  const sprint = {
    id: 'bestIDever',
    number: 0,
    team: [
      { id: 1, name: 'Tom', day0: 1, day1: 3 },
      { id: 2, name: 'Jerry', day0: 1, day2: 2 },
      { id: 3, name: 'Spike', day0: 1, day2: 1 },
    ],
    isActive: true,
  }

  it('should render <LineChart>', () => {
    const wrapper = shallow(<LineChart sprint={sprint} />)
    expect(wrapper).toExist()
  })
})
