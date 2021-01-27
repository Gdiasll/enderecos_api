import { CalculaDistanciaEuclidianaDto } from "../dto/calcula-distancia-euclidiana.dto";
import { RetornaDistanciaEuclidianaDto } from "../dto/retorna-distancia-euclidiana.dto";

export interface IDistanciaEuclidiana {
    
    calculaDistanciaCoordenadas(options: CalculaDistanciaEuclidianaDto[]): RetornaDistanciaEuclidianaDto[];
}