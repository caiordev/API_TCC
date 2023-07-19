import { v4 } from 'uuid';

export class Patente {
  public readonly ID?: string;

  public PROTOCOLO: number;
  public NATUREZA: string;
  //public DEPOSITO?: Date;
  //public TITULO: string;
  //public INVENTORES: string;
  //public IPC?: string;
  //public CPC?: string;
  //public COTITULAR: string;
  //public QREIVIND: number;
  //public STATUS: string;
  //public PROCESSO: string;
  //public CONCESSAO?: Date;

  constructor(props: Omit<Patente, 'ID'>, ID?: string) {
    Object.assign(this, props);
    if (!ID) {
      this.ID = v4();
    }
  }
}
