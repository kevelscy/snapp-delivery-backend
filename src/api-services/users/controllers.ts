import { Request, Response } from 'express';

export const getUsers = (req: Request, res: Response) => {
  return res.status(200).json([
    {
      userInfo: {
        id: 1,
        name: 'Kevin',
        lastname: 'Blanco',
        username: 'kevelscy',
        email: 'kevelscy@gmail.com'
      },
      accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOiIyZXMyYi1kYTZzYi1hc2Q1dy0yZXd2MnYiLCJpYXQiOjE1MTYyMzkwMjJ9.lD0tDfvNMOQ6A5gzi2dxsMrKa4bkMlZrSgD7dfNCqOM',
      refreshToken: 'ds2d8-he1wk-as6eq-b15s6'
    },
    {
      userInfo: {
        id: 2,
        name: 'Mario',
        lastname: 'Peña',
        username: 'mappedev',
        email: 'mappedev@gmail.com'
      },
      accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWQiOiIyZXMyYi1kYTZzYi1hc2Q1dyd2MnYiLCJpYXQiOjE1MTYyMzkwMjJ9.lD0tDfvNMOQ6A5gzi2dxsMrKa4bkMlZrSgD7dfNCqOM',
      refreshToken: 'ds2d8-he1wk-as6eq-b15s2'
    },
  ])
}