import React from 'react'
import '../../views/Home/index.jsx'
import { Link } from 'react-router-dom'

export default () => {
  const css = `
    .logo {
        width: 230px;
    }
    `

  return (
    <header className='header-area header-sticky'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <nav className='main-nav'>
              {/* ***** Logo Start ***** */}
              <a href='/#' className='logo'>
                <style>{css}</style>
                <img
                  src={require('.//img/Smartlogger_logo.png')}
                  alt='Smartlogger logo'
                />
              </a>
              {/* ***** Logo End ***** */}
              {/* ***** Menu Start ***** */}
              <ul className='nav'>
                <li>
                  <a href='/#iotsolutions'>Nos valeurs</a>
                </li>
                <li>
                  <a href='/#produits' /* className="active" */>
                    Nos solutions
                  </a>
                </li>
                <li>
                  <a href='/#expertise'>Notre expertise</a>
                </li>
                <li>
                  <Link to='/apropos'>À propos</Link>
                </li>
                <div class='main-button-red'>
                  <div class='scroll-to-section'>
                    <Link to='/contact'>CONTACT</Link>
                  </div>
                </div>
              </ul>
              {/* ***** Menu End ***** */}
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
