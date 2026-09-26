import { config as loadEnv } from 'dotenv'
import path from 'node:path'

// Carga el .env de la raíz del repositorio (../.env respecto de backend/).
// En Docker Compose las variables ya vienen inyectadas por `environment`,
// así que este load es un no-op (dotenv no sobreescribe variables existentes).
loadEnv({ path: path.resolve(process.cwd(), '../.env') })

const DEFAULT_PORT = 3000
const DEFAULT_DATABASE_URL = 'postgres://app:app@localhost:5432/pedidos'

export interface DatabaseConfig {
  url: string
}

export interface AppConfig {
  port: number
  nodeEnv: string
  database: DatabaseConfig
}

export function loadConfig(): AppConfig {
  const rawPort = Number(process.env.PORT ?? DEFAULT_PORT)
  const port = Number.isFinite(rawPort) && rawPort > 0 ? rawPort : DEFAULT_PORT

  return {
    port,
    nodeEnv: process.env.NODE_ENV ?? 'development',
    database: {
      url: process.env.DATABASE_URL ?? DEFAULT_DATABASE_URL,
    },
  }
}

export const config = loadConfig()
