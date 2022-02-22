import React from 'react'
import './home.css'
import { AiOutlineUserSwitch } from 'react-icons/ai'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { GiPodiumWinner } from 'react-icons/gi'
import { GiStarsStack } from 'react-icons/gi'

const Home = () => {
  return (
    <div className='background-text'>

      <div>
        <section class="heading-page header-text" id="top">
          <div class="container">
            <div class="row">
              <div className='headertxt'>
                <div class="col-lg-12">
                  <h2>Leader en IoT solutions</h2>
                  <h6>SMART LOGGER (SML) est une entreprise innovante ayant pour objectif d'accélérer</h6>
                  <h6>la transformation digitale. SML propose des solutions de monitoring permettant aux</h6>
                  <h6>clients d'intégrer la composante télécommunication dans la gestion de leur projets.</h6>
                  <br />
                </div>
                <div>
                  <button className='button button1'><p>Essayer SML <b className="text">🠖</b></p></button>
                  <button className='button button2'><p>Découvrir</p></button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <section>
          <div className="quote">
            <div className="nosvaleurs">
              <h1>Nos valeurs</h1>
            </div>
            <div className="nosactions">
              <h6>Nos actions se nourrissent chaque jours de nos valeurs</h6>
            </div>
          </div>
        </section>
      </div>

      <div className="iconsandtexts">
        <div className="engagement">
          <div className="engagementicon">
            <AiOutlineUserSwitch className="icon1" />
          </div>
          <p>Engagement</p>
        </div>
        <div className="innovation">
          <div className="innovationicon">
            <HiOutlineLightBulb className="icon2" />
          </div>
          <p>Innovation</p>
        </div>
        <div className="exellence">
          <div className="exellenceicon">
            <GiPodiumWinner className="icon3" />
          </div>
          <p>Exellence</p>
        </div>
        <div className="satisfaction">
          <div className="satisfactionicon">
          <GiStarsStack className="icon4"/>
          </div>
          <p>Satisfaction</p>
        </div>
      </div>

      <div className="quote2">
        <div className="smarttitle">
          <h1>Smart solution for a digital futur</h1>
        </div>
        <div className="smarttext">
          <h6>Nous innovons pour satisfaire nos clients!</h6> <br />
          <h6>SMART LOGGER présente plusieur solutions innovantes au service de l'industrie,</h6> <br />
          <h6>l'agriculture, et l'environnement.</h6>
        </div>
      </div>

    </div>
  )
}

export default Home