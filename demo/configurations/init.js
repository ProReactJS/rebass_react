
import Rebass, { config } from '../../src'

const componentConfigs = {}

Object.keys(Rebass).forEach(key => {
  componentConfigs[key] = {}
})

const init = {
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  letterSpacing: 'inherit',
  color: 'inherit',
  backgroundColor: 'inherit',
  ...config,
  ...componentConfigs
}

export default init
