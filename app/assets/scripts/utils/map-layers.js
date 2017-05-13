'use strict'

export const points = {
  id: 'points',
  type: 'circle',
  source: 'points',
  paint: {
    'circle-color': '#11b4da',
    'circle-radius': 4,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff'
  }
}

export const pointsHover = {
  id: 'points-hover',
  type: 'circle',
  source: 'points',
  paint: {
    'circle-color': '#ff2b2b',
    'circle-radius': 5,
    'circle-stroke-width': 1,
    'circle-stroke-color': '#fff'
  },
  filter: ['==', 'id', '']
}

export const generateHeatmap = (map) => {
  const layers = [
    [0, '#8095ff'],
    [5, '#80eaff'],
    [10, '#eaff80'],
    [20, '#ffca80'],
    [40, '#ff8080']
  ]
  layers.forEach((layer, i) => {
    map.addLayer({
      'id': 'cluster-' + i,
      'type': 'circle',
      'source': 'heatmap',
      'paint': {
        'circle-color': layer[1],
        'circle-radius': 100,
        'circle-blur': 1.25
      },
      'filter': i === layers.length - 1
      ? ['>=', 'point_count', layer[0]]
      : ['all',
        ['>=', 'point_count', layer[0]],
        ['<', 'point_count', layers[i + 1][0]]]
    }, 'points')
  })
}

export const clusterOutline = {
  'id': 'cluster-outline',
  'type': 'circle',
  'source': 'heatmap',
  'paint': {
    'circle-color': 'rgba(0, 0, 0, 0)',
    'circle-stroke-color': 'white',
    'circle-stroke-width': 2,
    'circle-radius': 50
  }
}

export const clusterLabel = {
  id: 'cluster-count',
  type: 'symbol',
  source: 'heatmap',
  filter: ['has', 'point_count'],
  layout: {
    'text-field': '{point_count_abbreviated}',
    'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
    'text-size': 12
  }
}
