import express from 'express'
import type { Request, Response } from 'express'
import { applyMainMiddlewares } from './server/middlewares/app.middleware'
import type { RestTestDTO } from './server/dtos/rest-test.dto'
import { ConfigService } from './application/config/config.service'
import { DatabaseService } from './infrastructure/database/database.service'
import { buildUsersRouter } from './server/routes/users.routes'
import { UserRepository } from './application/user/user.repository'
import { UserService } from './application/user/user.service'

void (async () => {
  const config = ConfigService.getInstance().getAll()
  const PORT = config.server.port
  await DatabaseService.initialize(config.database)

  const app = express()
  applyMainMiddlewares(app)

  // Composition root: construct per-request agnostic services/repositories

  // TODO: Figure out a better way to manage the lifecycle of these
  const userRepo = new UserRepository(
    DatabaseService.getInstance(config.database)
  )
  const userService = new UserService(userRepo)
  app.use('/users', buildUsersRouter(userService))

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

  app.post('/rest-test', (req: Request, res: Response) => {
    const requestBody = req.body as RestTestDTO
    const multiplier = requestBody?.num ?? 1
    const text = requestBody?.text ?? 'Invalid payload'
    const handledString = text.repeat(multiplier)
    const responseBody = {
      message: 'POST request received',
      ...requestBody,
      ts: new Date().toISOString(),
      handledString
    }
    res.json(responseBody).status(200)
  })

  app.post('/num/:num', (req: Request, res: Response) => {
    const num = parseInt(req.params.num, 10)
    if (isNaN(num)) {
      res.status(400).json({ error: 'Invalid number parameter' })
      return
    }
    const responseNumber = num * 4
    const responseBody = {
      message: 'Number processed',
      originalNumber: num,
      responseNumber,
      ts: new Date().toISOString()
    }
    res.json(responseBody).status(200)
  })

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
})()
