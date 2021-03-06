import { CatSchema } from './../../models/cat.model';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from 'src/entities/cat.entity';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Cat.name, schema : CatSchema }
    ])
  ],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
