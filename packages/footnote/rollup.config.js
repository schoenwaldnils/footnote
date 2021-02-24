import config from '../../rollup.config'

import pkg from './package.json'

export default {
  ...config(pkg),
  external: [...config(pkg).external, '@schoenwald/logo'],
}
