import { v4 } from 'uuid';

export class Exame {
  public readonly ID?: string;
  public ID_PATENTE: string;
  public VALOR: number;
  public SERVICO: string;
  public PRAZO: Date;
  public PAGAMENTO: Date;
  public PROCESSOSEI: number;
  public TIPO: string;
  public STATUS: string;

  constructor(props: Omit<Exame, 'ID'>, ID?: string) {
    Object.assign(this, props);
    if (!ID) {
      this.ID = v4();
    }
  }
}
