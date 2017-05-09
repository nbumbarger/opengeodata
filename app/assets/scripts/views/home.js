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
      <section className='page__home'>
        <div className='inpage__body'>
          <section className='inpage__section'>
            <Map data={this.props.data} dataLoading={this.props.dataLoading}/>
          </section>
        </div>
      </section>
    )
  }
}

Home.propTypes = {
  dispatch: PropTypes.func,
  data: PropTypes.object,
  dataLoading: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    data: state.home.data,
    dataLoading: state.home.dataLoading
  }
}
export default connect(mapStateToProps)(Home)
