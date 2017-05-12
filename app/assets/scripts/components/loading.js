'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

// when finished fetching, allow the map layers to load by fading
// the loading spinner using css, then removing it entirely
export class Loading extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {visible: true}
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.isFetching) {
      this.setTimer()
    }
  }

  setTimer () {
    this._timer = setTimeout(() => {
      this.setState({visible: false})
    }, 1500)
  }

  render () {
    return (
      this.state.visible
        ? (
          <div className={classnames('sk-circle', 'map-container--loading', {'fading': !this.props.isFetching})}>
            <div className='sk-circle'>
              <div className='sk-circle1 sk-child'></div>
              <div className='sk-circle2 sk-child'></div>
              <div className='sk-circle3 sk-child'></div>
              <div className='sk-circle4 sk-child'></div>
              <div className='sk-circle5 sk-child'></div>
              <div className='sk-circle6 sk-child'></div>
              <div className='sk-circle7 sk-child'></div>
              <div className='sk-circle8 sk-child'></div>
              <div className='sk-circle9 sk-child'></div>
              <div className='sk-circle10 sk-child'></div>
              <div className='sk-circle11 sk-child'></div>
              <div className='sk-circle12 sk-child'></div>
            </div>
          </div>
        )
        : <span />
    )
  }
}

Loading.propTypes = {
  isFetching: PropTypes.bool
}

export default Loading
