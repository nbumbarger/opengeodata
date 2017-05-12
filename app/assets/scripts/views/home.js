'use strict'

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// Actions
import { fetchData } from '../actions'

// Components
import Map from '../components/map'

export class Home extends React.Component {
  constructor (props, context) {
    super(props, context)
    props.dispatch(fetchData())
  }

  render () {
    return (
      <section className='inpage__section'>
        <Map
          data={this.props.data}
          isFetching={this.props.isFetching}
          dispatch={this.props.dispatch} />
      </section>
    )
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
  data: PropTypes.object,
  isFetching: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    data: state.home.data,
    isFetching: state.home.isFetching
  }
}

export default connect(mapStateToProps)(Home)
