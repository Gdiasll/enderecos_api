import { ApiProperty } from '@nestjs/swagger';

export class DistanciaEuclidianaDto {
    
    @ApiProperty()
    enderecos: string[];
}
