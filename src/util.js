// replace with get?
export const idx = (props, obj) => {
  const keys = typeof props === 'string' ? props.split('.') : props
  return keys.reduce((a, b) => (a && a[b]) ? a[b] : null, obj)
}

export const px = n => typeof n === 'number' ? n + 'px' : n

export const color = props => (n = 'blue', i = 5) =>
  idx([ 'colors', baseKey(n) ], props.theme)
  ? props.theme.colors[baseKey(n)][i] : n

export const darken = n => `rgba(0, 0, 0, ${n})`

export const baseKey = n => n.split('.')[0]

export const caps = props => props.caps ? ({
  textTransform: 'uppercase',
  letterSpacing: '.2em'
}) : {}

export const align = props => {
  if (props.left) return 'left'
  if (props.center) return 'center'
  if (props.right) return 'right'
  if (props.justify) return 'justify'
  return null
}

export default {
  idx,
  px,
  color,
  darken,
  baseKey,
  caps,
  align
}
