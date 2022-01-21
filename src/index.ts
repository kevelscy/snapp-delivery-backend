// import server from './server'

// server.listen(server.get('PORT'), () => {
//   console.log(`Listening in the port ${server.get('PORT')}`)
// })

import express from 'express'
import dotenv from 'dotenv'
import {
  HandleErrors,
  NotFound,
  SignInRoutes,
  SignUpRoutes,
  RefreshTokenRoutes,
  UsersRoutes
} from './routes'

const router = express.Router()
const server = express()
dotenv.config()

const RootRouter = router.get('/', (req, res) => {
  return res.status(200).json({
    data: 'epale',
    error: null
  })
})

server.use('/api', SignInRoutes)
server.use('/api', SignUpRoutes)
server.use('/api', RefreshTokenRoutes)
server.use('/api', UsersRoutes)
server.use(RootRouter)
server.use(NotFound)
server.use(HandleErrors)

server.listen(process.env.PORT || 4000, () => {
  console.log('Listeting in the port' + process.env.PORT || 4000)
})