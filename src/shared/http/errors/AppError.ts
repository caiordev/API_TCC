class AppError {
  public readonly message: string;
  public readonly statusCode: number;
  //se nao for enviado nenhum, é usado como padrao o 400.
  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

export default AppError;
