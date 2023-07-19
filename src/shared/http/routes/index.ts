import express from 'express';
import { createPedidoController } from '../../../modules/useCases/PedidoUseCase/PostPedido';
import { createPatenteController } from '../../../modules/useCases/PatenteUseCase/PostPatente';

const router = express.Router();

router.post('/patente', (request, response) => {
  return createPatenteController.handle(request, response);
});

router.post('/pagamento', (request, response) => {
  return createPedidoController.handle(request, response);
});

export default router;
