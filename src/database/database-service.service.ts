import { DataSource } from 'typeorm'
import path from 'path'
import dotenv from 'dotenv'
import { ConfigService } from '../app/services/config/config.service'

dotenv.config()

export class DatabaseService {
  private static instance: DataSource

  private constructor() {}

  public static getInstance(): DataSource {
    if (!DatabaseService.instance) {
      const entitiesPath = path.join(__dirname, '../**/*.entity.{ts,js}')

      const config = ConfigService.getInstance().get('database')

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

  public static async initialize(): Promise<void> {
    const dataSource = this.getInstance()
    if (!dataSource.isInitialized) {
      await dataSource.initialize()
      console.log('Database connection established')
    }
  }
}
