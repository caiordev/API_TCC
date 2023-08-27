import { generateKeySync } from 'crypto';
import { Knex } from '../../../shared/database/knex';

import { Pedido } from '../../entities/Pedido';

import { IPedidoRepository } from '../IPedidoRepository';

export class DataBasePedidoRepository implements IPedidoRepository {
  public pedidos: Pedido[];

  async save(pedido: Pedido): Promise<void> {
    console.log('salvando pedido');
    try {
      await Knex('TABELA_PEDIDO').insert(pedido);
    } catch (error) {
      console.error('Error while saving pedido:', error);
    }
  }

  async getPedido(): Promise<Pedido[]> {
    this.pedidos = await Knex('TABELA_PEDIDO');
    return this.pedidos;
  }

  async findById(id: string): Promise<Pedido> {
    const pedidos = await Knex('TABELA_PEDIDO');
    const pedido = pedidos.find(e => {
      e.ID === id;
    });
    return pedido;
  }

  async updatePatente(
    ID: string,
    VALOR: number,
    CODIGO: number,
    DATAPAG: Date,
    PROCESSOSEI: number,
  ): Promise<Pedido[]> {
    await Knex('TABELA_PEDIDO')
      .update({
        VALOR: VALOR,
        CODIGO: CODIGO,
        DATAPAG: DATAPAG,
        PROCESSOSEI: PROCESSOSEI,
      })
      .where({ ID: ID });

    this.pedidos = await Knex('TABELA_PEDIDO');
    return this.pedidos;
  }

  async deletePatente(ID: string): Promise<Pedido[]> {
    await Knex('TABELA_PEDIDO').delete().where({ ID });
    this.pedidos = await Knex('TABELA_PEDIDO');
    return this.pedidos;
  }
}
