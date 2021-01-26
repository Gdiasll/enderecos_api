import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { EnderecoModule } from './endereco/endereco.module';

@Module({
  imports: [ConfigModule, EnderecoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
