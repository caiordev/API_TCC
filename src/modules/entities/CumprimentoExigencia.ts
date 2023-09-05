import { v4 } from 'uuid';

export class CumprimentoExigencia {
  public readonly ID?: string;
  public ID_PATENTE: string;
  public VALOR: number;
  public SERVICO: string;
  public PRAZO: Date;
  public PAGAMENTO: Date;
  public PROCESSOSEI: number;

  constructor(props: Omit<CumprimentoExigencia, 'ID'>, ID?: string) {
    Object.assign(this, props);
    if (!ID) {
      this.ID = v4();
    }
  }
}
