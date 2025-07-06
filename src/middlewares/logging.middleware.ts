import morgan from 'morgan'
import type { Application } from 'express'

export function applyLoggingMiddleware(app: Application): void {
  // TODO: Handle logging configuration based on environment variables
  app.use(morgan('dev'))
}
