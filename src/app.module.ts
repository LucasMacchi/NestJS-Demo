import { Module } from '@nestjs/common';
import { PingModule } from './ping/ping.module';
import { WelcomeController } from './welcome/welcome.controller';

@Module({
  imports: [PingModule],
  controllers: [WelcomeController]
})
export class AppModule {}
