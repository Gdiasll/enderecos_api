import { IsNumber, IsOptional, IsObject } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';

const resultType = [
    'street_address',
    'route',
    'intersection',
    'political',
    'country',
    'administrative_area_level_1',
    'administrative_area_level_2',
    'administrative_area_level_3',
    'administrative_area_level_4',
    'administrative_area_level_5',
    'colloquial_area',
    'locality',
    'sublocality',
    'neighborhood',
    'premise',
    'subpremise',
    'postal_code',
    'natural_feature',
    'airport',
    'park',
    'point_of_interest',
];

const locationType = ['ROOFTOP', 'RANGE_INTERPOLATED', 'GEOMETRIC_CENTER', 'APPROXIMATE'];

export class LatLongDto {
    @ApiProperty()
    @Type(() => Number)
    @IsNumber()
    lat: number;

    @ApiProperty()
    @Type(() => Number)
    @IsNumber()
    lng: number;
}

export class ParamsDto {
    @ApiPropertyOptional({ enum: locationType })
    @IsOptional()
    location_type?: string;

    @ApiPropertyOptional({ enum: resultType })
    @IsOptional()
    result_type?: string;
}

export class FindApiGeocodingDto {
    @ApiProperty()
    @IsObject()
    address: string;

    @ApiPropertyOptional()
    @IsOptional()
    @IsObject()
    params?: ParamsDto;
}
