import React from 'react'
import Footer from './../Footer/index'
import './apropos.css'

const Apropos = () => {
  return (
    <div className='background-text'>
      <div>
        <section class='heading-page header-text' id='background_image_apropos'>
          <div class='container1'>
            <div class='row'>
              <div className='apropos-text'>
                <div className='apropos-title'>
                  <p>QUI SOMMES NOUS ?</p>
                </div>
              </div>
              <div className='apropos_note'>
                <p>
                  SMART LOGGER est une startup Tunisienne nouvellement dévoilée
                  par une équipe d'ingénieurs. Grâce à son staff
                  multidisciplinaire et à ses rapports étroits avec ses
                  partenaires, elle fournit des solutions technologiques
                  innovantes ayant pour objectif d'accélérer la transformation
                  digitale de ses clients notamment dans les secteurs
                  industriel, agricole et médical.
                </p>
                <br />
              </div>
              {/* les 3 details */}
              <div className='details'>
                <div className='notre_mission'>
                  <div className='mission_icon'>
                    <img
                      src={require('.//img/iconmission.png')}
                      alt='notre mission icon'
                    />
                  </div>
                  <div className='mission_text'>
                    <p>Notre Mission</p>
                    <p>Accélérer la transformation digitale</p>
                  </div>
                </div>
                <div className='notre_vision'>
                  <div className='vision_icon'>
                    <img
                      src={require('.//img/iconvision.png')}
                      alt='notre mission icon'
                    />
                  </div>
                  <div className='vision_text'>
                    <p>Notre Vision</p>
                    <p>Rapprocher le futur</p>
                  </div>
                </div>
                <div className='notre_plan'>
                  <div className='plan_icon'>
                    <img
                      src={require('.//img/iconplan.png')}
                      alt='notre mission icon'
                    />
                  </div>
                  <div className='plan_text'>
                    <p>Notre Plan</p>
                    <p>Intégrer les nouvelles technologies</p>
                  </div>
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

export default Apropos
