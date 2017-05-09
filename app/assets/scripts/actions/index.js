'use strict'
import request from 'request'
import csv from 'csvtojson'

import config from '../config'

export const UPDATE_DATA = 'UPDATE_DATA'
export const UPDATE_DATA_LOADING = 'UPDATE_DATA_LOADING'
export const UPDATE_MENU_OPEN = 'UPDATE_MENU_OPEN'

// < fetch CSV data and stream to GeoJSON object
export const updateData = (data) => {
  return { type: UPDATE_DATA, data: data }
}
export const updateDataLoading = (bool) => {
  return { type: UPDATE_DATA_LOADING, data: bool }
}
export const fetchData = () => {
  return (dispatch) => {
    const data = {
      'type': 'FeatureCollection',
      'features': [ ]
    }
    dispatch(updateDataLoading(true))
    csv()
      .fromStream(request.get(config.dbUrl))
      .on('json', (csvRow) => {
        const [ lat, lon ] = csvRow.location.split(',')
        data.features.push({
          'type': 'Feature',
          'properties': csvRow,
          'geometry': {
            'type': 'Point',
            'coordinates': [
              lon,
              lat
            ]
          }
        })
      })
    .on('done', () => {
      dispatch(updateData(data))
      dispatch(updateDataLoading(false))
    })
  }
}
// />

export const updateMenuOpen = (bool) => {
  return { type: UPDATE_MENU_OPEN, data: bool }
}
