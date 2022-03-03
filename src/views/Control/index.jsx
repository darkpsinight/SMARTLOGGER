import React from 'react'
import '../Control/control.css'

import { AiFillInstagram } from 'react-icons/ai'
import { ImLinkedin2 } from 'react-icons/im'
import { FaFacebookF } from 'react-icons/fa'
import { BsDownload } from 'react-icons/bs'


const Control = () => {
    return (
        <div className='background-text'>
            <div>
                <section class="heading-page header-text" id="back_image">
                    <div class="container1">
                        <div class="row">
                            <div className='icone'>
                                <div className='irrigation_icon'>
                                    <img src='./../../assets/images/control_icon.png' alt="control_icon"></img>
                                </div>
                                <div className='irrigation_titre1'>
                                    <h3>IoT Solution</h3>
                                </div>
                                <div className='irrigation_titre2'>
                                    <h1>Smart control</h1>
                                </div>
                                <div className='irrigation_titre3'>
                                    <h4>Contrôler intelligemment</h4>
                                </div>
                            </div>
                            <div className='headertext'>
                                <p>SMART CONTROL consiste à sécuriser l'emmagasinage des produits alimentaires dans les entrepôts frigorifiques. En effet notre kit électronique<br />converti des indicateurs de performances, généralement des grandeurs physiques telles que la température, le taux d'humidité en des Data Cloud<br />accessibles à distance sur une base de données. L'utilisateur peut surveiller son espace à distance sur une plateforme web à travers l'internet. En<br />cas d'anomalie, instantanément il reçoit une alerte afin de réagir le plus rapide possible.</p>
                                <br />
                            </div>
                            <div className='buttonstop'>
                                <div className='telecharger_button'>
                                    <a href="#"><b>Télécharger &nbsp;&nbsp; <BsDownload /></b></a>
                                </div>
                                <div className='administrateur_button'>
                                    <a href="#"><b>Plateforme administrateur</b></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* Footer */}
            <div>
                <div className='about'>
                    <div className='aboutup'>
                        <div className='solutions'>
                            <h5>Solutions</h5>
                            <br />
                            <a href="#">Smart control</a>
                            <a href="#">Smart monitoring</a>
                            <a href="#">Smart collect</a>
                            <a href="#">Smart irrigation</a>
                        </div>
                        <div className='produits'>
                            <h5>Produits</h5>
                            <br />
                            <a href="#">Smart agriculture</a>
                            <a href="#">Smart industry</a>
                            <a href="#">Smart city</a>
                        </div>
                        <div className='espace'>
                            <h5>Espace client</h5>
                            <br />
                            <a href="#">Smart control</a>
                            <a href="#">Smart monitoring</a>
                            <a href="#">Smart collect</a>
                            <a href="#">Smart irrigation</a>
                            <a href="#">Smart healthcare</a>
                            <a href="#">Be Smart</a>
                        </div>
                        <div className='apropos'>
                            <h5>À propos</h5>
                            <br />
                            <a href="#">About us</a>
                            <a href="#">Career</a>
                        </div>
                        <div className='nous_contacter'>
                            <h5>Nous contacter</h5>
                            <br />
                            <address>
                                <div className='adresse'>
                                    <h6><b>Adresse: </b></h6>
                                    <div className='adressetext'><p>Atelier N°1 Technopole<br />de Sousse Novation City, Tunisie</p></div>
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
                            </address>
                            <div className='contactbutton'>
                                <a href="#"><b>CONTACT</b></a>
                            </div>
                        </div>
                        <div className='newsletter'>
                            <h5>Inscrivez-vous sur notre Newsletter</h5>
                            <br />
                            <div className='newsletter_inside'>
                                <input className='newsletter_input' type="email" id="email" placeholder='Entrez votre adresse mail...' pattern=".+@globex\.com" size={30} required />
                                <input className="sincrirebutton" type="submit" value="S'inscrire" />
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className='aboutdown'>
                        <div className='logo'>
                            <img src={require('.//img/Smartlogger_logo.png')} alt="Smartlogger logo" />
                        </div>
                        <div className='terms'>
                            <div className='copyright'><h6>© SmartLogger | </h6></div>
                            <div className='tandc'><a href='#'>Terms and conditions</a> | </div>
                            <div className='policy'><a href='#'>Privacy policy</a> | </div>
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

export default Control