import { Request, Response } from 'express'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'

import prisma from '../../../lib/prisma'
import { config } from '../../../config'

const { HTTP: { STATUS_CODE } } = config

export const handlerSignIn = async (req: Request, res: Response) => {
  const { username, password } = req.body

  if (!username || !password) return res.status(config.HTTP.STATUS_CODE.FIELDS_REQUIRED)
    .json({ data: null, error: 'FIELDS_REQUIRED' })

  const userFounded = await prisma.user.findFirst({
    where: { username }
  })

  if (!userFounded) return res.status(config.HTTP.STATUS_CODE.INCORRECT_CREDENTIALS)
    .json({ data: null, error: 'INCORRECT_CREDENTIALS' })

  const isVerified = compare(userFounded.passwordHashed, password)

  if (!isVerified) {

    return res.status(STATUS_CODE.INCORRECT_CREDENTIALS)
      .json({ data: null, error: 'INCORRECT_CREDENTIALS' })

  } else {

    const token = sign(userFounded.id, config.JWT.SECRET, { expiresIn: 60 })

    const userNormalize = {
      id: userFounded.id,
      name: userFounded.name || '',
      lastname: userFounded.lastname || '',
      username: userFounded.username,
    }

    return res.status(200).json({
      data: {
        userInfo: userNormalize,
        accessToken: token
      },
      error: null
    })
  }
}
