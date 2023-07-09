import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, ZodError } from 'zod'

export const schemaValidator = (schema: AnyZodObject) =>
  (request: Request, response: Response, next: NextFunction) => {
    try {
      schema.parse({ ...request.body, ...request.params })
      return next()
    } catch (error) {
      if (error instanceof ZodError) {
        const responseObject = error.issues.map(issue => ({
          field: issue.path.length === 1 ? issue.path.pop() : issue.path,
          message: issue.message
        }))
        return response.status(400).json(responseObject)
      }
      return response.status(400).json(error)
    }
  }