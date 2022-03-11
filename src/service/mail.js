import http from './http'

function send({ nom, email, message }) {
  const body = {
    name: nom,
    from: 'contact@smartlogger.com',
    sendTo: email,
    subject: 'Form Contact from SmartLogger website',
    message: message,
  }
  const url = 'https://smartlogger.ovh/email'

  return http.post(url, body)
}

const Mail = {
  send,
}

export default Mail
