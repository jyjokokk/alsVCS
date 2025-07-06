import cors from 'cors'

import { Request, Response, NextFunction } from 'express'

export const appMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Enable CORS for all routes
  cors()(req, res, () => {
    // Log the request method and URL
    console.log(`${req.method} ${req.url}`)
    next()
  })
}
