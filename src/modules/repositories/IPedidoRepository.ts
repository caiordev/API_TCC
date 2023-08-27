import { Pedido } from '../entities/Pedido';

export interface IPedidoRepository {
  getPedido(): Promise<Pedido[]>;
  save(pedido: Pedido): Promise<void>;
  findById(ID: string): Promise<Pedido>;
  updatePatente(
    ID: string,
    VALOR: number,
    CODIGO: number,
    DATAPAG: Date,
    PROCESSOSEI: number,
  ): Promise<Pedido[]>;
  deletePatente(ID: string): Promise<Pedido[]>;
}
