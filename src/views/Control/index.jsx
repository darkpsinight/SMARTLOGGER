import React from 'react'
import Footer from './../Footer/index'
import { BsDownload } from 'react-icons/bs'
import '../Control/control.css'

const Control = () => {
  return (
    <div className='background-text'>
      <div>
        <section class='heading-page header-text' id='back_image_control'>
          <div class='container1'>
            <div class='row'>
              <div className='icone'>
                <div className='irrigation_icon'>
                  <img
                    src='./../../assets/images/control_icon.png'
                    alt='control_icon'
                  ></img>
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
                <p>
                  SMART CONTROL consiste à sécuriser l'emmagasinage des produits
                  alimentaires dans les entrepôts frigorifiques. En effet notre
                  kit électronique converti des indicateurs de performances,
                  généralement des grandeurs physiques telles que la
                  température, le taux d'humidité en des Data Cloud accessibles
                  à distance sur une base de données. L'utilisateur peut
                  surveiller son espace à distance sur une plateforme web à
                  travers l'internet. En cas d'anomalie, instantanément il
                  reçoit une alerte afin de réagir le plus rapide possible.
                </p>
                <br />
              </div>
              <div className='buttonstop'>
                <div className='telecharger_button'>
                  <a href='#'>
                    <b>
                      Télécharger &nbsp;&nbsp; <BsDownload />
                    </b>
                  </a>
                </div>
                <div className='administrateur_button'>
                  <a href='https://www.smartlogger.tn/smart-control'>
                    <b>Plateforme administrateur</b>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Control
