import { DataSource } from 'typeorm'
import dotenv from 'dotenv'
import type { DatabaseConfig } from 'src/application/config/config.types'
import { DatabaseError } from 'src/common/errors/errors'
import { UserEntity } from 'src/entities/user/user.entity'

dotenv.config()

export class DatabaseService {
  private static instance: DataSource

  private constructor() {}

  public static getInstance(config?: DatabaseConfig): DataSource {
    if (!DatabaseService.instance) {
      if (!config) {
        throw new DatabaseError(
          'Database configuration must be provided on first initialization'
        )
      }

      DatabaseService.instance = new DataSource({
        ...config,
        type: 'postgres',
        synchronize: true, // TODO: replace with migrations
        logging: false,
        entities: [UserEntity]
      })
    }
    return DatabaseService.instance
  }

  public static async initialize(config?: DatabaseConfig): Promise<void> {
    const dataSource = this.getInstance(config)
    if (!dataSource.isInitialized) {
      await dataSource.initialize()
      console.log('Database connection established')
    }
  }
}
