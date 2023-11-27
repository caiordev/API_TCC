import express, { response } from 'express';
import { createPedidoController } from '../../../modules/useCases/PedidoUseCase/PostPedido';
import { createPatenteController } from '../../../modules/useCases/PatenteUseCase/PostPatente';
import { createExameController } from '../../../modules/useCases/ExameUseCase/PostExame';
import { authenticateUserController } from '../../../modules/useCases/UserUseCase/AuthenticateUser';
import { ensureAuthenticated } from '../../../modules/middlewares/ensureAuthenticated';
import { getPatenteController } from '../../../modules/useCases/PatenteUseCase/GetPatente';
import { getPedidoController } from '../../../modules/useCases/PedidoUseCase/GetPedido';
import { getExameController } from '../../../modules/useCases/ExameUseCase/GetExame';
import { createUserController } from '../../../modules/useCases/UserUseCase/PostUser';
import { createAnuidadeController } from '../../../modules/useCases/AnuidadeUseCase/PostAnuidade';
import { getAnuidadeController } from '../../../modules/useCases/AnuidadeUseCase/GetAnuidade';
import { updateAnuidadeController } from '../../../modules/useCases/AnuidadeUseCase/UpdateAnuidade';
import { deleteAnuidadeController } from '../../../modules/useCases/AnuidadeUseCase/DeleteAnuidade';
import { deleteExameController } from '../../../modules/useCases/ExameUseCase/DeleteExame';
import { updateUserController } from '../../../modules/useCases/UserUseCase/UpdateUser';
import { testeController } from '../../../modules/useCases/ConsultasUseCase/Patente';
import { anuidadeConsultaController } from '../../../modules/useCases/ConsultasUseCase/anuidade';
import { deleteUserController } from '../../../modules/useCases/UserUseCase/DeleteUser';
import { deletePedidoController } from '../../../modules/useCases/PedidoUseCase/DeletePedido';
import { deletePatenteController } from '../../../modules/useCases/PatenteUseCase/DeletePatente';
import { getByIdPatenteController } from '../../../modules/useCases/PatenteUseCase/GetByIdPatente';

export const router = express.Router();

//Patente
router.get('/patente', (request, response) => {
  return getPatenteController.handle(request, response);
});
router.get('/patente/:ID', (request, response) => {
  return getByIdPatenteController.handle(request, response);
});

router.post('/patente', (request, response) => {
  return createPatenteController.handle(request, response);
});

router.delete('/patente/:ID', (request, response) => {
  return deletePatenteController.handler(request, response);
});

router.post('/pedido', (request, response) => {
  return createPedidoController.handle(request, response);
});
router.get('/pedido', (request, response) => {
  return getPedidoController.handle(request, response);
});
router.delete('/pedido/:ID', (request, response) => {
  return deletePedidoController.handler(request, response);
});

router.post('/exame', (request, response) => {
  return createExameController.handle(request, response);
});
router.get('/exame', (request, response) => {
  return getExameController.handle(request, response);
});

router.delete('/exame/:ID', (request, response) => {
  return deleteExameController.handle(request, response);
});

router.post('/anuidade', (request, response) => {
  return createAnuidadeController.handle(request, response);
});
router.get('/anuidade', (request, response) => {
  return getAnuidadeController.handle(request, response);
});
router.put('/anuidade/:ID', (request, response) => {
  return updateAnuidadeController.handle(request, response);
});

router.delete('/anuidade/:ID', (request, response) => {
  return deleteAnuidadeController.handle(request, response);
});

router.post('/user', (request, response) => {
  return createUserController.handle(request, response);
});

router.put('/user/:ID', (request, response) => {
  return updateUserController.handle(request, response);
});

router.delete('user/:ID', (request, response) => {
  return deleteUserController.handler(request, response);
});

router.post('/login', (request, response) => {
  return authenticateUserController.handle(request, response);
});

router.get('/verify', ensureAuthenticated, (request, response) => {
  return response.json({ authenticated: true });
});

//Teste de consulta
router.get('/consultaPatente', (request, response) => {
  return testeController.handle(request, response);
});

router.get('/consultaAnuidade', (request, response) => {
  return anuidadeConsultaController.handle(request, response);
});

module.exports = { router };
