import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

import { config } from './config'
import {
  HandleErrors,
  NotFound,
  SignInRoutes,
  SignUpRoutes,
  RefreshTokenRoutes,
  UsersRoutes
} from './routes'

const server = express()

server.set('PORT', process.env.PORT || config.PORT)

server.use(express.urlencoded({ extended: false }));
server.use(express.json())
server.use(cors())

server.use('/api', SignInRoutes)
server.use('/api', SignUpRoutes)
server.use('/api', RefreshTokenRoutes)
server.use('/api', UsersRoutes)
server.use(NotFound)
server.use(HandleErrors)

export default server