import React from 'react'
import Search from './search'
import {shallow} from 'enzyme'
import {shallowToJson} from 'enzyme-to-json'

test('Search snapshot test', () => {
  const component = shallow(<Search />)
  const tree = shallowToJson
  expect(tree).toMatchSnapshot()
})