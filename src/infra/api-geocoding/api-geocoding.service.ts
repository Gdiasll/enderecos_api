import { Injectable, HttpService, HttpException } from '@nestjs/common';
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

    async findGeocoding(options: FindApiGeocodingDto, returnType: string = 'json'): Promise<ResponseApiGeocodingDto> {
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
                return e.data;
            }),
        ).toPromise();
    }
}