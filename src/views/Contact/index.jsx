import React from 'react'
import './contact.css'

import { AiFillInstagram } from 'react-icons/ai'
import { ImLinkedin2 } from 'react-icons/im'
import { FaFacebookF } from 'react-icons/fa'


const Contact = () => {
    return (
        <div className='background-text'>
            <div>
                <section class="heading-page header-text" id="background_image_contact">
                    <div class="container1">
                        <div class="row">
                            <div className='text'>
                                <div className='contact_titre'>
                                    <p>Parlez-nous de votre besoin</p>
                                </div>
                                <div className='contact_text'>
                                    <p>N'hésitez pas à nous contacter pour toutes informations complémentaires. Nous serions très heureux de recevoir et traiter votre consultation.</p>
                                    <br />
                                </div>
                            </div>
                            {/* form-contact */}
                            <div className='contact-form'>
                                <form id="contact" action method="post">
                                    <div>
                                        <div className="form_title">
                                            <p>Contactez Nous</p>
                                        </div>
                                        <div className="col-md-12 mt-5">
                                            <div className="textOnInput">
                                                <label htmlFor="inputText">Nom</label>
                                                <input className="form-control" type="text" placeholder="Nom" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-5">
                                            <div className="textOnInput">
                                                <label htmlFor="inputText">Email</label>
                                                <input className="form-control" type="text" pattern="[^ @]*@[^ @]*" placeholder="Email" required />
                                            </div>
                                        </div>
                                        <div className="col-md-12 mt-5">
                                            <div className="textOnInput">
                                                <label htmlFor="inputText">Message</label>
                                                <textarea className="form-control" id='form_message' type="text" pattern="[^ @]*@[^ @]*" placeholder="Message" />
                                            </div>
                                        </div>
                                        <div className="input_button">
                                            <fieldset>
                                                <button type="submit" id="form-submit" className="button">Envoyer</button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
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

export default Contact