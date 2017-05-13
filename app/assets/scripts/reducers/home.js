'use strict'

import { set } from 'object-path'

import {
  REQUEST_DATA,
  RECEIVE_DATA,
  UPDATE_MENU_OPEN
} from '../actions'

export const initialState = {
  data: {},
  isFetching: false,
  menuOpen: false
}

export default (state = initialState, action) => {
  state = Object.assign({}, state)
  switch (action.type) {
    case REQUEST_DATA:
      set(state, 'isFetching', true)
      break
    case RECEIVE_DATA:
      set(state, 'isFetching', false)
      set(state, 'data', action.data)
      break
    case UPDATE_MENU_OPEN:
      set(state, 'menuOpen', action.data)
      break
  }
  return state
}
