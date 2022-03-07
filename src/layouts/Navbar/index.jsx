import React from 'react';
import '../../views/Home/index.jsx'

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
                                    <img src={require('.//img/Smartlogger_logo.png')} alt="Smartlogger logo" />
                                </div>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul className="nav">
                                    <li><a href="#iotsolutions">Nos valeurs</a></li>
                                    <li><a href="#produits" /* className="active" */>Nos solutions</a></li>
                                    <li><a href="#expertise">Notre expertise</a></li>
                                    <li><a href="/apropos">À propos</a></li>
                                    <div class="main-button-red">
                                        <div class="scroll-to-section"><a href="/contact">CONTACT</a></div>
                                    </div>
                                </ul>
                                {/* ***** Menu End ***** */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}