import { Request, Response } from 'express'
import { hash } from 'bcrypt'
import { v4 as uuidv4 } from 'uuid'

import { sign } from 'jsonwebtoken'

import prisma from '../../../lib/prisma'
import { config } from '../../../config'

const { HTTP: { STATUS_CODE } } = config

export const handlerSignUp = async (req: Request, res: Response) => {
  const { name, lastname, username, email, password } = req.body

  if (!username || !email || !password) return res.status(config.HTTP.STATUS_CODE.FIELDS_REQUIRED)
    .json({ data: null, error: 'FIELDS_REQUIRED' })

  const id = uuidv4()
  const refreshToken = uuidv4()
  const emailHashed = await hash(email, 10)
  const passwordHashed = await hash(password, 10)
  const token = sign(id, config.JWT.SECRET)

  const userCreated = await prisma.user.create({
    data: {
      id,
      name: name || '',
      lastname: lastname || '',
      username,
      emailHashed,
      passwordHashed
    }
  })

  console.log({ userCreated })

  if (!userCreated) {

    return res.status(STATUS_CODE.CONFLICT_TO_CREATE_USER)
      .json({ data: null, error: 'CONFLICT_TO_CREATE_USER' })

  } else {

    const userNormalize = {
      id: userCreated.id,
      name: userCreated.name || '',
      lastname: userCreated.lastname || '',
      username: userCreated.username,
    }

    return res.status(200).json({
      data: {
        userInfo: userNormalize,
        accessToken: token,
        refreshToken
      },
      error: null
    })
  }
}
