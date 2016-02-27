
import React from 'react'
import rcp from 'react-component-permutations'
import { Divider, Text, theme } from '../../src'

const blacklist = [
  'Banner',
  'Block',
  'Card',
  'Container',
  'Divider',
  'Drawer',
  'Dropdown',
  'DropdownMenu',
  'Space'
]

const propsString = (obj) => {
  let str = ''
  Object.keys(obj).forEach(key => {
    const propType = typeof obj[key]
    if (propType === 'number' || propType === 'boolean') {
      str += `${key}={${obj[key]}} `
    } else if (propType === 'object') {
      str += `${key}={${JSON.stringify(obj[key])}}`
    } else {
      str += `${key}='${obj[key]}' `
    }
  })
  return str
}

const Permutations = ({ name, Component, raw, ...props }, { rebass }) => {
  const type = name === 'Input' ? ['text'] : [
    'default',
    'info',
  ]

  const config = { ...theme, ...rebass }

  const permutations = rcp(raw, {
    options: [
      [
        { label: 'One', value: 'One' },
        { label: 'Two', value: 'Two' },
        { label: 'Three', value: 'Three' },
      ]
    ],
    img: ['http://lorempixel.com/96/96/cats'],
    src: ['http://lorempixel.com/96/96/cats'],
    backgroundImage: ['https://d262ilb51hltx0.cloudfront.net/max/2000/1*DZwdGMaeu-rvTroJYui6Uw.jpeg'],
    minHeight: ['30vh'],
    width: [256, 320],
    size: [], // Prevent multiple Heading permutations
    title: [name + ' Title'],
    description: ['Description for ' + name],
    label: [name],
    rounded: [true],
    // rounded: [true, 'left', false, 'right'],
    links: [
      [
        { href: '#!', children: 'Jxnblk' },
        { href: '#!', children: 'Rebass' },
        { href: '#!', children: name }
      ]
    ],
    // backgroundColor: [
    //   null,
    //   config.colors.red
    // ],
    // Block component
    margin: [32],
    padding: [32],
    border: [false],
    borderTop: [false],
    borderRight: [false],
    borderBottom: [false],
    borderLeft: [true, false],
    open: [true] // DropdownMenu
  })

  if (blacklist.indexOf(name) > -1) {
    return <div />
  }

  if (!permutations || permutations.length < 2) {
    return <div />
  }

  return (
    <div className='Permutations'>
      <Text small children='Variations' />
      <div style={{
          position: 'relative',
          marginLeft: -8,
          marginRight: -8,
          marginBottom: 16
        }}>
        {permutations &&
          <div>
            {permutations.map((p, i) => (
              <Component {...p}
                key={i}
                style={{ margin: 8 }}
                title={`<${name} ${propsString(p)} />`}
                name={name}
                children={name} />
            ))}
          </div>
        }
      </div>
    </div>
  )
}

export default Permutations

