// import server from './server'

// server.listen(server.get('PORT'), () => {
//   console.log(`Listening in the port ${server.get('PORT')}`)
// })

import express from 'express'
// import morgan from 'morgan'
// import cors from 'cors'
import dotenv from 'dotenv'
import { config } from './config'
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
    data: 'epale 2',
    error: null
  })
})

server.set('PORT', process.env.PORT || config.PORT)

server.use(express.urlencoded({ extended: false }));
server.use(express.json())
// server.use(morgan('dev'))
// server.use(cors())

server.use('/api', SignInRoutes)
server.use('/api', SignUpRoutes)
server.use('/api', RefreshTokenRoutes)
server.use('/api', UsersRoutes)
server.use(RootRouter)
server.use(NotFound)
server.use(HandleErrors)

server.listen(server.get('PORT'), () => {
  console.log(`Listeting in the port ${server.get('PORT')}`)
})