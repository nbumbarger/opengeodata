'use strict'
import { set } from 'object-path'

import {
  UPDATE_MENU_OPEN } from '../actions'

export const initialState = {
  menuOpen: false
}

export default (state = initialState, action) => {
  state = Object.assign({}, state)
  switch (action.type) {
    case UPDATE_MENU_OPEN:
      set(state, 'menuOpen', action.data)
      break
  }
  return state
}
