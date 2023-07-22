import express, { response } from 'express';
import { createPedidoController } from '../../../modules/useCases/PedidoUseCase/PostPedido';
import { createPatenteController } from '../../../modules/useCases/PatenteUseCase/PostPatente';
import { createExameController } from '../../../modules/useCases/ExameUseCase/PostExame';
import { authenticateUserController } from '../../../modules/useCases/UserUseCase/AuthenticateUser';
import { ensureAuthenticated } from '../../../modules/middlewares/ensureAuthenticated';

export const router = express.Router();

router.post('/patente', (request, response) => {
  return createPatenteController.handle(request, response);
});

router.post('/pedido', (request, response) => {
  return createPedidoController.handle(request, response);
});

router.post('/exame', (request, response) => {
  return createExameController.handle(request, response);
});

router.post('/login', (request, response) => {
  return authenticateUserController.handle(request, response);
});

router.get('/verify', ensureAuthenticated, (request, response) => {
  return response.json({ authenticated: true });
});

module.exports = { router };
