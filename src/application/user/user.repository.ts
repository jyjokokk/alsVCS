import type { DataSource, Repository } from 'typeorm'
import { UserEntity } from 'src/entities/user/user.entity'
import type { User, UserCreate } from 'src/entities/user/user.types'
import type { RepositoryService } from 'src/infrastructure/database/repository.interface'
import { DatabaseError } from 'src/common/errors/errors'

export class UserRepository implements RepositoryService<User> {
  private repository: Repository<UserEntity>

  constructor(dataSource: DataSource) {
    this.repository = dataSource.getRepository(UserEntity)
  }

  async findAll(): Promise<UserEntity[]> {
    return this.repository.find()
  }

  async findById(id: string): Promise<User | null> {
    return this.repository.findOneBy({ id })
  }

  async create(entity: UserCreate): Promise<User> {
    const user = this.repository.create(entity)
    return this.repository.save(user)
  }

  async update(id: string, entity: Partial<User>): Promise<User> {
    await this.repository.update(id, entity)
    const updatedUser = await this.repository.findOneBy({ id })
    if (!updatedUser) {
      throw new DatabaseError('User not found')
    }
    return updatedUser
  }

  async delete(id: string): Promise<boolean> {
    const { affected } = await this.repository.delete(id)
    return !!affected
  }
}
