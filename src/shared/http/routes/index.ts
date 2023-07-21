import express, { response } from 'express';
import { createPedidoController } from '../../../modules/useCases/PedidoUseCase/PostPedido';
import { createPatenteController } from '../../../modules/useCases/PatenteUseCase/PostPatente';
import { createExameController } from '../../../modules/useCases/ExameUseCase/PostExame';

export const router = express.Router();

router.post('/patente', (request, response) => {
  return createPatenteController.handle(request, response);
});

router.post('/pagamento', (request, response) => {
  return createPedidoController.handle(request, response);
});

router.post('/exame', (request, response) => {
  return createExameController.handle(request, response);
});

module.exports = { router };
