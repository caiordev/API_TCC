import express from 'express';
import { createPedidoController } from '../../../modules/useCases/PedidoUseCase/PostPedido';
import { createPatenteController } from '../../../modules/useCases/PatenteUseCase/PostPatente';
import { createExameController } from '../../../modules/useCases/ExameUseCase/PostExame';
import { authenticateUserController } from '../../../modules/useCases/UserUseCase/AuthenticateUser';
import { ensureAuthenticated } from '../../../modules/middlewares/ensureAuthenticated';
import { getPatenteController } from '../../../modules/useCases/PatenteUseCase/GetPatente';
import { getPedidoController } from '../../../modules/useCases/PedidoUseCase/GetPedido';
import { getExameController } from '../../../modules/useCases/ExameUseCase/GetExame/inde';
import { createUserController } from '../../../modules/useCases/UserUseCase/PostUser';
import { createAnuidadeController } from '../../../modules/useCases/AnuidadeUseCase/PostAnuidade';
import { getAnuidadeController } from '../../../modules/useCases/AnuidadeUseCase/GetAnuidade';

export const router = express.Router();

router.post('/patente', (request, response) => {
  return createPatenteController.handle(request, response);
});
router.get('/patente', (request, response) => {
  return getPatenteController.handle(request, response);
});

router.post('/pedido', (request, response) => {
  return createPedidoController.handle(request, response);
});
router.get('/pedido', (request, response) => {
  return getPedidoController.handle(request, response);
});

router.post('/exame', (request, response) => {
  return createExameController.handle(request, response);
});
router.get('/exame', (request, response) => {
  return getExameController.handle(request, response);
});

router.post('/anuidade', (request, response) => {
  return createAnuidadeController.handle(request, response);
});
router.get('/anuidade', (request, response) => {
  return getAnuidadeController.handle(request, response);
});

router.post('/user', (request, response) => {
  return createUserController.handle(request, response);
});

router.post('/login', (request, response) => {
  return authenticateUserController.handle(request, response);
});

router.get('/verify', ensureAuthenticated, (request, response) => {
  return response.json({ authenticated: true });
});

module.exports = { router };
