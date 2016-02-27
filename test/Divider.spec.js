
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { theme, Divider } from '../src'

const renderer = TestUtils.createRenderer()

describe('Divider', () => {
  const { scale } = theme
  let tree

  beforeEach(() => {
    renderer.render(<Divider />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('hr')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Divider')
  })

  it('should have default margin top and bottom', () => {
    expect(tree.props.style.marginTop).toEqual(scale[2])
    expect(tree.props.style.marginBottom).toEqual(scale[2])
  })

  context('when compact is true', () => {
    beforeEach(() => {
      renderer.render(<Divider compact />)
      tree = renderer.getRenderOutput()
    })
    it('should have no margin top or bottom', () => {
      expect(tree.props.style.marginTop).toEqual(0)
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Divider style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })
    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

