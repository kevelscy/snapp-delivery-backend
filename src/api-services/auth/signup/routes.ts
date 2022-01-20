import { Router } from 'express'
import { handlerSignUp } from './controllers'

const router = Router()

router.post('/signup', handlerSignUp)

export { router as SignUpRoutes }