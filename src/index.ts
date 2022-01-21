// import server from './server'

// server.listen(server.get('PORT'), () => {
//   console.log(`Listening in the port ${server.get('PORT')}`)
// })

import express from 'express'
import dotenv from 'dotenv'

const router = express.Router()
const server = express()
dotenv.config()

const RootRouter = router.get('/', (req, res) => {
  return res.status(200).json({
    data: 'epale',
    error: null
  })
})

const SignInRouter = router.get('/signin', (req, res) => {
  return res.status(200).json({
    data: 'signin',
    error: null
  })
})

server.use('/api', SignInRouter)
server.use(RootRouter)

server.listen(process.env.PORT || 4000, () => {
  console.log('Listeting in the port' + process.env.PORT || 4000)
})