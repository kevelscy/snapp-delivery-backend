// import server from './server'

// server.listen(server.get('PORT'), () => {
//   console.log(`Listening in the port ${server.get('PORT')}`)
// })

import express from 'express'
const server = express()

server.get('/', (req, res) => {
  return res.status(200).json({
    data: 'Epale',
    error: null
  })
})

server.listen(process.env.PORT || 4000, () => {
  console.log('Listening in the port 4000')
})