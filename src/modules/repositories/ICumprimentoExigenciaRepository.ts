import { CumprimentoExigencia } from '../entities/CumprimentoExigencia';

export interface ICumprimentoExigenciaRepository {
  save(cumprimentoexigencia: CumprimentoExigencia): Promise<void>;
  getCumprimentoExigencia(): Promise<CumprimentoExigencia[]>;
  findById(ID: string): Promise<CumprimentoExigencia>;
  updateCumprimentoExigencia(
    ID: string,
    VALOR: number,
    SERVICO: string,
    PRAZO: Date,
    PAGAMENTO: Date,
    PROCESSOSEI: number,
  ): Promise<CumprimentoExigencia[]>;
  deleteCumprimentoExigencia(ID: string): Promise<CumprimentoExigencia[]>;
}
