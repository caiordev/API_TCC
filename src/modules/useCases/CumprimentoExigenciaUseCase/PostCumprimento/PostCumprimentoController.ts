import { Request, Response } from 'express';
import { PostCumprimentoUseCase } from './PostCumprimentoUseCase';

export class PostCumprimentoController {
  constructor(private postCumprimentoUseCase: PostCumprimentoUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { ID_PATENTE, VALOR, SERVICO, PRAZO, PAGAMENTO, PROCESSOSEI, TIPO } =
      request.body;
    try {
      const registeredCumprimento = await this.postCumprimentoUseCase.execute({
        ID_PATENTE,
        VALOR,
        SERVICO,
        PRAZO,
        PAGAMENTO,
        PROCESSOSEI,
      });

      return response.status(201).json(registeredCumprimento);
    } catch (error) {
      if (error.message === 'User already exists') {
        return response.status(409).json({
          message: 'User already exists!',
        });
      }

      return response.status(500).json({
        message: 'Internal server error',
      });
    }
  }
}
