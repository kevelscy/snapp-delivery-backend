import { Request, Response } from 'express'
import { SignInRoutes } from '../api-services/auth/signin/routes'
import { SignUpRoutes } from '../api-services/auth/signup/routes'
import { RefreshTokenRoutes } from '../api-services/auth/refreshToken/routes'
import { UsersRoutes } from '../api-services/users/routes'

const NotFound = (req: Request, res: Response) => {
  return res.status(404).send({
    message: 'Root not found please go to /api route'
  })
}

const HandleErrors = (req: Request, res: Response) => {
  return res.status(500).send({
    message: 'Error Server'
  })
}

export {
  SignUpRoutes,
  SignInRoutes,
  RefreshTokenRoutes,
  UsersRoutes,
  NotFound,
  HandleErrors
}