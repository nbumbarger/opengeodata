'use strict'
import { defaultsDeep } from 'lodash'
/*
 * App configuration.
 */

var configurations = require('./config/*.js', {mode: 'hash'})
var config = configurations.local || {}

if (process.env.ENV === 'staging') {
  defaultsDeep(config, configurations.staging)
}
defaultsDeep(config, configurations.production)

// The require doesn't play well with es6 imports. It creates an internal
// 'default' property. Export that.
export default config.default
