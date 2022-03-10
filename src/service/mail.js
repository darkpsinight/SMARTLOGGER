import http from './http'

function send({ nom, email, message }) {
  const body = {
    name: nom,
    from: 'barhoumi.ragheb@gmail.com',
    sendTo: email,
    subject: 'Hello from our team',
    message: message,
  }
  const url = 'https://smartlogger.ovh/email'

  return http.post(url, body)
}

const Mail = {
  send,
}

export default Mail