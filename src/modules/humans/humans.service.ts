import { CatsService } from './../cats/cats.service';
import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Mongoose } from 'mongoose';
import { Human, HumanDocument } from 'src/models/human.model';

@Injectable()
export class HumansService {
    constructor(@InjectModel(Human.name) private humanModel : Model<HumanDocument>, private readonly catsService: CatsService) {}

    findAll() {
        return this.humanModel.find().populate("chats")
    }

    findById(id : string) {
        return this.humanModel.findById(id);
    }

    async create(human : Human) {
        let createdHuman;
        if (human.chats) {
            let idCat = await this.catsService.create(human.chats)
            createdHuman = new this.humanModel({...human, chats:idCat});
        } else {
            createdHuman = new this.humanModel(human)
        }

        return createdHuman.save();
    }
}
