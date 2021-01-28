import { Body, Controller, HttpCode, Post} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DistanciaEuclidianaDto } from './dto/distancia-euclidiana.dto';
import { RespostaDistanciaEuclidianaDto } from './dto/resposta-distancia-euclidiana.dto';
import { EnderecoService } from './endereco.service';

@Controller('endereco')
@ApiTags('endereco')
export class EnderecoController {
    constructor(
        private readonly enderecoService: EnderecoService,
    ) {}

    @ApiResponse({ status: 200, description: 'Sucesso (Success) - A solicitação obteve sucesso' })
    @ApiResponse({ status: 400, description: 'Requisição Inválida (Bad Request) - Erro na sintaxe da requisição' })
    @ApiResponse({ status: 404, description: 'Não Encontrado (Not Found) - O recurso solicitado não foi encontrado' })
    @ApiResponse({ status: 500, description: 'Erro Interno do Servidor (Internal Server Error) - Erro interno do servidor' })
    @ApiOperation({ description: 'Serviço responsável por retornar distância em kilômetros(KM) entre endereços.' })
    @Post('distancia-euclidiana')
    @ApiBody({ type: DistanciaEuclidianaDto, schema: { minItems: 2 } })
    @HttpCode(200)
    public async distancia_euclidiana(@Body() distanciaEuclidianaDto: DistanciaEuclidianaDto): Promise<RespostaDistanciaEuclidianaDto> {
        return this.enderecoService.retornaDistanciaEuclidiana(distanciaEuclidianaDto);
    }
    
}
