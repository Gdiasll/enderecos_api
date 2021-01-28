import { ApiProperty } from '@nestjs/swagger';
import { ArrayMaxSize, ArrayMinSize, IsArray, IsDefined, IsString, MinLength, minLength } from 'class-validator';

export class DistanciaEuclidianaDto {
    
    @IsDefined({ message: 'Campo (enderecos) não está definido.' })
    @IsArray({ message: 'Campo (enderecos) precisa ser um array.' })
    @IsString({ each: true, message: 'Campo (enderecos) aceita somente um array de strings' })
    @MinLength(1, { each: true, message: 'Endereço precisa conter pelo menos 1 caractere.' })
    @ArrayMinSize(2, { message: 'Campo (enderecos) precisa ter pelo menos 2 itens.' })
    @ArrayMaxSize(50, { message: 'Quantidade de endereços ultrapassou o limite permitido.' })
    @ApiProperty({
        isArray: true,
        type: [String],
    })
    enderecos: string[];
}
