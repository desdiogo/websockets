import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoutesGateway } from './routes/routes.gateway';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, RoutesGateway],
})
export class AppModule {}
