import { DistanciaEuclidiana } from "./distancia-euclidiana";
import { CalculaDistanciaEuclidianaDto } from "./dto/calcula-distancia-euclidiana.dto";
import { RetornaDistanciaEuclidianaDto } from "./dto/retorna-distancia-euclidiana.dto";

describe('DistanciaEuclidiana', () => {
    const distanciaEuclidiana: DistanciaEuclidiana = new DistanciaEuclidiana();

    describe('Teste de numero de combinações', ()=> {

      const testPayload: CalculaDistanciaEuclidianaDto[] = [
        {
          endereco: 'Rua teste 1',
          coordenadas: {
            lat: -24181515,
            lng: 516515156
          }
        },
        {
          endereco: 'Rua teste 2',
          coordenadas: {
            lat: -56165151,
            lng: 516515156
          }
        },
        {
          endereco: 'Rua teste 3',
          coordenadas: {
            lat: -11616513,
            lng: 516515156
          }
        }
      ];

      const resultado: RetornaDistanciaEuclidianaDto[] = distanciaEuclidiana
        .calculaDistanciaCoordenadas(testPayload)
      ;

      it('Total de combinações deverá sem 3', () => {
        expect(resultado.length).toBe(3);
      });
    });
});
