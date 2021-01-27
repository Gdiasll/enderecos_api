import { Injectable, NotFoundException } from '@nestjs/common';
import { DistanciaEuclidiana } from 'src/domain/endereco/distanciaEuclidiana';
import { CalculaDistanciaEuclidianaDto } from 'src/domain/endereco/dto/calcula-distancia-euclidiana.dto';
import { RetornaDistanciaEuclidianaDto } from 'src/domain/endereco/dto/retorna-distancia-euclidiana.dto';
import { ApiGeocodingService } from 'src/infra/api-geocoding/api-geocoding.service';
import { ResponseApiGeocodingDto } from 'src/infra/api-geocoding/dto/response-api-geocoding.dto';
import { DistanciaEuclidianaDto } from './dto/distanciaEuclidiana.dto';

@Injectable()
export class EnderecoService {
    constructor(
        private readonly apiGeocodingService: ApiGeocodingService,
    ) {}

    public async retornaDistanciaEuclidiana(body: DistanciaEuclidianaDto): Promise<any> {

        let enderecosResolvidos: ResponseApiGeocodingDto[] = await Promise.all(body.enderecos.map(endereco => {
            return this.apiGeocodingService
                .findGeocoding(
                    { 
                        address: endereco, 
                        params: { result_type: 'street_address' }
                    }
                )
            ;
        }));

        const coordenadasEnderecos: CalculaDistanciaEuclidianaDto[] = enderecosResolvidos.map((endereco: ResponseApiGeocodingDto) => {
            if (endereco.status !== 'OK') throw new NotFoundException({ mensagem: 'Um dos endereços não foi encontrado.' });
            const enderecoTratado: CalculaDistanciaEuclidianaDto = {
                endereco: endereco.results[0].formatted_address,
                coordenadas: endereco.results[0].geometry.location,
            }
            return enderecoTratado;
        });

        const distanciasEuclidianas: RetornaDistanciaEuclidianaDto[] = new DistanciaEuclidiana()
            .calculaDistanciaCoordenadas(coordenadasEnderecos)
        ;
        
        return distanciasEuclidianas;
    }
}
