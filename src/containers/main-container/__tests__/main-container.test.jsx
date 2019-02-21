import * as React from 'react'
import { shallow, mount } from 'enzyme'
import { Fab } from '@material-ui/core'

import { MainContainer } from '../main-container'

describe('main-container.jsx', () => {
  it('should render <MainContainer>', () => {
    const wrapper = shallow(<MainContainer />)
    expect(wrapper).toExist()
  })

  it('should not be available for clicking if the name is empty', () => {
    const wrapper = mount(<MainContainer />)
    const addButton = wrapper.find(Fab)

    expect(addButton.prop('disabled')).toBeTruthy()
  })
})
