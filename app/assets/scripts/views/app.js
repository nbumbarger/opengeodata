'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import c from 'classnames'

import PageHeader from '../components/page-header'
import PageFooter from '../components/page-footer'

export class App extends React.Component {
  render () {
    const pageClass = _.get(_.last(this.props.routes), 'path')
    return (
      <main className={c('page', pageClass, {'offcanvas-revealed': this.props.menuOpen})} role='main'>
        <div className='page'>
          <div className='page__inner'>
            <PageHeader
              dispatch={this.props.dispatch}
              menuOpen={this.props.menuOpen}
            />
            {this.props.children}
            <PageFooter />
          </div>
        </div>
      </main>
    )
  }
}

App.propTypes = {
  routes: PropTypes.array,
  children: PropTypes.object,
  dispatch: PropTypes.func,
  menuOpen: PropTypes.bool
}

const mapStateToProps = (state) => {
  return {
    menuOpen: state.home.menuOpen
  }
}

export default connect(mapStateToProps)(App)
