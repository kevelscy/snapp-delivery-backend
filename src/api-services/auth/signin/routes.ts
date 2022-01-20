import { Router } from 'express'
import { handlerSignIn } from './controllers'

const router = Router()

router.post('/signin', handlerSignIn)

export { router as SignInRoutes }
