import { Request, Response } from 'express'
import { sign } from 'jsonwebtoken'
import { v4 as uuidv4 } from 'uuid'
import { config } from '../../../config'

export const createRefreshToken = async (req: Request, res: Response) => {
  const refreshToken = uuidv4()

  return res.status(200).json({
    data: refreshToken
  })
}

export const createToken = async (req: Request, res: Response) => {
  const { id } = req.body

  if (!id) return res.status(config.HTTP.STATUS_CODE.FIELDS_REQUIRED)
    .json({ data: null, error: 'ID_FIELD_REQUIRED' })

  const token = sign(id, config.JWT.SECRET, { expiresIn: 60 })

  return res.status(200).json({
    data: token,
    error: null
  })
}
