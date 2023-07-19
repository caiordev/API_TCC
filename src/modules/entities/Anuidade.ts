import { v4 } from 'uuid';

export class Anuidade {
  public readonly ID?: string;
  public readonly ID_PATENTE?: string;
  public DataOrd1: Date;
  public DataOrd2: Date;
  public CodigoOrd: number;
  public ValorOrd: number;
  public DataPagamentoOrd: Date;
  public ProcessoSei: number;

  constructor(props: Omit<Anuidade, 'ID'>, ID?: string) {
    Object.assign(this, props);
    if (!ID) {
      this.ID = v4();
    }
  }
}
