import { Router } from 'express'
import { createRefreshToken, createToken } from './controllers'
const router = Router()

router.post('/refreshToken', createRefreshToken)
router.post('/token', createToken)

export { router as RefreshTokenRoutes }
