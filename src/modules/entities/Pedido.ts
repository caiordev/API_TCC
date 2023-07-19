import { v4 } from 'uuid';

export class Pedido {
  public readonly ID?: string;
  public readonly ID_PATENTE?: string;
  public VALOR: number;

  constructor(props: Omit<Pedido, 'ID'>, ID?: string) {
    Object.assign(this, props);
    if (!ID) {
      this.ID = v4();
    }
  }
}
