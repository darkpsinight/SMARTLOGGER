import React from 'react'
import Slider from 'react-slick'
import Footer from './../Footer/index'
import { Link } from 'react-router-dom'
import { GiFactory } from 'react-icons/gi'
import { RiLeafLine } from 'react-icons/ri'
import { BiBuildingHouse } from 'react-icons/bi'
import { FiMapPin } from 'react-icons/fi'
import './home.css'

/* Slide settings */

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
}

const Home = () => {
  return (
    <div className='background-text'>
      <div>
        <section class='heading-page header-text' id='top'>
          <div class='container1'>
            <div class='text_box'>
              <div className='headertxt'>
                <div className='headertitle'>
                  <p>Leader en IoT solutions</p>
                </div>
                <p>
                  SMART LOGGER (SML) est une entreprise innovante ayant pour objectif d'accélérer la transformation digitale. SML propose des solutions de
                  monitoring permettant aux clients d'intégrer la composante télécommunication dans la gestion de leur projets.
                </p>
                <br />
              </div>
              <div className='buttonstop'>
                <div className='smlbutton'>
                  <Link to='/contact'>Essayer SML 🠖</Link>
                </div>
                <div className='decouvrirbutton'>
                  <a href='/#produits'>Découvrir</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Nos valeurs */}
      <div id='iotsolutions'>
        <section>
          <div className='quote'>
            <div className='nosvaleurs'>
              <p>
                <b>Nos valeurs</b>
              </p>
            </div>
            <div className='nosactions'>
              <p>
                Nos actions se nourrissent chaque jours de nos
                <br />
                valeurs
              </p>
            </div>
          </div>
        </section>
      </div>
      {/* les 4 icones */}
      <div className='iconsandtexts'>
        <div className='engagement'>
          <div className='engagementicon'>
            <div className='icon1'>
              <img className='engagement-icon'
                src='./../../assets/images/engagement.png'
                alt='engagement'
              ></img>
            </div>
          </div>
          <p>Engagement</p>
        </div>
        <div className='innovation'>
          <div className='innovationicon'>
            <div className='icon2'>
              <img className='innovation-icon'
                src='./../../assets/images/innovation.png'
                alt='innovation'
              ></img>
            </div>
          </div>
          <p>Innovation</p>
        </div>
        <div className='exellence'>
          <div className='exellenceicon'>
            <div className='icon3'>
              <img className='exellence-icon'
                src='./../../assets/images/Excellence.png'
                alt='Excellence'
              ></img>
            </div>
          </div>
          <p>Exellence</p>
        </div>
        <div className='satisfaction'>
          <div className='satisfactionicon'>
            <div className='icon4'>
              <img className='satisfaction-icon'
                src='./../../assets/images/Satisfaction.png'
                alt='Satisfaction'
              ></img>
            </div>
          </div>
          <p>Satisfaction</p>
        </div>
      </div>
      {/* Smart solution for a digital futur */}
      <div className='quote2' id='smartsolution'>
        <div className='smarttitle'>
          <p>
            <b>Smart solution for a digital futur</b>
          </p>
        </div>
        <div className='smarttext'>
          <p>Nous innovons pour satisfaire nos clients!</p>
          <p>
            SMART LOGGER présente plusieur solutions innovantes au service de
            l'industrie,
          </p>
          <p>l'agriculture, et l'environnement.</p>
        </div>
      </div>
      {/* Les 4 cards */}
      <div id='produits'>
        <div className='container'>
          <div className='content1'>
            {/* card 1*/}
            <div className='card'>
              <div className='icon'>
                <br />
                <br />
                <br />
                <br />
                <i className='material-icons md-36'>
                  <RiLeafLine />
                </i>
              </div>
              <div className='cardtext'>
                <div className='cardtitle'>
                  <p>
                    <h4>Smart agriculture</h4>
                  </p>
                </div>
                <div className='cardnote'>
                  <br />
                  <p>
                    SMART IRRIGATION consiste à moderniser la gestion des champs
                    irrigués.
                  </p>
                </div>
              </div>
              <div class='cardbutton'>
                <a href='/irrigation'>
                  <b>Découvrir</b>
                </a>
              </div>
            </div>
            {/* end card */}
            {/* card 2*/}
            <div className='card2'>
              <div className='icon'>
                <i className='material-icons md-36'>
                  <GiFactory />
                </i>
              </div>
              <div className='cardtext'>
                <div className='cardtitle'>
                  <p>
                    <h4>Smart industry</h4>
                  </p>
                </div>
                <div className='cardnote'>
                  <br />
                  <p>
                    L'industrie 4.0 est une réorganisation compléte du mode de
                    production avec les outils existants et donnant une plus
                    grande importance au réseau.
                  </p>
                </div>
              </div>
              <div class='cardbutton'>
                <a href='/control'>
                  <b>Découvrir</b>
                </a>
              </div>
            </div>
            {/* end card */}
            {/* card 3*/}
            <div className='card3'>
              <div className='icon'>
                <i className='material-icons md-36'>
                  <BiBuildingHouse />
                </i>
              </div>
              <div className='cardtext'>
                <div className='cardtitle'>
                  <p>
                    <h4>SMART CITY</h4>
                  </p>
                </div>
                <div className='cardnote'>
                  <br />
                  <p>Convertir vos déchets ménagers en source de revenu !</p>
                </div>
              </div>
              <div class='cardbutton'>
                <a href='#'>
                  <b>Découvrir</b>
                </a>
              </div>
            </div>
            {/* end card */}
            {/* card 4*/}
            <div className='card4'>
              <div className='icon'>
                <i className='material-icons md-36'>
                  <FiMapPin />
                </i>
              </div>
              <div className='cardtext'>
                <div className='cardtitle'>
                  <p>
                    <h4>
                      Smart
                      <br />
                      tracking
                    </h4>
                  </p>
                </div>
                <div className='cardnote'>
                  <br />
                  <p>
                    Smart tracking permet
                    <br />
                    aux entreprises de suivre
                    <br />
                    et de gérer les actifs qui
                    <br />
                    aliment toute entreprise.
                  </p>
                </div>
              </div>
              <div class='cardbutton'>
                <a href='#'>
                  <b>Découvrir</b>
                </a>
              </div>
            </div>
            {/* end card */}
          </div>
        </div>
      </div>
      {/* Pourquoi nous ? */}
      <div className='e'>
        <div className='why'>
          <div className='imagewhy'>
            <img src='./../../assets/images/why.png' alt='why'></img>
          </div>
          <div className='textwhy'>
            <h1>Pourquoi nous ?</h1> <br />
            <p>SMART LOGGER accélerateur de la transformation digitale</p>
            <p>dans le secteur agricole, environnementale et industriel.</p>
            <br />
            <ul className='list'>
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
      {/* Les 6 cards */}
      <div>
        <div className='container'>
          <div id='expertise'>
            <div className='expertisetitle'>
              <p>Notre expertise</p>
            </div>
          </div>
          <div className='content2'>
            <div className='cardscolumns1'>
              {/* card 1*/}
              <div className='expertisecard'>
                <div className='expertisecardinside'>
                  <div className='iconbox'>
                    <div className='expertiseicon1'>
                      <br />
                      <br />
                      <br />
                      <br />
                      <i className='material-icons md-36'>
                        <img
                          src='./../../assets/images/BsCpu.png'
                          alt='BsCpu'
                        ></img>
                      </i>
                    </div>
                  </div>
                  <div className='cardtext'>
                    <div className='expertisecardtitle'>
                      <p>
                        <h4>
                          Conception <br />
                          éléctronique
                        </h4>
                      </p>
                    </div>
                    <div className='expertisecardnote1'>
                      <p>
                        Nous réalisons toute la phase de
                        <br />
                        conception électronique d'un produit
                        <br />
                        ou d'un systéme électronique
                        <br />
                        embarqué: étude de faisabilité et élaborationdes schémas
                        <br />
                        électroniques...etc
                      </p>
                    </div>
                  </div>
                  <div class='expertisecardbutton1'>
                    <a href='#'>
                      <b>Découvrir</b>
                    </a>
                  </div>
                </div>
              </div>
              {/* end card */}
              {/* card 2*/}
              <div className='expertisecard'>
                <div className='expertisecardinside'>
                  <div className='iconbox'>
                    <div className='expertiseicon2'>
                      <br />
                      <br />
                      <br />
                      <br />
                      <i className='material-icons md-36'>
                        <i className='material-icons md-36'>
                          <img
                            src='./../../assets/images/BsCloudCheck.png'
                            alt='BsCloudCheck'
                          ></img>
                        </i>
                      </i>
                    </div>
                  </div>
                  <div className='cardtext'>
                    <div className='expertisecardtitle'>
                      <p>
                        <h4>
                          Internet des
                          <br />
                          objets
                        </h4>
                      </p>
                    </div>
                    <div className='expertisecardnote1'>
                      <p>
                        représente un ensemble de services de
                        <br />
                        bout en bout dans lesquels les
                        <br />
                        entreprises passent des contrats avec
                        <br />
                        des fournisseurs externes pour
                        <br /> concevoir, construire, installer et
                        <br />
                        exploiter des solutions IoT.
                      </p>
                    </div>
                  </div>
                  <div class='expertisecardbutton1'>
                    <a href='#'>
                      <b>Découvrir</b>
                    </a>
                  </div>
                </div>
              </div>
              {/* end card */}
              {/* card 3*/}
              <div className='expertisecard'>
                <div className='expertisecardinside'>
                  <div className='iconbox'>
                    <div className='expertiseicon3'>
                      <br />
                      <br />
                      <br />
                      <br />
                      <i className='material-icons md-36'>
                        <img
                          src='./../../assets/images/GiBrain.png'
                          alt='GiBrain'
                        ></img>
                      </i>
                    </div>
                  </div>
                  <div className='cardtext'>
                    <div className='expertisecardtitle'>
                      <p>
                        <h4>
                          Intellegence <br />
                          artificielle
                        </h4>
                      </p>
                    </div>
                    <div className='expertisecardnote1'>
                      <p>
                        Nous fournissons des solutions et
                        <br />
                        des services puissants basés sur l'IA
                        <br />
                        pour aider les entreprises à innover
                        <br />
                        et à renforcer leur avantage
                        <br />
                        concurrentiel.
                      </p>
                    </div>
                  </div>
                  <div class='expertisecardbutton1'>
                    <a href='#'>
                      <b>Découvrir</b>
                    </a>
                  </div>
                </div>
              </div>
              {/* end card */}
            </div>
            <div className='cardscolumns2'>
              {/* card 4*/}
              <div className='expertisecard'>
                <div className='expertisecardinside'>
                  <div className='iconbox'>
                    <div className='expertiseicon4'>
                      <br />
                      <br />
                      <br />
                      <br />
                      <i className='material-icons md-36'>
                        <img
                          src='./../../assets/images/BiCodeBlock.png'
                          alt='BiCodeBlock'
                        ></img>
                      </i>
                    </div>
                  </div>
                  <div className='cardtext'>
                    <div className='expertisecardtitle'>
                      <p>
                        <h4>Développement web</h4>
                      </p>
                    </div>
                    <div className='expertisecardnote1'>
                      <p>
                        Nous proposons une large gamme de
                        <br />
                        services de développement Web
                        <br /> personnalisés de bout qui
                        <br /> répondent à divers besoins et secteurs
                        <br /> d'activité.
                      </p>
                    </div>
                  </div>
                  <div class='expertisecardbutton1'>
                    <a href='#'>
                      <b>Découvrir</b>
                    </a>
                  </div>
                </div>
              </div>
              {/* end card */}
              {/* card 5*/}
              <div className='expertisecard'>
                <div className='expertisecardinside'>
                  <div className='iconbox'>
                    <div className='expertiseicon5'>
                      <br />
                      <br />
                      <br />
                      <br />
                      <i className='material-icons md-36'>
                        <img
                          src='./../../assets/images/ImMobile.png'
                          alt='ImMobile'
                        ></img>
                      </i>
                    </div>
                  </div>
                  <div className='cardtext'>
                    <div className='expertisecardtitle'>
                      <p>
                        <h4>
                          Développement
                          <br />
                          mobile
                        </h4>
                      </p>
                    </div>
                    <div className='expertisecardnote1'>
                      <p>
                        Augmentez la portée de votre entreprise
                        <br /> et l'engagement de vos clients grace à<br />
                        notre vaste expertise en développement
                        <br />
                        mobile.
                      </p>
                    </div>
                  </div>
                  <div class='expertisecardbutton1'>
                    <a href='#'>
                      <b>Découvrir</b>
                    </a>
                  </div>
                </div>
              </div>
              {/* end card */}
              {/* card 6*/}
              <div className='expertisecard'>
                <div className='expertisecardinside'>
                  <div className='iconbox'>
                    <div className='expertiseicon6'>
                      <br />
                      <br />
                      <br />
                      <br />
                      <i className='material-icons md-36'>
                        <img
                          src='./../../assets/images/GiPencilBrush.png'
                          alt='GiPencilBrush'
                        ></img>
                      </i>
                    </div>
                  </div>
                  <div className='cardtext'>
                    <div className='expertisecardtitle'>
                      <p>
                        <h4>UI/UX Design</h4>
                      </p>
                    </div>
                    <div className='expertisecardnote1'>
                      <p>
                        Nous fournissons des services de
                        <br />
                        conception d'interface utilisateur (UI)
                        <br />
                        intuitive et d'experience utilisateur
                        <br />
                        (UX) engageante pour les applications
                        <br />
                        Web et mobile dans divers secteurs.
                      </p>
                    </div>
                  </div>
                  <div class='expertisecardbutton1'>
                    <a href='#'>
                      <b>Découvrir</b>
                    </a>
                  </div>
                </div>
              </div>
              {/* end card */}
            </div>
          </div>
        </div>
      </div>
      {/* Join our team */}
      <div>
        <div className='jointeam'>
          <div className='joininside'>
            <div className='jointitle'>
              <p>Join our team!</p>
            </div>
            <div className='joinnote'>
              <p>
                Nous favorisons une atmosphère amicale et solidaire, où le
                partage des connaissances et les initiatives sont valorisés et
                encouragés.
                <br />
                Chaque membre de notre équipe contribue à façonner l'évolution
                de notre entreprise
                <br />
              </p>
            </div>
            <div className='joinbutton'>
              <Link to='/contact'>Rejoindre</Link>
            </div>
          </div>
        </div>
      </div>
      {/*Nos Références*/}
      <div>
        <div className='references'>
          <div className='title'>
            <p>Nos Références</p>
          </div>
          <div className='slideshow'>
            <div className='slidecontainer'>
              <br />
              <Slider {...settings}>
                <div className='totallogo'>
                  <img
                    src={require('.//image/Total-logo.jpg')}
                    alt='Total logo'
                  />
                </div>
                <div className='apialogo'>
                  <img
                    src={require('.//image/APIA-logo.jpg')}
                    alt='APIA logo'
                  />
                </div>
                <div className='iotlogo'>
                  <img src={require('.//image/IoT-logo.jpg')} alt='IoT logo' />
                </div>
                <div className='wsalogo'>
                  <img src={require('.//image/WSA-logo.jpg')} alt='WSA logo' />
                </div>
                <div className='Germanlogo'>
                  <img
                    src={require('.//image/German-logo.jpg')}
                    alt='German logo'
                  />
                </div>
                {/* <div>
                  <h2>6</h2>
                </div>
                <div>
                  <h2>7</h2>
                </div>
                <div>
                  <h2>8</h2>
                </div> */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
