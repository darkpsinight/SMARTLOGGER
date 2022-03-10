import React from 'react'
import Footer from './../Footer/index'
import { BsDownload } from 'react-icons/bs'
import './irrigation.css'

const Irrigation = () => {
  return (
    <div className='background-text'>
      <div>
        <section
          class='heading-page header-text'
          id='background_image_irrigation'
        >
          <div class='container1'>
            <div class='row'>
              <div className='icone'>
                <div className='irrigation_icon'>
                  <img
                    src='./../../assets/images/irrigation_icon.png'
                    alt='irrigation_icon'
                  ></img>
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
                <p>
                  SMART IRRIGATION consiste à moderniser la gestion des champs
                  irrigués. Le package proposé contient principalement un kit
                  électronique connecté à l'internet capable de commander à
                  distance les vannes et les motopompes d'irrigation via une
                  application mobile. Cet outil permet à l'agriculteur
                  d'épargner le déplacement sur site et il lui permet de définir
                  des temps d'irrigation trés précis. En plus nous proposons
                  l'installation des capteurs intelligents pour faire de
                  l'échantilonnage sur des differents niveau de sols afin
                  d'informer l'agriculteur sur le pourcentage d'humidité du sol.
                  Ceci afin de savoir la quantité d'eau d'irrigation nécessaire.
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
                  <a href='https://smartlogger.tn/smart-irrigation-web'>
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

export default Irrigation
