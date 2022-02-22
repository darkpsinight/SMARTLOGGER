import React from 'react';
import './navbar.css'

export default () => {
    return (
        <>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* ***** Logo Start ***** */}
                                <a href="index.html" className="logo">
                                    SMARTLOGGER
                                </a>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul className="nav">
                                    <li><a href="/solutions">Solutions</a></li>
                                    <li><a href="/produits" className="active">Produits</a></li>
                                    <li><a href="/espaceClient">Espace client</a></li>
                                    <li><a href="/apropos">A propos</a></li>
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