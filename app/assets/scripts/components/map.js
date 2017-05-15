'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import config from '../config'

// Utils
import * as mapUtils from '../utils/map'
import * as mapLayers from '../utils/map-layers'

// Components
import Loading from '../components/loading'

export class Map extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.mouseMove = this.mouseMove.bind(this)
    this.mapClick = this.mapClick.bind(this)
    this.highlightFeature = this.highlightFeature.bind(this)
    this.unhighlightFeature = this.unhighlightFeature.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.isFetching) {
      this.addFeatures(nextProps.data)
    }
  }

  componentDidMount () {
    this.map = mapUtils.setupMap(this.refs.map, config.mapUrl)
    this.map.on('load', () => {
      this.map.resize()
    })
    const throttledMouseMove = _.throttle(this.mouseMove, 50)
    this.map.on('mousemove', throttledMouseMove)
    this.map.on('click', this.mapClick)
  }

  addFeatures (features) {
    this.map.addSource('points', {
      type: 'geojson',
      data: features
    })
    this.map.addSource('heatmap', {
      type: 'geojson',
      data: features,
      cluster: true,
      clusterMaxZoom: 5,
      clusterRadius: 20
    })
    this.map.addLayer(mapLayers.points)
    this.map.addLayer(mapLayers.pointsHover)
    mapLayers.generateHeatmap(this.map)
  }

  mouseMove (e) {
    const features = this.map.queryRenderedFeatures(e.point, {
      layers: ['points']
    })

    if (features.length) {
      this.map.getCanvas().style.cursor = 'pointer'
      this.highlightFeature(features[0].properties)
    } else {
      this.map.getCanvas().style.cursor = ''
      this.unhighlightFeature()
    }
  }

  highlightFeature (featureProps) {
    this.map.setFilter('points-hover', ['==', 'id', featureProps.id])
  }

  unhighlightFeature () {
    this.map.setFilter('points-hover', ['==', 'id', ''])
  }

  mapClick (e) {
    const feature = this.map.queryRenderedFeatures(e.point, {
      layers: ['points', 'points-hover']
    })[0]
    if (feature) {
      const [ lat, lon ] = feature.properties.location.split(',')
      this.map.flyTo({
        center: [lon, lat],
        duration: 2000,
        zoom: Math.random() * 2 + 2,
        bearing: Math.round(Math.random() * 20 + 10),
        pitch: Math.round(Math.random() * 30 + 10)
      })
    }
  }

  render () {
    return (
      <div className='map__container--inpage' data-hook='map-container'>
        <Loading isFetching={this.props.isFetching} />
        <div id='map' ref='map'></div>
      </div>
    )
  }
}

Map.propTypes = {
  dispatch: PropTypes.func,
  data: PropTypes.object,
  isFetching: PropTypes.bool
}

export default Map
