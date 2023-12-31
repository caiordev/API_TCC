import { v4 } from 'uuid';

export class Pedido {
  public readonly ID?: string;
  public ID_PATENTE: string;
  public VALOR: number;
  public CODIGO: number;
  public DATAPAG: Date;
  public PROCESSOSEI: number;

  constructor(props: Omit<Pedido, 'ID'>, ID?: string) {
    Object.assign(this, props);
    if (!ID) {
      this.ID = v4();
    }
  }
}
