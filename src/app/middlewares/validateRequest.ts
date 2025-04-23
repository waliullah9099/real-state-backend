import { NextFunction, Request, Response } from 'express';
import { AnyZodObject } from 'zod';

const validateRequest = (schema: AnyZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {

     const parsedBody = await schema.parseAsync({
        body: req.body,
      });

      req.body = parsedBody.body;

      next();
    } catch (error) {
      next();
    }
  };
};


export default validateRequest