import { Injectable, HttpService, HttpException, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { catchError, map } from 'rxjs/operators';
import { ConfigService } from 'src/config/config.service';
import { FindApiGeocodingDto } from './dto/find-api-geocoding.dto';
import { ResponseApiGeocodingDto } from './dto/response-api-geocoding.dto';

@Injectable()
export class ApiGeocodingService {
    private readonly urlGeocoding: string;
    private readonly apiKeyGeocoding: string;

    constructor(private readonly httpService: HttpService, configService: ConfigService) {
        this.urlGeocoding = configService.get('URL_GEOCODING');
        this.apiKeyGeocoding = configService.get('API_KEY_GEOCODING');
    }

    async findGeocoding(options: FindApiGeocodingDto, returnType = 'json'): Promise<ResponseApiGeocodingDto> {

        const errors: { 
            limite: string[], 
            desconhecido: string[], 
            semResultado: string[] 
        } = {
            limite: [
                'OVER_DAILY_LIMIT', 
                'OVER_QUERY_LIMIT', 
            ],
            desconhecido: [
                'REQUEST_DENIED', 
                'INVALID_REQUEST', 
                'UNKNOWN_ERROR',
            ],
            semResultado: [
                'ZERO_RESULTS',
            ]
        };

        const params = {
            address: options.address,
            ...options.params,
            key: this.apiKeyGeocoding,
        };

        return this.httpService.get(`${this.urlGeocoding}${returnType}`, { params }).pipe(
            catchError(e => {
                throw new HttpException(e.response.data, e.response.status);
            }),
            map(e => {

                if (e.data.status !== 'OK') {
                    if (errors.limite.includes(e.data.status)) 
                        throw new InternalServerErrorException('Chave de autenticação geocoding/cota de acesso expirado.');
                    if (errors.semResultado.includes(e.data.status))
                        throw new NotFoundException(
                            `Recurso de resolução de endereço não encontrou nenhum resultado para o endereço: ${options.address}.`
                        );
                    if (errors.desconhecido.includes(e.data.status))
                        throw new InternalServerErrorException('Problema desconhecido ao contatar geocoding API.');
                }

                return e.data;
            }),
        ).toPromise();
    }
}