import cors from 'cors'
import express from 'express'
import type { Application } from 'express'
import { applyLoggingMiddleware } from './logging.middleware'

export function applyMainMiddlewares(app: Application): Application {
  app.use(cors())

  // TODO: move to a separate parsing middleware file
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  // app.use(multer())

  applyLoggingMiddleware(app)

  return app
}
