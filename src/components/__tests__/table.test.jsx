import * as React from 'react'
import { shallow } from 'enzyme'

import { Table, TeamMemberCell, StyledSelect } from '../table'

describe('table.jsx', () => {
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

  it('should render <Table/>', () => {
    const table = shallow(<Table sprint={sprint} />)
    expect(table).toExist()
  })

  it('should render <Table/>', () => {
    const table = shallow(<Table sprint={sprint} />)
    expect(table).toExist()
  })

  it('should call handler on select change event', () => {
    const handler = jest.fn()

    const select = shallow(<TeamMemberCell day="day1" member={sprint.team[0]} onTeamMemberUpdate={handler} />).find(
      StyledSelect,
    )

    select.simulate('change', { target: { value: 2 } })
    expect(handler).toHaveBeenCalled()
  })
})
