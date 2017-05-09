'use strict'
import { set } from 'object-path'

import {
  UPDATE_DATA,
  UPDATE_DATA_LOADING,
  UPDATE_MENU_OPEN
} from '../actions'

export const initialState = {
  data: {},
  dataLoading: false,
  menuOpen: false
}

export default (state = initialState, action) => {
  state = Object.assign({}, state)
  switch (action.type) {
    case UPDATE_DATA:
      set(state, 'data', action.data)
      break
    case UPDATE_DATA_LOADING:
      set(state, 'dataLoading', action.data)
      break
    case UPDATE_MENU_OPEN:
      set(state, 'menuOpen', action.data)
      break
  }
  return state
}
