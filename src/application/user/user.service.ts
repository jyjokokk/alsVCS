import type { User, UserCreate } from '../../entities/user/user.types'
import type { UserRepository } from './user.repository'

export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.findAll()
  }

  async getUserById(id: string): Promise<User | null> {
    return this.userRepository.findById(id)
  }

  async createUser(userData: UserCreate): Promise<User> {
    return this.userRepository.create(userData)
  }

  async updateUser(id: string, partial: Partial<User>): Promise<User | null> {
    return this.userRepository.update(id, partial)
  }

  async deleteUser(id: string): Promise<boolean> {
    return this.userRepository.delete(id)
  }
}
