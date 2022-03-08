import React from 'react'
import './irrigation.css'

import { AiFillInstagram } from 'react-icons/ai'
import { ImLinkedin2 } from 'react-icons/im'
import { FaFacebookF } from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'


const Irrigation = () => {
    return (
        <div className='background-text'>
            <div>
                <section class="heading-page header-text" id="background_image_irrigation">
                    <div class="container1">
                        <div class="row">
                            <div className='icone'>
                                <div className='irrigation_icon'>
                                    <img src='./../../assets/images/irrigation_icon.png' alt="irrigation_icon"></img>
                                </div>
                                <div className='irrigation_titre1'>
                                    <h3>IoT Solution</h3>
                                </div>
                                <div className='irrigation_titre2'>
                                    <h1>Smart irrigation</h1>
                                </div>
                                <div className='irrigation_titre3'>
                                    <h4>Solution intelligente</h4>
                                </div>
                            </div>
                            <div className='headertext'>
                                <p>SMART IRRIGATION consiste à moderniser la gestion des champs irrigués. Le package proposé contient principalement un kit électronique connecté à l'internet capable de commander à distance les vannes  et les motopompes d'irrigation via une application mobile. Cet outil permet à l'agriculteur d'épargner le déplacement sur site et il lui permet de définir des temps d'irrigation trés précis. En plus nous proposons l'installation des capteurs intelligents pour faire de l'échantilonnage sur des differents niveau de sols afin d'informer l'agriculteur sur le pourcentage d'humidité du sol. Ceci afin de savoir la quantité d'eau d'irrigation nécessaire.</p>
                                <br />
                            </div>
                            <div className='buttonstop'>
                                <div className='telecharger_button'>
                                    <a href="#"><b>Télécharger &nbsp;&nbsp; <BsDownload /></b></a>
                                </div>
                                <div className='administrateur_button'>
                                    <a href="https://smartlogger.tn/smart-irrigation-web"><b>Plateforme administrateur</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* Footer */}
            <div id='apropos'>
                <div className='about'>
                    <div className='aboutup'>
                        <div className='solutions'>
                            <h5>Solutions</h5>
                            <br />
                            <a href="/control">Smart control</a>
                            <a href="/control">Smart monitoring</a>
                            <a href="#">Smart collect</a>
                            <a href="/irrigation">Smart irrigation</a>
                        </div>
                        <div className='produits'>
                            <h5>Produits</h5>
                            <br />
                            <a href="/irrigation">Smart agriculture</a>
                            <a href="/control">Smart industry</a>
                            <a href="#">Smart city</a>
                        </div>
                        <div className='espace'>
                            <h5>Espace client</h5>
                            <br />
                            <a href="/control">Smart control</a>
                            <a href="#">Smart monitoring</a>
                            <a href="#">Smart collect</a>
                            <a href="/irrigation">Smart irrigation</a>
                            <a href="#">Smart healthcare</a>
                            <a href="#">Be Smart</a>
                        </div>
                        <div className='apropos'>
                            <h5>À propos</h5>
                            <br />
                            <a href="apropos">About us</a>
                            <a href="#">Career</a>
                        </div>
                        <div className='nous_contacter'>
                            <h5>Nous contacter</h5>
                            <br />
                            <address>
                                <div className='adresse'>
                                    <h6><b>Adresse: </b></h6>
                                    <div className='adressetext'><p>Atelier N°1 Technopole de Sousse<br />Novation City, Tunisie</p></div>
                                </div>
                                <div className='telephone'>
                                    <div className='telephonetext'>
                                        <h6><b>Téléphone:</b></h6>
                                    </div>
                                    <div className='telephonenumber'>
                                        <a>+(216) 52 017 986</a>
                                    </div>
                                </div>
                                <div className='email'>
                                    <div className='emailtext'>
                                        <h6><b>Email:</b></h6>
                                    </div>
                                    <div className='emaillink'>
                                        <a href="mailto:contact@smartlogger.tn">contact@smartlogger.tn</a>
                                    </div>
                                </div>
                                <div className='contactbutton'>
                                    <a href="/contact"><b>CONTACT</b></a>
                                </div>
                            </address>
                        </div>
                    </div>
                    <hr />
                    <div className='aboutdown'>
                        <div className='logo'>
                            <img src={require('.//img/Smartlogger_logo.png')} alt="Smartlogger logo" />
                        </div>
                        <div className='terms'>
                            <div className='copyright'><h6>©SmartLogger |</h6></div>
                            <div className='tandc'><a href='#'>Terms and conditions</a> |</div>
                            <div className='policy'><a href='#'>Privacy policy</a> |</div>
                            <div className='cookies'><a href='#'>Cookies</a></div>
                        </div>
                        <div className='followus'>
                            <h5>Follow us</h5>
                            <div className='iconsfollow'>
                                <div className='instagram'><a href="#"> <AiFillInstagram /></a></div>
                                <div className='linkedin'><a href="#"> <ImLinkedin2 /></a></div>
                                <div className='facebook'><a href="#"> <FaFacebookF /></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Irrigation