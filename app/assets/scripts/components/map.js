'use strict'
import React from 'react'
import PropTypes from 'prop-types'

import * as mapUtils from '../utils/map'
import config from '../config'

export class Map extends React.Component {
  componentDidUpdate (nextProps) {
    if (!this.props.dataLoading) {
      this.addFeatures(this.props.data)
    }
  }

  componentDidMount () {
    this.map = mapUtils.setupMap(this.refs.map, config.mapUrl)
    const mapContainerClases = document.querySelector('[data-hook="map-container"]').classList
    mapContainerClases.remove('map__container--preload')
    mapContainerClases.add('map__container--inpage')
    this.map.resize()
  }

  addFeatures (features) {
    this.map.addSource('points', {
      type: 'geojson',
      data: features
    })

    this.map.addLayer({
      'id': `points`,
      'type': 'circle',
      'source': 'points'
    })
  }

  render () {
    return (
      <div data-hook='map-container' className='map__container--preload'>
        <div id='map' ref='map'></div>
      </div>
    )
  }
}

Map.propTypes = {
  data: PropTypes.object,
  dataLoading: PropTypes.bool
}

export default Map
