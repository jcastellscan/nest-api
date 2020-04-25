import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InformativesModule } from './informatives/informatives.module';

@Module({
  imports: [InformativesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
