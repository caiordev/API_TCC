import { Pedido } from '../entities/Pedido';

export interface IPedidoRepository {
  getPedido(): Promise<Pedido[]>;
  save(pedido: Pedido): Promise<void>;
  findById(ID: string): Promise<Pedido>;
}
