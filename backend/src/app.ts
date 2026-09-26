import express from 'express'
import type { Express } from 'express'
import { healthRouter } from './routes/health.js'

export function createApp(): Express {
  const app = express()

  app.use(express.json())
  app.use('/health', healthRouter)

  return app
}
