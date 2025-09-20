import { DataSource } from 'typeorm'
import path from 'path'

export class DatabaseService {
  private static instance: DataSource

  private constructor() {}

  public static getInstance(): DataSource {
    if (!DatabaseService.instance) {
      const entitiesPath = path.join(__dirname, '../**/*.entity.{ts,js}')

      DatabaseService.instance = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'user',
        password: 'password',
        database: 'database',
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
