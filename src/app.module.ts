import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './modules/cats/cats.module';
import { HumansModule } from './modules/humans/humans.module';

@Module({
  imports: [
    CatsModule,
    MongooseModule.forRoot("mongodb://localhost:27017/cats"),
    HumansModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
