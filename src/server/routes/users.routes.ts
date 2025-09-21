import {
  Router,
  type Request,
  type Response,
  type RequestHandler
} from 'express'
import { z } from 'zod'
import type { UserService } from '../../application/user/user.service'

const createUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1)
})

const updateUserSchema = createUserSchema.partial()

// TODO: figure out what the hell is a async handler
// Async handler wrapper (standard minimal version)
const asyncHandler = (fn: RequestHandler): RequestHandler => {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next)
  }
}

// TODO: Move logic directing to controller, leave this just to be a router
// with just middleware handling etc.
export function buildUsersRouter(userService: UserService): Router {
  const router = Router()

  router.get(
    '/',
    asyncHandler(async (_req, res) => {
      const users = await userService.getAllUsers()
      res.json(users)
    })
  )

  router.get(
    '/:id',
    asyncHandler(async (req: Request, res: Response) => {
      const { id } = req.params as { id: string }
      const user = await userService.getUserById(id)
      if (!user) {
        res.status(404).json({ message: 'User not found' })
        return
      }
      res.json(user)
    })
  )

  router.post(
    '/',
    asyncHandler(async (req, res) => {
      const parseResult = createUserSchema.safeParse(req.body)
      if (!parseResult.success) {
        res.status(400).json({ errors: parseResult.error.flatten() })
        return
      }
      const created = await userService.createUser(parseResult.data)
      res.status(201).json(created)
    })
  )

  router.patch(
    '/:id',
    asyncHandler(async (req: Request, res: Response) => {
      const { id } = req.params as { id: string }
      const parseResult = updateUserSchema.safeParse(req.body)
      if (!parseResult.success) {
        res.status(400).json({ errors: parseResult.error.flatten() })
        return
      }
      const updated = await userService.updateUser(id, parseResult.data)
      if (!updated) {
        res.status(404).json({ message: 'User not found' })
        return
      }
      res.json(updated)
    })
  )

  router.delete(
    '/:id',
    asyncHandler(async (req: Request, res: Response) => {
      const { id } = req.params as { id: string }
      const ok = await userService.deleteUser(id)
      if (!ok) {
        res.status(404).json({ message: 'User not found' })
        return
      }
      res.status(204).send()
    })
  )

  return router
}
