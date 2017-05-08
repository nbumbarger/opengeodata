'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import c from 'classnames'

import PageHeader from '../components/page-header'
import PageFooter from '../components/page-footer'

export class App extends React.Component {
  render () {
    const pageClass = _.get(_.last(this.props.routes), 'path')
    return (
      <main className={c('page', pageClass)} role='main'>
        <div className='page'>
          <div className='page__inner'>
            <PageHeader />
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
  children: PropTypes.object
}

export default App
