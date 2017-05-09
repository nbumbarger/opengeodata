'use strict'
import React from 'react'
import thunkMiddleware from 'redux-thunk'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import { useScroll } from 'react-router-scroll'
import { Router, Route, IndexRoute, hashHistory, applyRouterMiddleware } from 'react-router'

import config from './config'
import reducer from './reducers'

const logger = createLogger({
  level: 'info',
  collapsed: true,
  predicate: (getState, action) => {
    return (config.environment !== 'production')
  }
})

const store = createStore(reducer, applyMiddleware(
  thunkMiddleware,
  logger
))

const scrollerMiddleware = useScroll((prevRouterProps, currRouterProps) => {
  return prevRouterProps &&
    decodeURIComponent(currRouterProps.location.pathname) !== decodeURIComponent(prevRouterProps.location.pathname)
})

// Components
import App from './views/app'
import Home from './views/home'
import UhOh from './views/uhoh'

render((
  <Provider store={store}>
    <Router history={hashHistory} render={applyRouterMiddleware(scrollerMiddleware)}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} pageClass='page--homepage' />
        {/* <Route path='about' component={About} />
        <Route path='contribute' component={Contribute} /> */}
        <Route path='*' component={UhOh} />
      </Route>
    </Router>
  </Provider>
), document.querySelector('#app-container'))
