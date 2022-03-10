import React, { memo } from 'react'
import { AiFillInstagram } from 'react-icons/ai'
import { ImLinkedin2 } from 'react-icons/im'
import { FaFacebookF } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = memo(() => {
  return (
    <div id='apropos'>
      <div className='about'>
        <div className='aboutup'>
          <div className='solutions'>
            <h5>Solutions</h5>
            <br />
            <Link to='/control'>Smart control</Link>
            <Link to='/control'>Smart monitoring</Link>
            <a href='#'>Smart collect</a>
            <Link to='/irrigation'>Smart irrigation</Link>
          </div>
          <div className='produits'>
            <h5>Produits</h5>
            <br />
            <Link to='/irrigation'>Smart agriculture</Link>
            <Link to='/control'>Smart industry</Link>
            <a href='#'>Smart city</a>
          </div>
          <div className='espace'>
            <h5>Espace client</h5>
            <br />
            <Link to='/control'>Smart control</Link>
            <a href='#'>Smart monitoring</a>
            <a href='#'>Smart collect</a>
            <Link to='/irrigation'>Smart agriculture</Link>
            <a href='#'>Smart healthcare</a>
            <a href='#'>Be Smart</a>
          </div>
          <div className='apropos'>
            <h5>À propos</h5>
            <br />
            <Link to='apropos'>About us</Link>
            <a href='#'>Career</a>
          </div>
          <div className='nous_contacter'>
            <h5>Nous contacter</h5>
            <br />
            <address>
              <div className='adresse'>
                <h6>
                  <b>Adresse: </b>
                </h6>
                <div className='adressetext'>
                  <p>
                    Atelier N°1 Technopole de Sousse
                    <br />
                    Novation City, Tunisie
                  </p>
                </div>
              </div>
              <div className='telephone'>
                <div className='telephonetext'>
                  <h6>
                    <b>Téléphone:</b>
                  </h6>
                </div>
                <div className='telephonenumber'>
                  <a>+(216) 52 017 986</a>
                </div>
              </div>
              <div className='email'>
                <div className='emailtext'>
                  <h6>
                    <b>Email:</b>
                  </h6>
                </div>
                <div className='emaillink'>
                  <a href='mailto:contact@smartlogger.tn'>
                    contact@smartlogger.tn
                  </a>
                </div>
              </div>
              <div className='contactbutton'>
                <Link to='/contact'>
                  <b>CONTACT</b>
                </Link>
              </div>
            </address>
          </div>
        </div>
        <hr />
        <div className='aboutdown'>
          <div className='logo'>
            <img
              src={require('.//image/Smartlogger_logo.png')}
              alt='Smartlogger logo'
            />
          </div>
          <div className='terms'>
            <div className='copyright'>
              <h6>©SmartLogger |</h6>
            </div>
            <div className='tandc'>
              <a href='#'>Terms and conditions</a> |
            </div>
            <div className='policy'>
              <a href='#'>Privacy policy</a> |
            </div>
            <div className='cookies'>
              <a href='#'>Cookies</a>
            </div>
          </div>
          <div className='followus'>
            <h5>Follow us</h5>
            <div className='iconsfollow'>
              <div className='instagram'>
                <a href='#'>
                  {' '}
                  <AiFillInstagram />
                </a>
              </div>
              <div className='linkedin'>
                <a href='#'>
                  {' '}
                  <ImLinkedin2 />
                </a>
              </div>
              <div className='facebook'>
                <a href='#'>
                  {' '}
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
})

export default Footer
