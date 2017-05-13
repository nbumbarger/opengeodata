'use strict'

import mapboxgl from 'mapbox-gl'

export const setupMap = (container, layerURL) => {
  return new mapboxgl.Map({
    container: container,
    style: {
      'version': 8,
      'sources': {
        'raster-tiles': {
          'type': 'raster',
          'tiles': [layerURL],
          'tileSize': 256
        }
      },
      'layers': [{
        'id': 'simple-tiles',
        'type': 'raster',
        'source': 'raster-tiles',
        'minzoom': 0,
        'maxzoom': 22
      }]
    },
    center: [0, 20],
    zoom: 1
  })
}
