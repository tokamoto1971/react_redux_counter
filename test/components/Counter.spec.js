import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import Counter from '../../js/components/Counter'

function setup(count = 0) {
  const actions = {
    onClickPlus: expect.createSpy(),
    onClickMinus: expect.createSpy()
  }
  const component = shallow(
    <Counter count={count} {...actions} />
  )

  return {
    component: component,
    actions: actions,
    buttons: component.find('button'),
    p: component.find('span')
  }
}

describe('Counter component', () => {
  it('should display count', () => {
    const { p } = setup()
    expect(p.text()).toMatch(/^Count: 0/)
  })

  it('first button should call onClickPlus', () => {
    const { buttons, actions } = setup()
    buttons.at(0).simulate('click')
    expect(actions.onClickPlus).toHaveBeenCalled()
  })

  it('second button should call onClickMinus', () => {
    const { buttons, actions } = setup()
    buttons.at(1).simulate('click')
    expect(actions.onClickMinus).toHaveBeenCalled()
  })
})