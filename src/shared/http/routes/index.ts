import express from 'express';
import { createPagamentoController } from '../../../modules/useCases/PagamentoUseCase/PostPagamento';
import { createPatenteController } from '../../../modules/useCases/PatenteUseCase/PostPatente';

const router = express.Router();

router.post('/patente', (request, response) => {
  return createPatenteController.handle(request, response);
});

router.post('/pagamento', (request, response) => {
  return createPagamentoController.handle(request, response);
});

export default router;
