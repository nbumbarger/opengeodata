'use strict'
import React from 'react'
import { connect } from 'react-redux'

// Actions
import { } from '../actions'

export class Home extends React.Component {
  render () {
    return (
      <section className='page__home'>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}
export default connect(mapStateToProps)(Home)
