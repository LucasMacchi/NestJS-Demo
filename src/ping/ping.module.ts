import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import {PingController} from './ping.controller'
import { PingService } from './ping.service';
import { MiddleMiddleware } from './middle/middle.middleware';

@Module({
  controllers: [PingController],
  providers: [PingService]
})
export class PingModule implements NestModule{
  configure(consumer: MiddlewareConsumer) { 
    consumer.apply(MiddleMiddleware).forRoutes('test')
  }
}
