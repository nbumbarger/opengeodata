'use strict'
import { combineReducers } from 'redux'

import home from './home'

export const reducers = {
  home
}

export default combineReducers(Object.assign({}, reducers, {
}))
