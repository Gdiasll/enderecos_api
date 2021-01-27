import { Module, HttpModule, HttpService } from '@nestjs/common';
import { ConfigModule } from 'src/config/config.module';
import { ApiGeocodingService } from './api-geocoding.service';

@Module({
    imports: [ConfigModule, HttpModule],
    providers: [ApiGeocodingService],
    exports: [ApiGeocodingService],
})
export class ApiGeocodingModule {}
