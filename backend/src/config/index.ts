const DEFAULT_PORT = 3000

export interface AppConfig {
  port: number
  nodeEnv: string
}

export function loadConfig(): AppConfig {
  const rawPort = Number(process.env.PORT ?? DEFAULT_PORT)
  const port = Number.isFinite(rawPort) && rawPort > 0 ? rawPort : DEFAULT_PORT

  return {
    port,
    nodeEnv: process.env.NODE_ENV ?? 'development',
  }
}

export const config = loadConfig()
