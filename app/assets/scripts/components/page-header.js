'use strict'
import React from 'react'

export class PageHeader extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      menuOpen: false
    }
  }

  handleNavClick (e) {
    e.preventDefault()
    this.setState({menuOpen: !this.state.menuOpen})
    if (!this.state.menuOpen) {
      document.querySelector('html').classList.add('offcanvas-revealed')
    }
    if (this.state.menuOpen) {
      document.querySelector('html').classList.remove('offcanvas-revealed')
    }
  }

  render () {
    return (
      <header className='page__header' role='banner' data-hook='header'>
        <div className='inner'>
          <div className='page__headline'>
           <h1 className='page__title'>
             <a href='/' title='Visit homepage'>OpenGeoData.io</a>
           </h1>
          </div>
          <nav className='page__prime-nav'>
            <h2 className='page__prime-nav-title' onClick={(e) => this.handleNavClick(e)}>
              <a href='#nav-block-browse'><span>Menu</span></a>
            </h2>
            <div className='nav-block' id='nav-block-browse'>
              <ul className='browse-menu'>
                <li>
                  <a title='Go home' className='browse-menu__item' href='/'>Home</a>
                </li>
                <li>
                  <a title='Browse list of data sources' className='browse-menu__item' href='/browse'>Browse</a>
                </li>
                <li>
                  <a title='Contribute a data source' className='browse-menu__item' href='/contribute'>Contribute</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    )
  }
}

export default PageHeader
