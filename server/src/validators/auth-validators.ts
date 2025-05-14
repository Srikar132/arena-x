import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import { BadRequestError } from '../errors/app-error';

// Define schemas
const createExampleSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  age: z.number().int().positive().optional(),
});

export const validateCreateExample = (req: Request, _res: Response, next: NextFunction) => {
  try {
    const validatedData = createExampleSchema.parse(req.body);
    req.body = validatedData;
    next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errorMessage = error.errors
        .map((err) => `${err.path.join('.')}: ${err.message}`)
        .join(', ');
      next(new BadRequestError(`Validation error: ${errorMessage}`));
    } else {
      next(error);
    }
  }
};

// More validators for other routes...
