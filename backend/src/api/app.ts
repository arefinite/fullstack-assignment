import express, { NextFunction, Request, Response } from 'express'
import path from 'node:path'
import cors from 'cors'
import { config } from '../config/config'
import morgan from 'morgan'
import { globalErrorHandler } from './middleware/globalErrorHandler'
import { helpCardRouter } from './route/helpCard.route'

export const app = express()

//middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: config.FRONTEND_URL, credentials: true }))
if (config.NODE_ENV === 'dev') {
  app.use(morgan('dev'))
}
app.use(express.static(path.join(__dirname, '../../../client/dist')))

//routes
app.get('/api/v1/ping', (req: Request, res: Response) => {
  res.send('Server is running')
})
app.use('/api/v1/cards', helpCardRouter)

//not found route
app.use('/api/v1', (req: Request, res: Response) => {
  res.status(404).json({ message: 'Not route found' })
})

//custom error logger
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(
    `Invalid field: ${err.fieldName} - Invalid value: ${err.value} - Error message: ${err.message} - Error name: ${err.name}`
  )
  next(err)
})

//global error handler
app.use(globalErrorHandler)
