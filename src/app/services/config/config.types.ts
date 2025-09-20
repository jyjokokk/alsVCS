export interface DatabaseConfig {
  host: string
  port: number
  user?: string
  password?: string
}

export interface ServerConfig {
  port: number
}

export interface AppConfig {
  server: ServerConfig
  database: DatabaseConfig
}
