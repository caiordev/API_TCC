import { v4 } from 'uuid';

export class User {
  public readonly ID?: string;
  public NOME: string;
  public EMAIL: string;
  public SENHA: string;
  public TIPO: number;

  constructor(props: Omit<User, 'ID'>, ID?: string) {
    Object.assign(this, props);
    if (!ID) {
      this.ID = v4();
    }
  }
}

//tipo 1 adm
//tipo 2 casual
