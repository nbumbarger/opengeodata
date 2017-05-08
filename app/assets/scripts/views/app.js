'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import c from 'classnames'

export class App extends React.Component {
  render () {
    const pageClass = _.get(_.last(this.props.routes), 'path')
    return (
      <div className={c('page', pageClass)}>
        <main className='page__body' role='main'>
          {this.props.children}
        </main>
      </div>
    )
  }
}

App.propTypes = {
  routes: PropTypes.array,
  children: PropTypes.object
}

const mapStateToProps = (state) => {
  return {
  }
}

export default connect(mapStateToProps)(App)
