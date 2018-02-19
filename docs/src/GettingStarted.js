import React from 'react'
import Markdown from './Markdown'
import src from 'raw-loader!../GETTING_STARTED.md'
import Pagination from './Pagination'

const GettingStarted = props => (
  <div>
    <Markdown children={src} />
    <Pagination
      next={{
        href: '/props',
        name: 'Props'
      }}
    />
  </div>
)

export default GettingStarted
