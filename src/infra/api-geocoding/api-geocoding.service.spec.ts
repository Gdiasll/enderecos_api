import { Test, TestingModule } from '@nestjs/testing';
import { ApiGeocodingService } from './api-geocoding.service';

describe('ApiGeocodingService', () => {
  let service: ApiGeocodingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiGeocodingService],
    }).compile();

    service = module.get<ApiGeocodingService>(ApiGeocodingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
