import React from 'react';
import './navbar.css'

export default () => {

    const css = `
    .logo {
        width: 230px;
    }
    `

    return (
        <>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* ***** Logo Start ***** */}
                                <div className='logo'>
                                    <style>{css}</style>
                                    <img src={require('.//../../../src/views/Home/image/Smartlogger_logo.png')} alt="Smartlogger logo" />
                                </div>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul className="nav">
                                    <li><a href="/solutions">IoT Solutions</a></li>
                                    <li><a href="/produits" className="active">IoT Produits</a></li>
                                    <li><a href="/espaceClient">Notre expertise</a></li>
                                    <li><a href="/apropos">À propos</a></li>
                                    <div class="main-button-red">
                                        <div class="scroll-to-section"><a href="#contact">CONTACT</a></div>
                                    </div>
                                </ul>
                                <a className="menu-trigger">
                                    <span>Menu</span>
                                </a>
                                {/* ***** Menu End ***** */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}