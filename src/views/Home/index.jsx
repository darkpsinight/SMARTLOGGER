import React from 'react'
import './home.css'
import { AiOutlineUserSwitch } from 'react-icons/ai'
import { HiOutlineLightBulb } from 'react-icons/hi'
import { GiFactory, GiPodiumWinner, GiStarsStack } from 'react-icons/gi'
import { RiLeafLine } from 'react-icons/ri'
import { BiBuildingHouse } from 'react-icons/bi'
import { FiMapPin } from 'react-icons/fi'
import { BsCpu } from 'react-icons/bs'


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
      {/* Nos valeurs */}
      <div className='row'>
        <section>
          <div className="quote">
            <div className="nosvaleurs">
              <h1><b>Nos valeurs</b></h1>
            </div>
            <div className="nosactions">
              <h6>Nos actions se nourrissent chaque jours de nos valeurs</h6>
            </div>
          </div>
        </section>
      </div>
      {/* les 4 icones */}
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
            <GiStarsStack className="icon4" />
          </div>
          <p>Satisfaction</p>
        </div>
      </div>
      {/* Smart solution for a digital futur */}
      <div className="quote2">
        <div className="smarttitle">
          <h1><b>Smart solution for a digital futur</b></h1>
        </div>
        <div className="smarttext">
          <h6>Nous innovons pour satisfaire nos clients!</h6>
          <h6>SMART LOGGER présente plusieur solutions innovantes au service de l'industrie,</h6>
          <h6>l'agriculture, et l'environnement.</h6>
        </div>
      </div>
      {/* Les 4 cards */}
      <div>
        <div className='container'>
          <div className="content">
            {/* card 1*/}
            <div className="card">
              <div className="icon">
                <br /><br /><br /><br />
                <i className="material-icons md-36"><RiLeafLine /></i>
              </div>
              <div className='cardtext'>
                <div className='cardtitle'>
                  <p><h4>Smart agriculture</h4></p>
                </div>
                <div className='cardnote'>
                  <br />
                  <p>SMART IRRIGATION consiste à moderniser la gestion des champs irrigués.</p>
                </div>
              </div>
              <div class="cardbutton">
                <a href="#"><b>Découvrir</b></a>
              </div>
            </div>
            {/* end card */}
            {/* card 2*/}
            <div className="card2">
              <div className="icon">
                <i className="material-icons md-36"><GiFactory /></i>
              </div>
              <div className='cardtext'>
                <div className='cardtitle'>
                  <p><h4>Smart industry</h4></p>
                </div>
                <div className='cardnote'>
                  <br />
                  <p>L'industrie 4.0 est une réorganisation compléte du mode de production avec les outils existants et donnant une plus grande importance au réseau.</p>
                </div>
              </div>
              <div class="cardbutton">
                <a href="#"><b>Découvrir</b></a>
              </div>
            </div>
            {/* end card */}
            {/* card 3*/}
            <div className="card3">
              <div className="icon">
                <i className="material-icons md-36"><BiBuildingHouse /></i>
              </div>
              <div className='cardtext'>
                <div className='cardtitle'>
                  <p><h4>SMART CITY</h4></p>
                </div>
                <div className='cardnote'>
                  <br />
                  <p>convertir vos déchets ménagers en source de revenu !</p>
                </div>
              </div>
              <div class="cardbutton">
                <a href="#"><b>Découvrir</b></a>
              </div>
            </div>
            {/* end card */}
            {/* card 4*/}
            <div className="card4">
              <div className="icon">
                <i className="material-icons md-36"><FiMapPin /></i>
              </div>
              <div className='cardtext'>
                <div className='cardtitle'>
                  <p><h4>Vide</h4></p>
                </div>
                <div className='cardnote'>
                  <br />
                  <p>Vide </p>
                </div>
              </div>
              <div class="cardbutton">
                <a href="#"><b>Découvrir</b></a>
              </div>
            </div>
            {/* end card */}
          </div>
        </div>
      </div>
      {/* Pourquoi nous ? */}
      <div className='row'>
        <div className='why'>
          <div className='imagewhy'>
            <img src='./../../assets/images/why.PNG' alt=""></img>
          </div>
          <div className='textwhy'>
            <h1><b>Pourquoi nous ?</b></h1> <br />
            <p>SMART LOGGER accélerateur de la  transformation digitale</p>
            <p>dans le secteur agricole, environnementale et industriel.</p>
            <br />
            <ul>
              <li>⚬ La prise de décision</li>
              <li>⚬ Gestion de commande</li>
              <li>⚬ Traçabilité</li>
              <li>⚬ Meilleur gestion</li>
              <li>⚬ Outils de prédiction d'erreurs</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Notre exptise */}
      <div className='container'>
        <div className='row'>
          <div className='expertisetitle'>
            <h1>Notre expertise</h1>
          </div>
          <div className='cardscontainer'>
            <div className='expertisecard1'>
              <div className='icon'>
                <BsCpu />
              </div>
              <br />
              <div className='expertisenote'>
                <section>Conception éléctronique</section>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Join our team */}
      <div>

      </div>
      {/*Nos Références*/}
      <div>

      </div>
      {/* Footer */}
      <div>

      </div>


    </div >
  )
}

export default Home