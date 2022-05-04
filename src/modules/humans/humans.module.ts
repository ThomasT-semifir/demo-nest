import { Human, HumanSchema } from './../../models/human.model';
import { Module } from '@nestjs/common';
import { HumansService } from './humans.service';
import { HumansController } from './humans.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cat } from 'src/entities/cat.entity';
import { CatSchema } from 'src/models/cat.model';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Human.name, schema : HumanSchema }
  ])],
  providers: [HumansService],
  controllers: [HumansController]
})
export class HumansModule {}
