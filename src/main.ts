import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';
import validationExceptionFactory from './utils/validation/validation-exception.factory';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      exceptionFactory: validationExceptionFactory,
      transform: true,
      whitelist: true,
    })
  )

  const config = new DocumentBuilder()
  .setTitle('Enderecos API')
  .setDescription('API com funcionalidades para tratamento de endereços')
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const CONFIGURACOES: ConfigService = app.get('ConfigService');

  await app.listen(CONFIGURACOES.get('API_PORTA'));
  Logger.log(`API rodando na porta ${CONFIGURACOES.get('API_PORTA')}`)
}
bootstrap();

