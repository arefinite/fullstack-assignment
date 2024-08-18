import { NextFunction, Request, Response } from "express"


export const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => { 
  const statusCode = err.statusCode || 500
  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
  })
}