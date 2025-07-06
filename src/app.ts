import express from 'express'
import type { Request, Response } from 'express'
import { applyMainMiddlewares } from './middlewares/app.middleware'

const PORT = 8080

const app = express()
applyMainMiddlewares(app)

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello, world!')
})

app.get('/rest-test', (_req: Request, res: Response) => {
  res
    .json({
      message: 'This is a REST test endpoint',
      timestamp: new Date().toISOString()
    })
    .status(200)
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
