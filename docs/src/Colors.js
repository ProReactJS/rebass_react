import React from 'react'
import {
  Flex,
  Box,
  Text,
  Link,
  Pre,
  colors
} from 'rebass'
import Section from './Section'

const keys = Object.keys(colors)
  .filter(key => !/black|white|base|[0-9]$/.test(key))
const ten = Array.from({ length: 10 }).map((n, i) => i)

const Card = props => (
  <Box
    w={[ 1/3, 1/3, 1/4, 1/7 ]}
    p={2}>
    <Box
      px={3}
      py={[ 4, 4, 5 ]}
      bg={props.value}
    />
    <Flex
      justify='space-between'
      w={1}>
      {ten.map(n => (
        <Box
          key={n}
          w={1/10}
          flex='1 1 auto'
          py={2}
          bg={colors[props.name + n]}
        />
      ))}
    </Flex>
    <Pre f={0}>
      {props.name} {props.value}
    </Pre>
  </Box>
)

const Colors = props => (
  <Section name='Colors'>
    <Text>
      Rebass includes a default color palette generated by
      {' '}
      <Link href='http://palx.jxnblk.com'>
        Palx
      </Link>,
      which includes 12 hues, grays, and luminance-scaled variations of each hue for nuanced UI color design.
    </Text>
    <Flex
      wrap
      mx={-2}>
      {keys.map(key => (
        <Card
          key={key}
          name={key}
          value={colors[key]}
        />
      ))}
    </Flex>
  </Section>
)

export default Colors
