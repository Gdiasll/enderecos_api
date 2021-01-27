import { HttpModule, Module } from '@nestjs/common';
import { ApiGeocodingModule } from 'src/infra/api-geocoding/api-geocoding.module';
import { ApiGeocodingService } from 'src/infra/api-geocoding/api-geocoding.service';
import { EnderecoController } from './endereco.controller';
import { EnderecoService } from './endereco.service';

@Module({
  imports: [ApiGeocodingModule],
  controllers: [EnderecoController],
  providers: [EnderecoService],
})
export class EnderecoModule {}
