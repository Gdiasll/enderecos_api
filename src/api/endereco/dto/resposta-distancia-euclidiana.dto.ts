import { RetornaDistanciaEuclidianaDto } from "src/domain/endereco/dto/retorna-distancia-euclidiana.dto";

export class RespostaDistanciaEuclidianaDto {
    maisProximos: RetornaDistanciaEuclidianaDto;
    maisDistantes: RetornaDistanciaEuclidianaDto;
    combinacoes: RetornaDistanciaEuclidianaDto[];
}