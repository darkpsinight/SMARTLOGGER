import React from 'react'
import Joi from 'joi'
import Form from '../../utils/Form'
import Mail from '../../service/mail'
import Footer from './../Footer/index'
import { toast } from 'react-toastify'
import './contact.css'

class Contact extends Form {
  state = {
    data: { email: '', nom: '', message: '' },
    errors: {},
  }

  globalSchema = {
    nom: Joi.string().min(3).max(15).required().label('Nom'),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
      .required()
      .label('Email'),
    message: Joi.string().min(10).max(255).label('Message'),
  }

  // Take a copy of global schema to validate 1 specific field
  schema = Joi.object(this.globalSchema)

  // Send Email
  async doSubmit() {
    try {
      Mail.send(this.state.data)
      toast.success('Mail was successfully sent')
      this.handleReset()
    } catch (ex) {
      console.log(ex)
      if (ex.response && ex.response.status === 400)
        toast.error(ex.response.data.message)
    }
  }

  render() {
    const { data, errors } = this.state
    return (
      <div className='background-text'>
        <div>
          <section
            class='heading-page header-text'
            id='background_image_contact'
          >
            <div class='container1'>
              <div class='row'>
                <div className='text'>
                  <div className='contact_titre'>
                    <p>Parlez-nous de votre besoin</p>
                  </div>
                  <div className='contact_text'>
                    <p>
                      N'hésitez pas à nous contacter pour toutes informations
                      complémentaires. Nous serions très heureux de recevoir et
                      traiter votre consultation.
                    </p>
                    <br />
                  </div>
                </div>
                {/* form-contact */}
                <div className='contact-form'>
                  <form id='contact' onSubmit={this.handleSubmit}>
                    <div>
                      <div className='form_title'>
                        <p>Contactez Nous</p>
                      </div>
                      <div className='col-md-12 mt-5'>
                        <div className='textOnInput'>
                          <label htmlFor='inputText'>Nom</label>
                          <input
                            className='form-control'
                            type='text'
                            placeholder='Nom'
                            name='nom'
                            required
                            value={data.nom}
                            onChange={this.handleChange}
                          />
                          {errors.nom && (
                            <span className='form-text text-danger'>
                              {errors.nom}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className='col-md-12 mt-5'>
                        <div className='textOnInput'>
                          <label htmlFor='inputText'>Email</label>
                          <input
                            className='form-control'
                            type='text'
                            pattern='[^ @]*@[^ @]*'
                            placeholder='Email'
                            name='email'
                            required
                            value={data.email}
                            onChange={this.handleChange}
                          />
                          {errors.email && (
                            <span className='form-text text-danger'>
                              {errors.email}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className='col-md-12 mt-5'>
                        <div className='textOnInput'>
                          <label htmlFor='inputText'>Message</label>
                          <textarea
                            className='form-control'
                            id='form_message'
                            type='text'
                            pattern='[^ @]*@[^ @]*'
                            placeholder='Message'
                            name='message'
                            value={data.message}
                            onChange={this.handleChange}
                          />
                          {errors.message && (
                            <span className='form-text text-danger'>
                              {errors.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div className='input_button'>
                        <fieldset>
                          <button
                            type='submit'
                            value='Submit'
                            id='form-submit'
                            className='button'
                            disabled={this.isEnabledButton()}
                          >
                            Envoyer
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
          {/* end form contact */}
          {/* google map */}
          <div className='google-map-code'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1617.5897342122896!2d10.592226!3d35.8200722!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd8aebdb6f220d%3A0x83109a00ef5984cb!2sBusiness%20Incubator%20-%20Sousse%20pole!5e0!3m2!1sen!2stn!4v1646761151990!5m2!1sen!2stn'
              width='100%'
              height='450'
              style={{ border: 0, marginTop: 250 }}
              allowfullscreen=''
              loading='lazy'
              aria-hidden='false'
              tabindex='0'
            ></iframe>
          </div>
          {/* end google map */}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Contact
