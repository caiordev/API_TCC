import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authToken = request.headers.authorization;

  if (!authToken) {
    return response.status(401).json({
      message: 'Token is missing',
    });
  }

  const [, token] = authToken.split(' ');

  try {
    verify(token, 'c957b733-7a23-41d5-96b7-fa8374f8e582');

    return next();
  } catch (error) {
    return response.status(401).json({
      message: 'Token invalid', // Retorna uma resposta com status 401 (Unauthorized) se o token for inválido
    });
  }
}
