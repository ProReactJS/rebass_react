
import { config } from '../../src'

const colors = {
  black: '#333',
  // gray: '#eee',
  gray: '#f6f6f6',
  midgray: '#aaa',

  blue: '#0cf',
  green: '#0fc',
  red: '#f05',
  orange: '#fa4',
}

const bold = {
  name: 'Bold',
  fontWeight: 'bold',

  bold: 'bold',

  colors: {
    ...config.colors,
    ...colors,
    primary: colors.midgray,
    secondary: colors.midgray,
    info: colors.blue,
    success: colors.green,
    warning: colors.orange,
    error: colors.red,
  },

  inverted: colors.black,
  borderColor: '#eee',

  fontSizes: [
    64, 48, 32, 24, 16, 13, 13
  ],
  scale: [
    0, 12, 24, 48, 72
  ],

  Toolbar: {
    minHeight: 80,
    color: colors.black,
    backgroundColor: colors.gray
  },

  Button: {
    color: colors.black,
    backgroundColor: colors.blue
  },
  PageHeader: {
    borderWidth: 6
  },
  SectionHeader: {
    borderWidth: 6
  },
  Divider: {
    borderWidth: 6
  },

  Card: {
    backgroundColor: colors.gray
  }
}

export default bold

