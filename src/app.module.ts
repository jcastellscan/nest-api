import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InformativesModule } from './informatives/informatives.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MONGO_CONNECTION } from './constants';

@Module({
  imports: [
    InformativesModule,
    MongooseModule.forRoot(
      MONGO_CONNECTION,
      {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
      })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
