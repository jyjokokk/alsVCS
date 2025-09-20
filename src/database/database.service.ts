import { DataSource } from 'typeorm'
import path from 'path'
import dotenv from 'dotenv'
import type { DatabaseConfig } from '../app/services/config/config.types'
import { DatabaseError } from '../common/errors/errors'

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
      const entitiesPath = path.join(__dirname, '../**/*.entity.{ts,js}')

      DatabaseService.instance = new DataSource({
        ...config,
        type: 'postgres',
        synchronize: true,
        logging: false,
        // TODO: find out if this works
        entities: [entitiesPath]
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
