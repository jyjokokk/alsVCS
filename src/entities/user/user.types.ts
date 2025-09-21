import type { UserCreateSchema } from './user.dto'
import type { UserEntity } from './user.entity'
import type { z } from 'zod'

export type User = UserEntity

export type UserCreate = z.infer<typeof UserCreateSchema>
