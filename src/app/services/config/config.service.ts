import { AppConfig } from './config.types'
import dotenv from 'dotenv'

dotenv.config()

export class ConfigService {
  private static instance: ConfigService
  private readonly config: AppConfig

  private constructor() {
    const envConfig: AppConfig = {
      server: {
        port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000
      },
      database: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
        user: process.env.DB_USER || 'postgres',
        password: process.env.DB_PASSWORD || 'postgres'
      }
    }
    this.config = envConfig
  }

  public static getInstance(): ConfigService {
    if (!ConfigService.instance) {
      ConfigService.instance = new ConfigService()
    }
    return ConfigService.instance
  }

  public get<T extends keyof AppConfig>(key: T) {
    return this.config[key]
  }

  public getMany<T extends keyof AppConfig>(keys: T[]) {
    const result: Partial<AppConfig> = {}
    keys.forEach((key) => {
      result[key] = this.config[key]
    })
    return result as Pick<AppConfig, T>
  }

  public getAll() {
    return this.config
  }
}
