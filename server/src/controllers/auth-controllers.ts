import { Controller, Get, Middleware, Post } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { Request, Response } from 'express';
import { asyncHandler } from '../utils/async-handler';
import { validateCreateExample } from '../validators/auth-validators';

@Controller('api/users')
export class AuthController {
  private readonly logger = new Logger();
}
