import { Request, Response } from 'express'
import { SignInRoutes } from '../api-services/auth/signin/routes'
import { SignUpRoutes } from '../api-services/auth/signup/routes'
import { RefreshTokenRoutes } from '../api-services/auth/refreshToken/routes'
import { UsersRoutes } from '../api-services/users/routes'

const Root = (req: Request, res:Response) => {
  return res.status(204).json({
    message: 'Redirect to',
    routes: ['/api/signin', '/api/signup', '/api/users']
  })
}

const NotFound = (req: Request, res: Response) => {
  res.status(204).json({
    message: 'Root not found please go to /api route'
  })
}

const HandleErrors = (req: Request, res: Response) => {
  return res.status(500).json({
    message: 'Error Server'
  })
}

export {
  SignUpRoutes,
  SignInRoutes,
  RefreshTokenRoutes,
  UsersRoutes,
  Root,
  NotFound,
  HandleErrors
}