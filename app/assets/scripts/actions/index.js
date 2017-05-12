'use strict'

import _ from 'lodash'

import config from '../config'

export const UPDATE_DATA = 'UPDATE_DATA'
export const REQUEST_DATA = 'REQUEST_DATA'
export const RECEIVE_DATA = 'RECEIVE_DATA'
export const UPDATE_MENU_OPEN = 'UPDATE_MENU_OPEN'

export const requestData = () => ({
  type: REQUEST_DATA
})

export const receiveData = (data) => ({
  type: RECEIVE_DATA,
  data: data
})

export const fetchData = () => {
  return (dispatch) => {
    dispatch(requestData())
    return fetch(config.dbUrl)
      .then(response => response.json())
      .then(json => {
        const data = {
          'type': 'FeatureCollection',
          'features': _.map(json, (portal) => {
            const [ lat, lon ] = portal.location.split(',')
            return {
              'type': 'Feature',
              'properties': portal,
              'geometry': {
                'type': 'Point',
                'coordinates': [
                  lon,
                  lat
                ]
              }
            }
          })
        }
        dispatch(receiveData(data))
      })
  }
}

export const updateMenuOpen = (bool) => {
  return { type: UPDATE_MENU_OPEN, data: bool }
}
