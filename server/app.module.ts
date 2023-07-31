import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {join} from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
@Module({
  
  controllers: [
    AppController,
  ],
})
export class AppModule {}
