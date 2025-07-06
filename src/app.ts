import express from 'express'
import type { Request, Response } from 'express'
import { applyMainMiddlewares } from './middlewares/app.middleware'

const app = express()
applyMainMiddlewares(app)

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello, world!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
