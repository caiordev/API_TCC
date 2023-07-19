import { NextFunction, Request, Response } from "express"; // Importa os tipos NextFunction, Request e Response do módulo 'express'
import { verify } from "jsonwebtoken"; // Importa a função verify do módulo 'jsonwebtoken'

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authToken = request.headers.authorization; // Obtém o token de autenticação do cabeçalho da requisição

  if (!authToken) {
    return response.status(401).json({
      message: "Token is missing", // Retorna uma resposta com status 401 (Unauthorized) se o token não estiver presente
    });
  }

  // Capturando token
  const [, token] = authToken.split(" "); // Divide a string do token pelo espaço em branco e captura o token em si

  try {
    verify(token, "c957b733-7a23-41d5-96b7-fa8374f8e582"); // Verifica a validade do token usando a chave secreta "c957b733-7a23-41d5-96b7-fa8374f8e582"

    return next(); // Se o token for válido, chama a próxima função/middleware
  } catch (error) {
    return response.status(401).json({
      message: "Token invalid", // Retorna uma resposta com status 401 (Unauthorized) se o token for inválido
    });
  }
}
