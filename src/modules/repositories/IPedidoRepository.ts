import { Pedido } from '../entities/Pedido';

export interface IPedidoRepository {
  save(pedido: Pedido): Promise<void>;
  findById(ID: string): Promise<Pedido>;
}
