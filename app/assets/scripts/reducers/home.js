'use strict'

import {

} from '../actions'

export const initialState = {

}

export default (state = initialState, action) => {
  state = Object.assign({}, state)
  return state
}
