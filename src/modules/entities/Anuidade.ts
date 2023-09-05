import { v4 } from 'uuid';

export class Anuidade {
  public readonly ID?: string;
  public ID_PATENTE: string;
  public DATAORD1: Date;
  public DATAORD2: Date;
  public CODIGOORD: number;
  public VALORORD: number;
  public DATAPAGAMENTOORD: Date;
  public PROCESSOSEI: number;
  public STATUS: string;

  constructor(props: Omit<Anuidade, 'ID'>, ID?: string) {
    Object.assign(this, props);
    if (!ID) {
      this.ID = v4();
    }
  }
}
