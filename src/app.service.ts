import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return `
      <div>
        <h1>Endereços API</h1>
        <h2>Versão: 1.0.0</h2>
        <p>Para visualizar a página de documentação da API, acessar rota: /api</p>
      </div>
    `;
  }
}
