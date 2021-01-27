import { Body, Controller, NotFoundException, Post, Res } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { DistanciaEuclidianaDto } from './dto/distanciaEuclidiana.dto';
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
    @ApiOperation({ description: 'Serviço responsável por realizar cálculo da distancia euclidiana entre endereços.' })
    @Post('distancia-euclidiana')
    @ApiBody({ type: DistanciaEuclidianaDto })
    public async distancia_euclidiana(@Res() res, @Body() distanciaEuclidianaDto) {
        try {
            return res.status(200).json(await this.enderecoService.retornaDistanciaEuclidiana(distanciaEuclidianaDto));
        } catch (error) {
            console.log(error) // será implementado sistema de logs
            if (error instanceof NotFoundException) return res.status(404).json(error.message)
            res.status(500).json({ mensagem: 'Erro interno do servidor.' })
        }
    }
    
}
